import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the project root so a stray lockfile higher up the tree cannot cause
  // Next.js to infer the wrong workspace root.
  outputFileTracingRoot: path.join(process.cwd()),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
