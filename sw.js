if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,o)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const c=i=>n(i,a),l={module:{uri:a},exports:r,require:c};e[a]=Promise.all(s.map((i=>l[i]||c(i)))).then((i=>(o(...i),r)))}}define(["./workbox-3625d7b0"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.638ccf26.css",revision:null},{url:"assets/index.f91b572e.js",revision:null},{url:"assets/ListView.4520f28b.js",revision:null},{url:"assets/ListView.5d6d66e0.css",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/POMODORO-white.8642e1be.png",revision:null},{url:"assets/POMODORO.70a6aa24.png",revision:null},{url:"assets/SettingsView.8b736ac7.css",revision:null},{url:"assets/SettingsView.959bd07e.js",revision:null},{url:"assets/tomato-rg-little.c17962ec.png",revision:null},{url:"assets/tomato-rg.125c3a17.png",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"5b1178de0afc30b0442ae627b1bfc18e"},{url:"favicon-32x32.png",revision:"a5897fb38e34c0510059d98c8e5122db"},{url:"favicon.ico",revision:"d150ab316093a0f2c28cc2f2bb142bc1"},{url:"img/icons/android-chrome-192x192.png",revision:"e3858b9b2eb50befff53dd563107b4f2"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"e3858b9b2eb50befff53dd563107b4f2"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"d13069d518b40db522b1340f9e55805a"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"deb36f52957fbfaaa0a483cd6212173f"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"e0b0d6b00683d34ef6397e0ef2d8d8d0"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"29a8c6787aa5a54081f4a53a45e91e30"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"30fbb7df4f40f5be345e28bd73419d28"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"0ebabfc83ae09b4f1ae8d3faf42b207e"},{url:"img/icons/apple-touch-icon.png",revision:"29a8c6787aa5a54081f4a53a45e91e30"},{url:"img/icons/favicon-16x16.png",revision:"5b1178de0afc30b0442ae627b1bfc18e"},{url:"img/icons/favicon-32x32.png",revision:"a5897fb38e34c0510059d98c8e5122db"},{url:"img/icons/favicon.ico",revision:"d150ab316093a0f2c28cc2f2bb142bc1"},{url:"img/icons/ipad_splash.png",revision:"0f77baccd935d73ea4313bbfdec2b7d6"},{url:"img/icons/ipadpro1_splash.png",revision:"02c81e6443688d1d2d5308041066412d"},{url:"img/icons/ipadpro2_splash.png",revision:"90640742d096929cdd4d151be61396b2"},{url:"img/icons/ipadpro3_splash.png",revision:"592d3e5e8174775b162ed3496d6f8fab"},{url:"img/icons/iphone5_splash.png",revision:"f331f4f1b3e85420fd3d49bcb14a822e"},{url:"img/icons/iphone6_splash.png",revision:"9a53643fd9920807916dee7cc22de420"},{url:"img/icons/iphoneplus_splash.png",revision:"4229aa673373311011616428859f5b4a"},{url:"img/icons/iphonex_splash.png",revision:"0dfa0c2d3cebe031c2ceba3bcec8e1d4"},{url:"img/icons/iphonexr_splash.png",revision:"9218e67609f38e540496ea19e118936d"},{url:"img/icons/iphonexsmax_splash.png",revision:"dbde13a6035e4c343c09c438b4ce3b4e"},{url:"img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"e09d6a7a2adfb46e7a8610149ecf8076"},{url:"img/icons/mstile-150x150.png",revision:"e51c33460c2b896d11f6c72a6f8d4737"},{url:"img/icons/safari-pinned-tab.svg",revision:"d5aac6383811a161be3d38844336a58b"},{url:"index.html",revision:"35f4ca591ea303cbad2a777fca02d59d"},{url:"tomato.png",revision:"4885f2e97ceb1757c45d4362f8508be1"},{url:"./img/icons/android-chrome-192x192.png",revision:"e3858b9b2eb50befff53dd563107b4f2"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"e3858b9b2eb50befff53dd563107b4f2"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"d13069d518b40db522b1340f9e55805a"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"30fbb7df4f40f5be345e28bd73419d28"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"0ebabfc83ae09b4f1ae8d3faf42b207e"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"deb36f52957fbfaaa0a483cd6212173f"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"e0b0d6b00683d34ef6397e0ef2d8d8d0"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"29a8c6787aa5a54081f4a53a45e91e30"},{url:"./img/icons/apple-touch-icon.png",revision:"29a8c6787aa5a54081f4a53a45e91e30"},{url:"./favicon-16x16.png",revision:"5b1178de0afc30b0442ae627b1bfc18e"},{url:"./favicon-32x32.png",revision:"a5897fb38e34c0510059d98c8e5122db"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"e09d6a7a2adfb46e7a8610149ecf8076"},{url:"./img/icons/mstile-150x150.png",revision:"e51c33460c2b896d11f6c72a6f8d4737"},{url:"manifest.webmanifest",revision:"3158b23ff56bb6eb73df4e39e75b101e"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
