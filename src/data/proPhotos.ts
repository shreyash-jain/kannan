// The professional shoot — all 105 frames from the photographer's gallery,
// served from Cloudinary under kanaan/pro/.
//
// The slug keeps the photographer's own frame number, so any photo on the
// site can be traced straight back to the original gallery.
//
// Categories were assigned by looking at every frame, not guessed from the
// filename. Alt text is deliberately modest where a photo is one of many
// similar rooms — an honest general description beats a confident wrong one.

import { cldImage } from "@/lib/cloudinary";
import type { Img } from "@/lib/images";

export type ProCategory =
  | "rooms"
  | "camping"
  | "venue"
  | "land"
  | "facilities";

export type ProPhoto = Img & {
  id: string;
  category: ProCategory;
  /**
   * A small square crop for grid tiles. The full frame is 1600px and about
   * 900KB; a tile renders at roughly 250px. Asking Cloudinary for the size
   * we actually draw is ~56KB — sixteen times less over the wire, and it
   * does not depend on an image optimiser being available at the edge.
   */
  thumb: string;
};

const RAW: { id: string; category: ProCategory; alt: string }[] = [
  { id: "arn-5694", category: "land", alt: "The Lowveld seen from the high ground on Kanaan — the braai stand at the viewpoint and the valley falling away beyond it." },
  { id: "arn-5697", category: "land", alt: "The Lowveld seen from the high ground on Kanaan — the braai stand at the viewpoint and the valley falling away beyond it." },
  { id: "arn-5703", category: "land", alt: "The Lowveld seen from the high ground on Kanaan — the braai stand at the viewpoint and the valley falling away beyond it." },
  { id: "arn-5708", category: "land", alt: "The Lowveld seen from the high ground on Kanaan — the braai stand at the viewpoint and the valley falling away beyond it." },
  { id: "arn-5712", category: "land", alt: "The Lowveld seen from the high ground on Kanaan — the braai stand at the viewpoint and the valley falling away beyond it." },
  { id: "arn-5715", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5722", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5724", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5726", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5728", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5733", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5736", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5741", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5745", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5751", category: "rooms", alt: "A whitewashed lodge unit at Kanaan with door number 12, a small lawn and a young garden in front." },
  { id: "arn-5757", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5763", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5764", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5771", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5774", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5778", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5779", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5782", category: "rooms", alt: "A row of numbered lodge doors at Kanaan — rooms 16 and 15 under a shaded walkway." },
  { id: "arn-5787", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5790", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5793", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5794", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5798", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5800", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5805", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5807", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5819", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5823", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5829", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5834", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5839", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5841", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5842", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5845", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5846", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5850", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5851", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5854", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5858", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5859", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5862", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5869", category: "rooms", alt: "The wooden house at Kanaan seen from outside — a timber-clad cabin under the trees." },
  { id: "arn-5871", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5873", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5875", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5878", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5881", category: "venue", alt: "The covered venue at Kanaan — a long open-sided roof standing on the lawn under the mango trees." },
  { id: "arn-5885", category: "facilities", alt: "The swimming pool at Kanaan — clear blue water, a brick surround and palms standing over it." },
  { id: "arn-5893", category: "facilities", alt: "The Kanaan pool seen through the palms and old trees that shade it." },
  { id: "arn-5903", category: "facilities", alt: "The pool at Kanaan behind its timber fence, with the lodge units beyond." },
  { id: "arn-5904", category: "facilities", alt: "The fenced pool area at Kanaan, under the shade of the old trees." },
  { id: "arn-5910", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5912", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5916", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5925", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5928", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5940", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5947", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5956", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5962", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5964", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5965", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5973", category: "facilities", alt: "The pool table in the entertainment room at Kanaan." },
  { id: "arn-5975", category: "facilities", alt: "The entertainment room at Kanaan — pool table and foosball under a wooden-beamed ceiling." },
  { id: "arn-5977", category: "facilities", alt: "The foosball table in the entertainment room at Kanaan." },
  { id: "arn-5983", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5986", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-5992", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6004", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6007", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6017", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6021", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6027", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6029", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6033", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6036", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-6039", category: "venue", alt: "The covered venue at Kanaan — a long open-sided roof standing on the lawn under the mango trees." },
  { id: "arn-6052", category: "venue", alt: "The covered venue at Kanaan — a long open-sided roof standing on the lawn under the mango trees." },
  { id: "arn-6056", category: "venue", alt: "The covered venue at Kanaan — a long open-sided roof standing on the lawn under the mango trees." },
  { id: "arn-6060", category: "venue", alt: "The covered venue at Kanaan — a long open-sided roof standing on the lawn under the mango trees." },
  { id: "arn-6066", category: "camping", alt: "The camping ground at Kanaan, under the avenue of forty-year-old mango trees." },
  { id: "arn-6068", category: "camping", alt: "The camping ground at Kanaan, under the avenue of forty-year-old mango trees." },
  { id: "arn-6070", category: "camping", alt: "The camping ground at Kanaan, under the avenue of forty-year-old mango trees." },
  { id: "arn-6071", category: "facilities", alt: "The signed entrance gate at Kanaan Guest Farm on the R40." },
  { id: "arn-6076", category: "facilities", alt: "The motorised security gate at the entrance to Kanaan Guest Farm." },
  { id: "arn-7012", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7018", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7022", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7024", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7031", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7035", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7037", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7042", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7044", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7049", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7058", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7059", category: "rooms", alt: "The door to room 20 at Kanaan — a timber door numbered in white under a shaded veranda." },
  { id: "arn-7063", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7069", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
  { id: "arn-7075", category: "rooms", alt: "A room at Kanaan Guest Farm, photographed as it is." },
];

export const proPhotos: ProPhoto[] = RAW.map((p) => ({
  id: p.id,
  category: p.category,
  src: cldImage(`pro/${p.id}`),
  thumb: cldImage(`pro/${p.id}`, "f_auto,q_auto,c_fill,g_auto,ar_1:1,w_520"),
  alt: p.alt,
  width: 1600,
  height: 1067,
}));

export function proByCategory(category: ProCategory): ProPhoto[] {
  return proPhotos.filter((p) => p.category === category);
}

/** One frame by its photographer number, e.g. pro(6017) -> arn-6017. */
export function pro(frame: number): ProPhoto {
  const found = proPhotos.find((p) => p.id === `arn-${frame}`);
  if (!found) throw new Error(`no professional photo arn-${frame}`);
  return found;
}
