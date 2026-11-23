import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const defaultGithubBasePath =
  isGithubActions && repoName && !repoName.endsWith(".github.io")
    ? `/${repoName}`
    : "";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? defaultGithubBasePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
