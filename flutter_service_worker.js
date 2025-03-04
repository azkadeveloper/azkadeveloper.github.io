'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "eadb9e688d6500a2a812b504808effbe",
"app.example.com+3.pem": "ea20d990aef766d21e21511219b2bd4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"README.md": "cf753f6c11d8a9469a107d4059ec82fb",
"app.example.com+3-key.pem": "85ad970248586cd2e2ea3b82a301b0c8",
"roboto/v32/KFOmCnqEu92Fr1Me4GZLCzYlKw.woff2": "11eabca2251325cfc5589c9c6fb57b46",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"main.dart.js": "df1dc85b5ed886d8474464666681d580",
"manifest.json": "f5505bf9590a3b2e384f365d09a3fbfd",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/AssetManifest.json": "3ec815035b4e65b7e2295efe0a3b719f",
"assets/AssetManifest.bin.json": "c1742112b072ceb66c6f4569b462d751",
"assets/AssetManifest.bin": "51d732cced2c89fe380034cf4743d360",
"assets/NOTICES": "c7517acd4d8bc1811ea8f9810c2dbf88",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/general_bot_library_web_assets_flutter/assets/tdweb/td_wasm.js": "c5460e38c9c7346d4000b4483edddc02",
"assets/packages/general_bot_library_web_assets_flutter/assets/tdweb/td_wasm.wasm": "0f13dd025fa47b22c0addb019118323a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_bootstrap.js": "4d9d92312c6138538a92baac8c98fa3c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/index": "cc45ab2bf4f651db27757b2bb6424018",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "190098f66e3f3f896ad57384e9d4606b",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "89d33e0dd661f2efa9067d9bb6202d62",
".git/objects/29/49e301047541c155407429c34f3d997e47bb81": "2665b6b218462468bfde1adc2dcaee46",
".git/objects/c2/657981f6b3bac5cb0d4548102cccd88a38edc0": "6d6f9df3485c55d53336a1fccdb101a4",
".git/objects/26/610290701e55d7850e5b116ae3850200ac6dfb": "630d2b40232b2d5425cff19c6a342d70",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/0c/9eca86d8fd7a8424bc53fd82bbdfc7a9241a60": "c5f9fcf7e1853bf0c534e87e4547e045",
".git/objects/8e/484d62d805dcc02ec073bd7b0df6c75163382d": "0692c6f607e021c588b0adf6a828ae81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/84/f497877b9ff647774619ef258c8ab624f1f6a8": "60a9fee9158abd8160bf3ff1b8d0a671",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "5110ec697534feee9d97421c47d78964",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "eb3281696880d690bdce53639613dde5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/aa/8d96264c48bd1628e0f38b72eb4afdf0ff27cd": "1c7fff8714fe71d5799ce650073f8503",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "a37fe3b0c3394a335dd57a1b37db0d6b",
".git/objects/57/d07588c4c96b8727f80ad00cfceabe7ef0b6ee": "392d82fcec7a327aea32d8672f83e493",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/4e/0564a502f940e78707eb124f0374b00b9894a2": "da3724208144112245bcc5b5163a4041",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "ef7269f262ef7292e042166436e9777e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/29c27262f2928c79c6c8ee9d09b1a2d4cff112": "d136788b345c63768517602834b76fa9",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "7c7067f29dcfe0371ba66addfc05f0cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/5f/44657f33dc4813763b4c88878ab27ede2534cd": "d0d0f009659ca2decf0d7173f3831086",
".git/objects/d5/6718c8390bec3b7aa3a684d8bcba89491c7551": "990be2fc8e2d23a8ae0bd7d170f31b8d",
".git/objects/65/6afbf34373d78185b23fa6733a86645114fd1b": "a8635316f4b1f458c27de2a363fa810f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/3d/250f7a2e1228eaf32627bdd6ecbdf5ce5a9c49": "9f7ae67b596ce9c2c0ec6c81fe31b742",
".git/objects/f2/3b0ab830114e9d294478831de77e2763df310d": "eaa8ef4234a53596a377ff69616ae480",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/86/a669c624a54266296d21eaf2645b4c3a0b9ce6": "905d2a0619f63c1696251bffb53e92f3",
".git/objects/41/cfad3176f8e0fc5d7a241e1faf8fbf40d9d19a": "a7e6599c6da380833be715a78503f8d1",
".git/objects/cf/aad761185d40177540b073395b72a2b8c6f6a8": "9716505651a2038bd12ae2adbb177116",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/69/9689b0e2160f96400fe8e9740fc9eb972a4df0": "0f5a683d860b74a49d0bde2412aef4eb",
".git/objects/2c/5df8d108725cc9e5bf5dd0287f98b02d998ca0": "64c0312b3c8c73cc31ff489ae3723694",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "2ea7381d2e64f5f939cfcb905ee17871",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "7eb8fcee25a966832b6eaff0ef41c029",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9972f5fdc13ce51c0bc244d1dc598513",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/7b/a1824a9c9635cba7fd8512e510e4964ceeff14": "4d0b553827467d1a88b9004cf6f8a83f",
".git/objects/9e/7bfd2e1830c4f502b5eafd37ddfed796b9b69d": "e392253bbb10f643af4187530ecd9fb8",
".git/objects/12/aa16d7e3d3b064dd5a570abb75dd0d7a0bbee8": "01f86369fba6aa4f2da4fb530dde049f",
".git/objects/12/8ae0d8e4846b401d3a4ba09e67fd782d7ec643": "8f6d76c44cc9addeb05ce27cc300fab9",
".git/objects/cd/ecdfef3e92b1ec6de1dfa7cadb57c7cceb9b1a": "c5da01c2521a52702ffe5ca5d26941c7",
".git/objects/c5/3e812c9d4dd960f4ad23acf661d29ecb57a3b4": "c28960190a94b453953112e27ed3828d",
".git/objects/f7/fa2a40d8f7779ac21db66ba4d3e6038fac9b98": "c8d04aff8f4290f59cf52a12aabbd96a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/37/512e44eb4d249d4485560618f12ba2e8cc76dd": "b2fdefd8566ce4f165b8685a55de9879",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "cceba5641e940f5b7a4d3593f5493386",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/c9/ad46ee91dfe93a7f878c3363fc24889fc7df75": "02bbce7c83f67dc50389ac9699af7de4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/49/7b34a3fa89e583d28dd4ed995c543a81d63e13": "d85dfda47b695930b6e6491c790b16f4",
".git/objects/e0/b9bf407a6da84f4d2f13c6de4966e68c380d70": "5fa9a6aa2b433018a8e1b8aab021651a",
".git/objects/e0/4546a84436ce92d16e97ee77046f7bd7772ed8": "7303dff55f03ed8e78ee2bb30325e76e",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "09539114d76bb6ba871033ebac7ca493",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/f3/824050a39194e174e2518e2573cec2a3c0ff01": "ebff7862246150b0a2f1025ac57e306f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/logs/HEAD": "1ca488c633c47435d6b18772b7fc1ad4",
".git/logs/refs/heads/main": "2335b5a5c45e3529ccfb561c67d2e0ae",
".git/logs/refs/remotes/origin/main": "0828cdd76b044f51db6b0c6c55a1450f",
".git/refs/heads/main": "1d840f2346a49d3f98269e22281ef231",
".git/refs/remotes/origin/main": "1d840f2346a49d3f98269e22281ef231",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "7ad9c4862d24671f92d74f822f033664",
"/": "7ad9c4862d24671f92d74f822f033664",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
