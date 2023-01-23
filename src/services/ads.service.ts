import allAds from "../../data/ads";
import type { Ads } from "../models/ads";

export const getRandomAd = (): Ads =>
  allAds[Math.floor(Math.random() * allAds.length)];
