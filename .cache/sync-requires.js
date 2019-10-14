const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/blog.js"))),
  "component---src-templates-archive-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/archive.js"))),
  "component---src-templates-travel-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/travel.js"))),
  "component---src-templates-guide-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/guide.js"))),
  "component---src-templates-opinion-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/opinion.js"))),
  "component---src-templates-tech-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/templates/tech.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/pages/page-2.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/zbyszrom/Desktop/travel-blog/src/pages/thanks.js")))
}

