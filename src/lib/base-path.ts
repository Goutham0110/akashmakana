// If the site is ever served from a sub-path, set this to match `basePath` in
// next.config.ts (e.g. "/site"). Next prefixes next/link and Next-managed assets
// automatically, but raw string URLs (e.g. an <img src> built from a data file)
// are not touched, so this helper prepends the base path to them.
// While the site is served from the domain root, BASE_PATH is "" and this is a no-op.

export const BASE_PATH = "";

/**
 * Normalize a root-relative path. Absolute URLs (http/https) and data URIs are
 * returned untouched; everything else gets a leading slash and the base path.
 */
export function withBasePath(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
