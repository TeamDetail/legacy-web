// sitemap-generator.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class SitemapGenerator {
  constructor(config = {}) {
    this.domain = config.domain || "https://example.com";
    this.outputPath = config.outputPath || "./public";
    this.routes = config.routes || [];
    this.excludePaths = config.excludePaths || [];
    this.defaultPriority = config.defaultPriority || 0.5;
    this.defaultChangefreq = config.defaultChangefreq || "weekly";
  }

  // 현재 날짜를 YYYY-MM-DD 형식으로 반환
  getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // XML 헤더 생성
  getXMLHeader() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  }

  // XML 푸터 생성
  getXMLFooter() {
    return `</urlset>`;
  }

  // 단일 URL 엔트리 생성
  createURLEntry(path, options = {}) {
    const url = `${this.domain}${path}`;
    const lastmod = options.lastmod || this.getCurrentDate();
    const changefreq = options.changefreq || this.defaultChangefreq;
    const priority = options.priority || this.defaultPriority;

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  // 정적 라우트 처리
  processRoutes() {
    return this.routes
      .filter((route) => {
        const routePath = typeof route === "string" ? route : route.path;
        return !this.excludePaths.includes(routePath);
      })
      .map((route) => {
        if (typeof route === "string") {
          return this.createURLEntry(route);
        }
        return this.createURLEntry(route.path, route);
      });
  }

  // Sitemap 생성
  generate() {
    try {
      // 정적 라우트 처리
      const entries = this.processRoutes();

      // 전체 sitemap 조합
      const sitemap = [
        this.getXMLHeader(),
        ...entries,
        this.getXMLFooter(),
      ].join("\n");

      // 디렉토리가 없으면 생성
      if (!fs.existsSync(this.outputPath)) {
        fs.mkdirSync(this.outputPath, { recursive: true });
      }

      // sitemap.xml 파일 저장
      const outputFile = path.join(this.outputPath, "sitemap.xml");
      fs.writeFileSync(outputFile, sitemap, "utf-8");

      // robots.txt 생성
      this.generateRobotsTxt();

      return {
        success: true,
        path: outputFile,
        urlCount: entries.length,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // robots.txt 생성
  generateRobotsTxt() {
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${this.domain}/sitemap.xml`;

    const robotsPath = path.join(this.outputPath, "robots.txt");
    fs.writeFileSync(robotsPath, robotsContent, "utf-8");
  }
}
