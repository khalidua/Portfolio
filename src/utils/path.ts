/**
 * Resolves absolute asset paths to include the correct Vite base URL.
 * Under GitHub Pages, base is '/Portfolio/', so '/resume.pdf' becomes '/Portfolio/resume.pdf'.
 * Under local dev, base is '/', so '/resume.pdf' remains '/resume.pdf'.
 */
export function getAssetPath(path: string): string {
  if (path && path.startsWith('/')) {
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}${path.slice(1)}`;
  }
  return path;
}
