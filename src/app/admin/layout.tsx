"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, LogOut, Loader } from "./icons";

const AUTH_KEY = "admin_auth";
const AUTH_EVENT = "admin-auth-change";

function subscribe(onChange: () => void) {
  // "storage" covers other tabs; the custom event covers this one, since
  // localStorage writes do not notify the tab that made them.
  window.addEventListener("storage", onChange);
  window.addEventListener(AUTH_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(AUTH_EVENT, onChange);
  };
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Read the flag as external state rather than copying it into an effect —
  // no setState during render, and it stays correct across tabs.
  const isAuthorized = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(AUTH_KEY) === "true",
    () => false, // server render: always unauthorised, so nothing leaks into HTML
  );

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) return;
    // Read the flag directly rather than using `isAuthorized` from the render
    // that owns this effect. On hydration useSyncExternalStore renders with the
    // SERVER snapshot (false) and only swaps in the real value on the following
    // render — so trusting it here bounced a freshly-signed-in user straight
    // back to /admin/login. localStorage is the truth at this moment.
    if (localStorage.getItem(AUTH_KEY) !== "true") router.replace("/admin/login");
  }, [isLoginPage, isAuthorized, router]);

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new Event(AUTH_EVENT));
    router.replace("/admin/login");
  }

  // The login screen is its own full-page composition.
  if (isLoginPage) return <>{children}</>;

  // Covers both the pre-hydration render and the moment before the redirect
  // to /admin/login lands.
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <aside className="border-r border-gray-100 bg-white shadow-sm flex flex-col md:h-screen md:sticky md:top-0 z-50">
        <div className="p-6">
          <div className="font-bold text-xl tracking-tight text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg" />
            Kanaan
          </div>
          <p className="text-xs text-gray-500 mt-1 pl-10">Admin Workspace</p>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-3 py-4">
          <NavLink href="/admin" icon={<LayoutDashboard className="w-5 h-5" />}>
            Dashboard
          </NavLink>
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group"
          >
            <span className="text-gray-400 group-hover:text-gray-600">
              <FileText className="w-5 h-5" />
            </span>
            View journal
          </a>
        </nav>

        <div className="p-4 mt-auto border-t border-gray-50">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>
      <main className="p-4 sm:p-8 bg-gray-50/30 min-h-screen">{children}</main>
    </div>
  );
}

function NavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/admin" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
                ${
                  isActive
                    ? "bg-black text-white shadow-lg shadow-black/10"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
    >
      <span
        className={isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"}
      >
        {icon}
      </span>
      {children}
    </Link>
  );
}
