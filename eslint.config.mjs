import { createRequire } from "node:module";
import Module from "node:module";

const require = createRequire(import.meta.url);
const typescript6Entry = require.resolve("@typescript/typescript6");
const resolveFilename = Module._resolveFilename;

Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === "typescript") {
    return typescript6Entry;
  }
  return resolveFilename.call(this, request, parent, isMain, options);
};

const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypescript = require("eslint-config-next/typescript");

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript];

export default eslintConfig;
