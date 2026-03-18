import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const basePath = process.env.BASE_PATH || (isGitHubPages && repositoryName ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages && basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
