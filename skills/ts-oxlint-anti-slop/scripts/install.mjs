#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(skillRoot, "assets/anti-slop");
const arguments_ = process.argv.slice(2);
const destinations = arguments_.filter((argument) => !argument.startsWith("--"));
const unknownOptions = arguments_.filter((argument) => argument.startsWith("--") && argument !== "--force");

if (destinations.length > 1 || unknownOptions.length > 0) {
  console.error("Usage: install.mjs [relative-destination] [--force]");
  process.exit(1);
}

const targetArgument = destinations[0];
const repositoryRoot = resolve(process.cwd());
const destination = targetArgument ?? "tools/oxlint/anti-slop";
const force = arguments_.includes("--force");
const target = resolve(repositoryRoot, destination);
const relativeTarget = relative(repositoryRoot, target);

if (isAbsolute(destination) || relativeTarget === "" || relativeTarget === ".." || relativeTarget.startsWith(`..${process.platform === "win32" ? "\\\\" : "/"}`) || isAbsolute(relativeTarget)) {
  console.error("Destination must be a relative path contained within the current repository.");
  process.exit(1);
}

if (existsSync(target) && !force) {
  console.error(`Refusing to overwrite ${target}. Re-run with --force only after reviewing the existing files.`);
  process.exit(1);
}

if (existsSync(target)) {
  console.warn(`Replacing ${target}; --force removes the existing directory so stale files are not retained.`);
  rmSync(target, { recursive: true, force: true });
}

mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true, force });
console.log(`Copied the anti-slop plugin to ${target}`);
console.log(`Configure Oxlint with: ${target}/index.ts`);
