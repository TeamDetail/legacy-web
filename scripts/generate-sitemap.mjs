// generate-sitemap.js
import SitemapGenerator from "./sitemap-generator.mjs";

// Sitemap 설정
const sitemapConfig = {
  // 실제 도메인으로 변경하세요
  domain: "https://www.legacygame.site",

  // sitemap.xml을 저장할 경로
  outputPath: "./public",

  // 사이트의 모든 정적 라우트
  routes: [
    // 간단한 문자열로 지정 (기본 설정 사용)
    "/",
    "/adventure",
    "/profile",
    "/trial",
    "/shop",
    "/ranking",
    "/achievement",
    "/course",
  ],

  // Sitemap에서 제외할 경로
  excludePaths: [
    "/login",
    "/login/verify",
    "/trial",
  ],

  // 기본 설정 (개별 설정이 없는 라우트에 적용)
  defaultPriority: 0.5,
  defaultChangefreq: "weekly",
};

// Sitemap 생성 실행
const generator = new SitemapGenerator(sitemapConfig);
const result = generator.generate();

if (result.success) {
  console.log(`✅ Sitemap generated: ${result.path}`);
  console.log(`📊 Total URLs: ${result.urlCount}`);
} else {
  console.error(`❌ Failed to generate sitemap: ${result.error}`);
  process.exit(1);
}
