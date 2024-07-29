import * as minimatch from "minimatch";

console.log(minimatch.match([
  "bun",
  "bun:sqlite",
], "bun:*"));
