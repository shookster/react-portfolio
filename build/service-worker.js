/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable https caching for this file too.
 * See httpss://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See httpss://goo.gl/2aRDsh
 */

importScripts(
  "httpss://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

importScripts(
  "/react-portfolio/precache-manifest.909def172b3d726018cb49618489d56a.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See httpss://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/react-portfolio/index.html", {
  blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
});
