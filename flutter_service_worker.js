'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cde9b58530408a615e0db13cd2157b4c",
"index.html": "3c66e36c8ee72d792c60a98e67b8649c",
"/": "3c66e36c8ee72d792c60a98e67b8649c",
"main.dart.js": "d5afdbe950466bd7b19da6e1352d8d1e",
"favicon.png": "2e3e264fd8c1ab445ee88deae2c4bb7f",
"icons/Icon-192.png": "99e983cb7e4a35a574ca32e380c542bd",
"icons/Icon-512.png": "05a90d9ef47e5d9c469325695d0b7aec",
"manifest.json": "8f83ae9a0e0a8a8ae4ac2047e753ac81",
"assets/AssetManifest.json": "5949ae84d9a696d0bf1011d0e345f17e",
"assets/NOTICES": "378f174d4553555e24dc1ce81e91ee4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/quran-json/surah/103.json": "4f4712e0897ac11c6091a2ba71a72dcc",
"assets/assets/quran-json/surah/20.json": "65b21d5c00ec6952ee77c58347de8e82",
"assets/assets/quran-json/surah/98.json": "5260a17600571ad16e4be94ff60750f4",
"assets/assets/quran-json/surah/77.json": "e55926bb9dc7202aea3ada0d4ee60e4f",
"assets/assets/quran-json/surah/61.json": "905b8875d47d90746d2673c465512fce",
"assets/assets/quran-json/surah/36.json": "fcdfa2c21b7dd0f730b0fb5d7ab97c69",
"assets/assets/quran-json/surah/41.json": "801ec6eb0e8e8af939b87e203d473a38",
"assets/assets/quran-json/surah/16.json": "3713af7dd07e040852fa44b582ba639c",
"assets/assets/quran-json/surah/57.json": "333d0fe4bf4b40a71eaebf2171ac31b2",
"assets/assets/quran-json/surah/94.json": "c20600f3f3015c8e59680dbe18ba437d",
"assets/assets/quran-json/surah/82.json": "32f28662419643194f65cc7c17c610f2",
"assets/assets/quran-json/surah/6.json": "75f04f9d5c3184b873f0e172c1944691",
"assets/assets/quran-json/surah/7.json": "f8dfb04533a68b94c5c172ec19e8dbe2",
"assets/assets/quran-json/surah/83.json": "7b7c40439aeb0fcdaac3b9ee21420c19",
"assets/assets/quran-json/surah/95.json": "8d9af68b1e092e273f52f0ed00b791e4",
"assets/assets/quran-json/surah/56.json": "a18ff799aaa65e48bc75f3ae871c1cf1",
"assets/assets/quran-json/surah/17.json": "d01fc02aaa16b4355e1693411638e30b",
"assets/assets/quran-json/surah/40.json": "8a3789a2ab48135493b4916169bccfa4",
"assets/assets/quran-json/surah/37.json": "43dbc917e8074fa95f94287dabd6c074",
"assets/assets/quran-json/surah/60.json": "c851d21c89e8fa16b59ae7c6d8c0ce3a",
"assets/assets/quran-json/surah/99.json": "f5bed02d47aaafde75ec8a930052102f",
"assets/assets/quran-json/surah/76.json": "56bc9687cd96ce61577e44e2d98eda8c",
"assets/assets/quran-json/surah/21.json": "89f19eba1437edbee05ded3daeb465b8",
"assets/assets/quran-json/surah/102.json": "60185a3c8cbde56216d59d6e2fe2a1c9",
"assets/assets/quran-json/surah/114.json": "69e5ee3398edb48e637cb673a92b9245",
"assets/assets/quran-json/surah/47.json": "41e2769d80febdc877beb89aecffa478",
"assets/assets/quran-json/surah/10.json": "696334b27496d4ff4d705f072f9321ca",
"assets/assets/quran-json/surah/109.json": "515999b50b9ad8356ac3dc70eb1c6e81",
"assets/assets/quran-json/surah/51.json": "f17c23fde417788268b6a33624270108",
"assets/assets/quran-json/surah/92.json": "9ea1bf5a2a2521cb6e17f5e9629f6258",
"assets/assets/quran-json/surah/84.json": "58de41fd65cbf3a8b133932d9a186a21",
"assets/assets/quran-json/surah/113.json": "5ea8fdba66a6d2681342bfb447aaad89",
"assets/assets/quran-json/surah/105.json": "cd0776d3a924a2e24de4265c4ad56853",
"assets/assets/quran-json/surah/26.json": "443830fd2f475c2ca35084d1f80f6956",
"assets/assets/quran-json/surah/71.json": "81f0f87be5ef98af5e13b07da3415659",
"assets/assets/quran-json/surah/88.json": "96c31750cb03fccde56445e925ed6af6",
"assets/assets/quran-json/surah/67.json": "cf3045783e3219f6a189a7c2a8148d9c",
"assets/assets/quran-json/surah/30.json": "5a9ac80cc9c73b3b2b83f07df06b5cd4",
"assets/assets/quran-json/surah/31.json": "89b50a36de42688e3a3f3dffa858b8e4",
"assets/assets/quran-json/surah/89.json": "a16323f787b5223850ba0da92a674ae5",
"assets/assets/quran-json/surah/66.json": "580b5f9b35c307cdf72f45a403bba9ad",
"assets/assets/quran-json/surah/70.json": "d78ee5762cfc45647c1dabe8eeabc334",
"assets/assets/quran-json/surah/27.json": "1b8a4bef4a5ff773632c9979a3b51dce",
"assets/assets/quran-json/surah/104.json": "d108e2b4f4e86e312dc4e6f12353f160",
"assets/assets/quran-json/surah/112.json": "a8fb1be36eb5b044961459e2fb8ef656",
"assets/assets/quran-json/surah/1.json": "f786032e93a703dfcf27e72b6abcf397",
"assets/assets/quran-json/surah/85.json": "37418ae83e29cf28fc5647c8161fa029",
"assets/assets/quran-json/surah/93.json": "00cf6c9681837a1d0fc095de0fe8c26a",
"assets/assets/quran-json/surah/108.json": "cf060430649cd68e3d816801d3886903",
"assets/assets/quran-json/surah/50.json": "86dcca52395c269520a4f81ba1abf0b5",
"assets/assets/quran-json/surah/11.json": "f9e8bf3c9ef7ad8a26439d0f7bd7c8de",
"assets/assets/quran-json/surah/46.json": "d3227efa1eb19fbc5d07f3329965207a",
"assets/assets/quran-json/surah/69.json": "920f7890dd3c3be5602f063d934e392d",
"assets/assets/quran-json/surah/2.json": "6a01dc75a9e143b0ae954eee046b724d",
"assets/assets/quran-json/surah/86.json": "49cc28b34b6cb80d8419082c96ae0798",
"assets/assets/quran-json/surah/90.json": "adf18131ccc6454cbec2980e9a70306d",
"assets/assets/quran-json/surah/28.json": "006f25eb1eda06cc9a0c99dc4b103172",
"assets/assets/quran-json/surah/53.json": "cb646243d69f4b42b8b0948e74f63814",
"assets/assets/quran-json/surah/12.json": "a96c32ac90357f1d57f8b2aeab6dc6c4",
"assets/assets/quran-json/surah/45.json": "6c9e0b93d8cb84e98f9b72834e0573e3",
"assets/assets/quran-json/surah/32.json": "9c6958b9fa1502e854d3b34b94a5b0b1",
"assets/assets/quran-json/surah/65.json": "e688994cbb2950233791a9c9cfc3b16f",
"assets/assets/quran-json/surah/73.json": "c128a198e9756adff29db29a11a4d4a5",
"assets/assets/quran-json/surah/24.json": "838e82f202b47906f40c13dc3df55ad6",
"assets/assets/quran-json/surah/107.json": "6d3d64c2f61f8adffad9288e35e2e3e8",
"assets/assets/quran-json/surah/49.json": "58b97e568854791e130b96ec77e5802f",
"assets/assets/quran-json/surah/111.json": "a6fdb1c26a92384fa0c1ce7e43e1c0d1",
"assets/assets/quran-json/surah/48.json": "62f9d0313b063b7b76eb1968885c8e32",
"assets/assets/quran-json/surah/110.json": "df1fd6502cc551d83de452f935779942",
"assets/assets/quran-json/surah/106.json": "973026c3bbc7a059457839453731ac72",
"assets/assets/quran-json/surah/25.json": "98b7d2eb407b8af08956f79b65b45591",
"assets/assets/quran-json/surah/72.json": "09a84b7fe609dcd4b3ea143be6128c1c",
"assets/assets/quran-json/surah/64.json": "5cec8928fddf7e9f307ea0273b6fd680",
"assets/assets/quran-json/surah/33.json": "150d3e7a0e01ed459c16a48c73fccb7f",
"assets/assets/quran-json/surah/44.json": "9739989e31221e8b58be3a3abcb0db5d",
"assets/assets/quran-json/surah/13.json": "0f7129bae40bf6c25efc027de6813e3a",
"assets/assets/quran-json/surah/52.json": "297f9c1c2df01fbf7ee76d585616ba60",
"assets/assets/quran-json/surah/29.json": "75fd3b79c84bf1d856f4742b0bb50bcd",
"assets/assets/quran-json/surah/91.json": "0a4b64f760ce1d98ababc238dfdfaa31",
"assets/assets/quran-json/surah/68.json": "3145d07e9351b744d6ca78d6184d7473",
"assets/assets/quran-json/surah/87.json": "71165c6611189b2b114e529568a88054",
"assets/assets/quran-json/surah/3.json": "93775b70b0f771fefb8832580eb64401",
"assets/assets/quran-json/surah/34.json": "3e553ef7c73cdbc8901044086b56717f",
"assets/assets/quran-json/surah/63.json": "1283914dc3a0eca32b5696cb49cf722c",
"assets/assets/quran-json/surah/8.json": "90f4131aa375e00fff2e9364530c2e35",
"assets/assets/quran-json/surah/75.json": "c65d9690095cb369f0fc16e4c1503a22",
"assets/assets/quran-json/surah/22.json": "edfc1b31dc52986cc43737b81b30bdae",
"assets/assets/quran-json/surah/59.json": "da15076b513a8778aada51df260d2f62",
"assets/assets/quran-json/surah/101.json": "1afb750689511b5ab071513a18012efd",
"assets/assets/quran-json/surah/18.json": "30e37dd68248b9e5af41ef506f89ed64",
"assets/assets/quran-json/surah/38.json": "1e4ebc0ab31ca557787634e50892b52b",
"assets/assets/quran-json/surah/4.json": "01b8d5220495fe13429c4a3acbcf8a17",
"assets/assets/quran-json/surah/80.json": "17d8e1015a48a0e663738142bc62d027",
"assets/assets/quran-json/surah/79.json": "63cf9637e0b9ac21ec031181940e036f",
"assets/assets/quran-json/surah/96.json": "3e6b3cebf92dd8c13569cb04d44402ff",
"assets/assets/quran-json/surah/55.json": "79187476dc978d09262eea1a228b09dd",
"assets/assets/quran-json/surah/14.json": "e794a62a50ba72f7b55ae7a0335fd4cf",
"assets/assets/quran-json/surah/43.json": "7f44115c74679f53097ecd5827268642",
"assets/assets/quran-json/surah/42.json": "27d29910e3d4170566ebb8fca7868f0f",
"assets/assets/quran-json/surah/15.json": "8c4cde5cfae62847b76fe4e5c231bbc8",
"assets/assets/quran-json/surah/54.json": "5c0fc4100047fe497e7e4d08983bb793",
"assets/assets/quran-json/surah/78.json": "50fbad4169e3fdbd05bd4be3bc940b2e",
"assets/assets/quran-json/surah/97.json": "efce3f223a65818f58c8eca3bb156eda",
"assets/assets/quran-json/surah/81.json": "0cb146a63e02bb16c3f1ec64db4247ac",
"assets/assets/quran-json/surah/5.json": "1ed112b1bac78b414259692eb730b1f3",
"assets/assets/quran-json/surah/39.json": "b296f0552c30cba047fce30b3ab1d987",
"assets/assets/quran-json/surah/19.json": "08b0581aef6b521f407e628647ab3564",
"assets/assets/quran-json/surah/58.json": "cc71333610f4cb4d5fbee70c8c190a85",
"assets/assets/quran-json/surah/100.json": "7a78692cfa0a65d7debc13507458962c",
"assets/assets/quran-json/surah/23.json": "8e9677b8bbb2a9650a8fc143efecfef2",
"assets/assets/quran-json/surah/74.json": "fc4f5e44cf240d12993665a53f91332a",
"assets/assets/quran-json/surah/62.json": "4e87f3a17b01d602a268e2e6ef8e411f",
"assets/assets/quran-json/surah/9.json": "b5f236a247a2a252da5ca7ea25378b64",
"assets/assets/quran-json/surah/35.json": "70b66ba9c6b3de28b85181d8f9276565"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
