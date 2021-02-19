import { height, width } from "screenz";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { Metadata, Options } from "../types/interfaces";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const log = (...data: string[]) => console.log(new Date(), ...data);

dotenv.config();

const SAVE_FILES_PATH = process.env.SAVE_FILES_PATH || process.env.HOME || "~";
const QUERY = process.env.QUERY || "";
const HEIGHT = process.env.HEIGHT || height;
const WIDTH = process.env.WIDTH || width;

const apiKeys = JSON.parse(process.env.API_KEYS || "") || [];
const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

function buildUrl({
  featured,
  orientation,
  query,
  width,
  height,
}: Options): string {
  const orientation_ = orientation ? `&orientation=${orientation}` : "";
  const featured_ = featured ? "&featured" : "";
  const height_ = height ? `&h=${height}` : "";
  const width_ = width ? `&w=${width}` : "";
  const query_ = query ? `&query=${query}` : "";
  return (
    `https://api.unsplash.com/photos/random?client_id=${apiKey}` +
    orientation_ +
    featured_ +
    width_ +
    height_ +
    width_ +
    query_
  );
}

async function downloadNewWallPaperMetadata(
  options: Options
): Promise<Metadata> {
  const url = buildUrl(options);
  log(`Downloading ${url}`);
  const response = await fetch(url);
  return response.json();
}

async function downloadNewWallpaper(url: string): Promise<Buffer> {
  log(`Downloading image from: ${url}`);
  return (await fetch(url)).buffer();
}

function saveFile(where: string, data: Buffer) {
  fs.writeFileSync(where, data);
  log(`Saved pic at: ${SAVE_FILES_PATH} as ${where}`);
}

function setNewWallpaper(fileUri: string) {
  spawn("dconf", [
    "write",
    "/org/gnome/desktop/background/picture-uri",
    `'file://${fileUri}'`,
  ]);
}

async function exec() {
  const metadata: Metadata = await downloadNewWallPaperMetadata({
    height: HEIGHT,
    width: WIDTH,
    orientation: "landscape",
    query: QUERY,
    featured: true,
  });

  log(`Downloaded metadata: ${metadata.alt_description}`);
  if (!metadata) {
    return;
  }

  const image: Buffer = await downloadNewWallpaper(metadata.urls.custom);
  const fileUri = path.join(
    SAVE_FILES_PATH,
    `${metadata.alt_description.replace(
      /\s/g,
      "-"
    )}-by-${metadata.user.name.replace(/\s/g, "-")}.jpg`
  );
  saveFile(fileUri, image);
  setNewWallpaper(fileUri);
}

exec();
