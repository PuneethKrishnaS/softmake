import saasBlogRaw from '../content/blogs/scalable-saas-architecture.mdx?raw';
import erpBlogRaw from '../content/blogs/migrating-legacy-erp.mdx?raw';
import erpIntegrationRaw from '../content/blogs/choosing-erp-integrations.mdx?raw';
import apiSecurityRaw from '../content/blogs/securing-api-endpoints.mdx?raw';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tagline: string;
  readTime: string;
  category: string;
  content: string;
}

// Simple frontmatter parser
function parseMDX(slug: string, rawContent: string): BlogPost {
  const lines = rawContent.split('\n');
  const frontmatter: Record<string, string> = {};
  let bodyStartIndex = 0;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---') {
      if (inFrontmatter) {
        inFrontmatter = false;
        bodyStartIndex = i + 1;
        break;
      } else {
        inFrontmatter = true;
      }
      continue;
    }

    if (inFrontmatter) {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim().replace(/^["']|["']$/g, '');
        frontmatter[key] = value;
      }
    }
  }

  const content = lines.slice(bodyStartIndex).join('\n').trim();

  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || '',
    author: frontmatter.author || 'Anonymous',
    tagline: frontmatter.tagline || '',
    readTime: frontmatter.readTime || '',
    category: frontmatter.category || 'General',
    content
  };
}

export const blogsRegistry: Record<string, BlogPost> = {
  "scalable-saas-architecture": parseMDX("scalable-saas-architecture", saasBlogRaw),
  "migrating-legacy-erp": parseMDX("migrating-legacy-erp", erpBlogRaw),
  "choosing-erp-integrations": parseMDX("choosing-erp-integrations", erpIntegrationRaw),
  "securing-api-endpoints": parseMDX("securing-api-endpoints", apiSecurityRaw)
};
