// The three kinds of group Kanaan hosts, each with a page of its own.
//
// These were cards on /group-functions whose "Explore" link went straight
// to WhatsApp — asking someone to start a conversation before they had been
// told anything. Each now has somewhere to actually explore.

import { img, type Img } from "@/lib/images";
import { pro } from "./proPhotos";
import { site } from "@/lib/site";

export type GroupType = {
  slug: string;
  name: string;
  eyebrow: string;
  /** One line for the card on /group-functions. */
  summary: string;
  /** The opening line on its own page. */
  lede: string;
  hero: Img;
  stats: { value: string; unit?: string; label: string }[];
  /** Why this farm suits this kind of group. */
  body: string[];
  pull: string;
  bodyImage: Img;
  /** Things to actually do while they are here. */
  doing: { title: string; body: string }[];
  /** The questions this particular organiser asks first. */
  faqs: { q: string; a: string }[];
  gallery: Img[];
  /** Pre-filled WhatsApp subject. */
  enquiry: string;
};

export const groupTypes: GroupType[] = [
  {
    slug: "school-groups",
    name: "School groups & tours",
    eyebrow: "Most popular",
    summary:
      "Dorm beds, camping and a fenced property with one gate. Kruger is half an hour away, the trails start at the fence, and there is space for a whole grade to be outside at once.",
    lede:
      "One fence, one gate, and a whole farm for the group — with the Kruger National Park half an hour up the road.",
    hero: pro(6070),
    stats: [
      { value: String(site.capacity.sleepingTotal), unit: "+", label: "Beds under roof" },
      { value: String(site.capacity.campingPeople), label: "More, camping" },
      { value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`, unit: "min", label: "To a Kruger gate" },
      { value: "1", label: "Gate in or out" },
    ],
    body: [
      "The thing teachers ask about first is not the beds — it is whether they can account for everybody. The whole property is fenced with a single motorised gate, and both owners live on site, so there is one way in and one way out and somebody is always here.",
      "Beyond that it is space. Dorm beds in the wooden house, rooms across the lodge, and a camping ground under forty-year-old mango trees that takes another eighty. A whole grade can be outside at the same time without anyone being on top of anyone else.",
    ],
    pull: "Trails start at our own fence — no bus needed to go walking.",
    bodyImage: pro(6052),
    doing: [
      { title: "A day in Kruger", body: `The Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes away, so a bus can leave at first light and be back for a swim.` },
      { title: "Hiking on the farm", body: "Marked trails run from the fence out through the macadamias and into the bushveld. No transport, no permits, no waiting." },
      { title: "The waterfall & rock pool", body: "Smooth rock shelves and a clear pool on the far side of the farm, with the valley opening out below — a proper walk with something at the end of it." },
      { title: "The Panorama Route", body: "God's Window, Bourke's Luck Potholes and the Blyde River Canyon make a full day out, about ninety minutes from the gate." },
      { title: "Swimming & games", body: "The pool is ready year-round, and the entertainment room has a pool table and foosball for the hours between things." },
      { title: "Fire and stars", body: "A communal braai, and a sky far enough from town that the stars still do the work for you." },
    ],
    faqs: [
      { q: "Is the property secure?", a: "Fully fenced with a single motorised gate. Anneli and Matthew live on the farm, so there is always someone here." },
      { q: "Can we have the whole farm?", a: "Yes — exclusive use is possible. Send your numbers and dates and we will check what is open." },
      { q: "Where do teachers sleep?", a: "In lodge rooms with their own en-suite, close to the dorm and the camping ground rather than across the property." },
      { q: "Can a bus get in?", a: "The R40 runs to our gate, and there is turning and parking space inside the fence." },
      { q: "What about meals?", a: `We cook a continental breakfast at R${site.meals.breakfast.pricePerPersonZAR} a head and a South African braai for dinner, both on order — or bring your own caterer and use the kitchen.` },
      { q: "Quiet hours?", a: `${site.policies.quietHours}, which tends to suit everyone when there is an early start the next day.` },
    ],
    gallery: [pro(6070), pro(6066), pro(6039), pro(5839), pro(5841), pro(5869), img.campingGround, img.campingAblutions],
    enquiry: "bringing a school group to Kanaan",
  },
  {
    slug: "church-community",
    name: "Church & community weekends",
    eyebrow: "Whole-farm use",
    summary: `A covered hall for ${site.capacity.wedding.indoor}, a fire big enough for everyone, and accommodation across four price points so nobody is priced out of the weekend.`,
    lede:
      "A covered hall, a fire everyone can sit around, and beds at four different prices — so the whole congregation can come, not just some of it.",
    hero: pro(6039),
    stats: [
      { value: String(site.capacity.wedding.indoor), label: "Seated, undercover" },
      { value: String(site.capacity.wedding.withMarquee), label: "With a marquee" },
      { value: "4", label: "Price points" },
      { value: "1", label: "Fence around it all" },
    ],
    body: [
      "The hardest part of a church or community weekend is usually money — a venue that suits one family prices out another. Kanaan has four kinds of bed inside one fence: lodge rooms with their own bathroom and kitchen, simple twin rooms, dorm beds in the wooden house, and shaded camping. Everyone is on the same farm, at the price that suits them.",
      "The venue itself is open-sided and covered, seating sixty at long tables with the Lowveld on one side of the room rather than through a window. Put a marquee on the lawn and it takes a hundred.",
    ],
    pull: "Nobody drives home. That is usually the whole point of the weekend.",
    bodyImage: img.venueCovered,
    doing: [
      { title: "Gather under cover", body: "Long tables, a bar counter and a games corner, open to the valley — it works for a session, a meal or a long evening." },
      { title: "Sit around a fire", body: "A communal braai big enough for the whole group, which is where most weekends here actually end up." },
      { title: "Walk the farm", body: "Marked hiking and mountain-biking trails from the gate, out through the macadamias and into the bushveld." },
      { title: "The waterfall", body: "Rock shelves and a clear pool at the far end of the property, with the valley below — a good morning's walk." },
      { title: "Swim", body: "The pool is kept ready year-round, with shade and seating around it." },
      { title: "Kruger, if you want it", body: `A gate is ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes away for anyone who wants to make a day of it.` },
    ],
    faqs: [
      { q: "How many can you seat?", a: `${site.capacity.wedding.indoor} under the covered venue, or ${site.capacity.wedding.withMarquee} with a marquee on the lawn.` },
      { q: "Can we cater ourselves?", a: "Yes — bring your own caterer and use the kitchen, or let us cook breakfast and a braai dinner on order." },
      { q: "Can we have the farm to ourselves?", a: "Exclusive use is possible. Tell us your numbers and dates and we will confirm." },
      { q: "What if it rains?", a: "The venue is roofed and open-sided, and the entertainment room is indoors with a pool table, foosball and a television." },
      { q: "Is there somewhere quiet?", a: "The farm runs well beyond the lodge — the viewpoint, the mango grove and the trails all give people somewhere to be on their own." },
    ],
    gallery: [pro(6039), pro(6052), pro(6060), img.venueCovered, img.venueTables, pro(5973), pro(5885), img.hilltopViewpoint],
    enquiry: "a church or community weekend at Kanaan",
  },
  {
    slug: "team-family",
    name: "Team & family gatherings",
    eyebrow: "Reunions & milestones",
    summary:
      "Work weekends, reunions and milestone birthdays. Everyone sleeps on the farm, so the evening ends around the fire instead of in a car park.",
    lede:
      "Reunions, work weekends and milestone birthdays — on a farm where everybody sleeps, so nobody has to leave at ten.",
    hero: pro(6066),
    stats: [
      { value: String(site.capacity.sleepingTotal), unit: "+", label: "Beds under roof" },
      { value: String(site.capacity.campingPeople), label: "More, camping" },
      { value: String(site.capacity.wedding.indoor), label: "Around one table" },
      { value: `${site.distances.kmiaMinutes}`, unit: "min", label: "From the airport" },
    ],
    body: [
      "The difference between a gathering people remember and one they endure is usually whether anyone has to drive. Everybody sleeps on the farm here — across lodge rooms, twin rooms, the wooden house and the camping ground — so the evening winds down around a fire instead of breaking up in a car park at ten o'clock.",
      "It suits the milestone weekends that are hard to place: a sixtieth where three generations need different kinds of bed, a family spread across the country meeting in the middle, a work weekend that should not feel like a conference centre.",
    ],
    pull: "Three generations, four kinds of bed, one fence around all of it.",
    bodyImage: pro(6070),
    doing: [
      { title: "Braai together", body: "A communal fire and a covered venue seating sixty, so a long dinner does not depend on the weather." },
      { title: "Swim and sit", body: "The pool with shade and seating around it — where most of a hot afternoon tends to go." },
      { title: "Pool table & foosball", body: "The entertainment room, free to everyone staying, and reliably where the younger half of the family ends up." },
      { title: "Walk to the viewpoint", body: "Up through the macadamias to the high ground, with the Lowveld running to the escarpment." },
      { title: "The waterfall & rock pool", body: "Far enough to feel like an outing, close enough to do before lunch." },
      { title: "A day in Kruger", body: `${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes to a gate, for whoever wants it — the rest can stay by the pool.` },
    ],
    faqs: [
      { q: "How many can stay?", a: `Around ${site.capacity.sleepingTotal} under roof, plus up to ${site.capacity.campingPeople} camping.` },
      { q: "Do you have rooms for older guests?", a: "Lodge rooms have their own en-suite bathroom, a kitchenette and a TV, and sit close to the parking rather than up a hill." },
      { q: "Can we hire the whole farm?", a: "Yes, subject to dates. Send your numbers and we will check." },
      { q: "Catering", a: `Breakfast at R${site.meals.breakfast.pricePerPersonZAR} a head and a South African braai dinner, both on order, or self-cater in the lodge kitchenettes.` },
      { q: "Getting here", a: `${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport, and about 4½ hours from OR Tambo on the N4.` },
    ],
    gallery: [pro(6066), pro(6070), pro(5885), img.venueCovered, pro(5973), img.hilltopViewpoint, img.lodgeRoom, img.campingGround],
    enquiry: "a family or team gathering at Kanaan",
  },
];

export function groupBySlug(slug: string): GroupType | undefined {
  return groupTypes.find((g) => g.slug === slug);
}
