// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-archive-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/archive.js" /* webpackChunkName: "component---src-templates-archive-js" */),
  "component---src-templates-travel-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/travel.js" /* webpackChunkName: "component---src-templates-travel-js" */),
  "component---src-templates-guide-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/guide.js" /* webpackChunkName: "component---src-templates-guide-js" */),
  "component---src-templates-opinion-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/opinion.js" /* webpackChunkName: "component---src-templates-opinion-js" */),
  "component---src-templates-tech-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/templates/tech.js" /* webpackChunkName: "component---src-templates-tech-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/zbyszrom/Desktop/travel-blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-thanks-js": () => import("/Users/zbyszrom/Desktop/travel-blog/src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/zbyszrom/Desktop/travel-blog/.cache/data.json")

