// postbuild.js
// Copies dist/index.html to dist/404.html for GitHub Pages SPA routing
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

fs.copyFileSync(indexPath, notFoundPath);
console.log("Copied index.html to 404.html for SPA fallback.");
