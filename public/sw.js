if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,c,i)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+n.slice(1)};return Promise.all(c.map((n=>{switch(n){case"exports":return s;case"module":return a;default:return e(n)}}))).then((e=>{const n=i(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/39RI6tfJweTtcnlwfEdY7/_buildManifest.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/39RI6tfJweTtcnlwfEdY7/_ssgManifest.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.9950f9c64b321080c947.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.4a5a0056676abdb36802.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/main-f4b8f66a02d99f817ab5.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/pages/_app-109ce90aaeda08f3d29b.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/pages/_error-306b9a5d71f3aab9ff93.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/pages/app-dc505be2c61360019535.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/pages/index-146f8fedd707f4d51a90.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"39RI6tfJweTtcnlwfEdY7"},{url:"/icons/android-chrome-192x192.png",revision:"af7d9dce06f35bc73e60f6e6e7c5fc5b"},{url:"/icons/android-chrome-512x512.png",revision:"66c176519ce047e470c26e4b114fbe76"},{url:"/icons/apple-touch-icon.png",revision:"2105c9c4acc5091f71fa1918fd345c23"},{url:"/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/icons/favicon-16x16.png",revision:"0c21ea7a1a612bd2121dab375de6c7ed"},{url:"/icons/favicon-32x32.png",revision:"ec3723b1c930a98d662a64a61ef44fee"},{url:"/icons/favicon.ico",revision:"ba7d3f7a752583fbbc718756a4142e45"},{url:"/icons/icon-192x192.png",revision:"b7bb86b4b343a4a7c46a125441b1ef71"},{url:"/icons/icon-256x256.png",revision:"c818d9296c80502844f06a2e3219055e"},{url:"/icons/icon-384x384.png",revision:"2822e73259be429270e2ebf8558b9c78"},{url:"/icons/icon-512x512.png",revision:"19be5d2c5e45f09dad2f1c123eb1eb00"},{url:"/icons/mstile-150x150.png",revision:"3113dd05687257d7eb4cdc0d46212a9a"},{url:"/icons/safari-pinned-tab.svg",revision:"eda629db8dc9814bfd4d38a160c95566"},{url:"/icons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/logo.png",revision:"4334f68513fde1ad6c8862c0a095be21"},{url:"/manifest.json",revision:"fe5788e3cbd65a5c50bccfc8e382daf6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:c})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
