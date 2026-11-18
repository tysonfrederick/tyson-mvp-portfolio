import fs from "node:fs";
import path from "node:path";
import { labExperiments, type LabExperimentView } from "@/data/labs";

function publicFileExists(src: string): boolean {
  const relative = src.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

function alternateRaster(screenshot: string): string | null {
  if (/\.jpe?g$/i.test(screenshot)) {
    return screenshot.replace(/\.jpe?g$/i, ".png");
  }
  if (/\.png$/i.test(screenshot)) {
    return screenshot.replace(/\.png$/i, ".jpg");
  }
  return null;
}

/** Registry path first, then a same-name raster, then a dark-surface fallback. */
export function resolveLabScreenshot(screenshot: string): string | null {
  const alternate = alternateRaster(screenshot);
  const candidates = alternate ? [screenshot, alternate] : [screenshot];

  for (const candidate of candidates) {
    if (publicFileExists(candidate)) {
      return candidate.startsWith("/") ? candidate : `/${candidate}`;
    }
  }

  return null;
}

export function getLabViews(): LabExperimentView[] {
  return labExperiments.map((experiment) => ({
    ...experiment,
    imageSrc: resolveLabScreenshot(experiment.screenshot),
  }));
}
