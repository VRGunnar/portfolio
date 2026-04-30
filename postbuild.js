// Copies dist/index.html to dist/404.html for GitHub Pages SPA routing.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);
const distDir = path.join(currentDirPath, "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  throw new Error(`Cannot create 404 fallback: missing ${indexPath}`);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Copied index.html to 404.html for SPA fallback.");

// Ensure CNAME is present in dist for GitHub Pages custom domain
const cnameSrc = path.join(currentDirPath, "CNAME");
const cnameDest = path.join(distDir, "CNAME");
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, cnameDest);
  console.log("Copied CNAME to dist for GitHub Pages custom domain.");
} else {
  console.warn(
    "CNAME file not found in project root; custom domain may not work.",
  );
}
