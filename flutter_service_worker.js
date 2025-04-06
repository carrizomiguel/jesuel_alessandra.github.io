'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e521d4a08673fbffb605850adfe098",
"version.json": "2593b4537c8f9a808898a79d654679f2",
"index.html": "50373cb6086c37a487cb833e252e5494",
"/": "50373cb6086c37a487cb833e252e5494",
"main.dart.js": "1fca38992f1cc0dba7e76fc35b58a99e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"manifest.json": "da568515b2a5cf09ca388fb1eedf7f88",
".git/config": "2315578731bf35386645e1bb9b4bf88e",
".git/objects/66/a69cb1850861f675e7ae3e8a650aca116a62a1": "8d3a836560d6c5a15c1662e6c90680ac",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/4f5b1c973bd75adc83c492bfc40b5139e833e9": "c5652e437d20c31f30fbe6e064af0516",
".git/objects/9b/8f7cff499d6e9445ed9341e51ab3c7d21a90db": "6b41e78107cde4d5f4a3e99b1ad36cce",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/c31fc5d462286102af408cc9ee0d9b40eae356": "d4f8f2735da8694f4fec1a3906aaeb85",
".git/objects/51/9af8f9f8d1cbb2cb9939949b56bff4957cffac": "f8421114d54040c07c2d1992936b52a7",
".git/objects/58/634da9fc89eedf53a26b78844ad855e3547dcc": "59a2a5bee67da3903db1980120aad0df",
".git/objects/0b/67ca5ce1cbffa6095f927d16bbfbb8f0678019": "12985809f78c34d4bfd6e40487eca502",
".git/objects/a4/ddfd533e9e90ee533b39d4c8a19fb0e4231816": "640bf4b51f66479e8c028d3d3f241a6b",
".git/objects/a3/372e47e9fcdc069b8690df3cce4b7d440befd6": "fdea1ea87c90c8b40d518e45a7180aba",
".git/objects/d9/20815d38d2392bda953fb2c019604b20b12ce9": "75f7b444046e4c5e48895e4b8d836ef1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/733b8f6d17621bbbef3795ea3d5eef1cb95d20": "a66227f03d95bc0712839ca9702dfcee",
".git/objects/e2/3c145288c9b51643950f20eb3d4a9c8c479507": "977a7058c8817bbf8a896bac0ed56691",
".git/objects/f4/fcfc3e9a26656dd3a990317d07e4f5c7d02bf8": "48767a170f71725591e33d24bde15010",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ec/62a0f11967ffe5d49d718d9f4ac5153d8fd25f": "ac27e95f9b50645bf075763c3dcae376",
".git/objects/4e/481c99679af1e013d21139f3b66cd7ffd7f159": "81297b6a53feccb395feffe99cbf16ca",
".git/objects/7c/38d0780d6820cd02dc5b92c8f45364c8f9f781": "13516ec42ae26698a2a9c241abbc1683",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/e7608148a4df334c3df9e2ba03183943863d70": "39ecfba61e8cd94a8cfed947575ed4c9",
".git/objects/80/702702ac02a31902f3b4862e3dcd31ccc840e2": "7e4bec6b82bc53dc69c3830bfcce346a",
".git/objects/26/db3dbb216c96fe38efde07b06853990141db61": "d785060294114436d44347cfd839500f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/b96085c226982a6afdd636e9dfa54810423105": "ab770e56aacb55c4fe492262600367b9",
".git/objects/2f/99ac18744a274e7221b1be5d049aedd2fa3cad": "c04c7d0543f6bb7e53a7ff9091427a23",
".git/objects/2f/9c3df27a33399b0f32fb05b2156593cab8445b": "fecc9dbf3cba27e6f78dc8d39cfd8dda",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/f4f1673d34302fca9549ee2bb0f3188ada3b6c": "2e2787acb0a0a5f5aa30d1668b204723",
".git/objects/00/dea13f031ffbe304dddbbb80bbecd5fcc95c48": "18ee12c96ac2200beb593e64b4201538",
".git/objects/9a/a0bb0514e27ad7aec464a3d42117e14b751a7d": "e5087f2c921945f0ead40d3765975294",
".git/objects/62/ee5af9e0694014d6d0ba737f04e9ccf7369674": "1c8d27530d3c32b1d57ea90ac4325981",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/4c6837078846f8faca7cf5fa01aa19e0b5fd23": "4c80f7b2e8d9ca9cb74bef24966999de",
".git/objects/5e/e36eaa4cb4529998f9fa8cfdbf1218317f2957": "c35da0d07be6e846c6cf4ece78a93ae1",
".git/objects/37/f3cd42366916ca27b17852ac0c8e8877c98e4c": "9be46f616e1bad254cd30471e66d7bc9",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/7ad59a12ff289b8fe59263d9a6a0c2801e9ddd": "293fe9113ddae58f71bd730c6b1d20e0",
".git/objects/0a/a3f377bb9be7020b25bab2a955349c13cad5bf": "c20e2f9ce0ce73b48c42760331a60691",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/96963a956529483da82a240501aea8e993613c": "91756a276e45793ada672efd71a1e803",
".git/objects/b1/c0b1c3d385e250127fe3fbd2b551d1624b8395": "715d8db1fd2151a4062e10dc4479b42a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a6/acdc6ec3243489344418477fc25c51565f52d9": "261c505a58c6bb537b0d4a2295f502b4",
".git/objects/a6/de3be34bda4c52cdcf199a3af74df0c3e01359": "3fac247ba2ce322485b0e1619599dd12",
".git/objects/c3/3b3e7686ce9587b541342ee0655815e8160377": "9c08076b5d98a4f4f91341bbd0b9d7e7",
".git/objects/fa/e319c4a1a5be43dfff317ca893c8a0f116d83f": "021c6d1ed67b335f4ecb88f26106d237",
".git/objects/ff/05d3d344647d9ac212e871f6824ba2c0ea9877": "3200dccec2bef336292421c6c5c3a992",
".git/objects/c5/8489f85656eb89a609b03072f2986b1e6bb649": "ef2e4de7e37b9a76190ed7d172600fb4",
".git/objects/c5/c2ed7bd0a0389ef39b19f8cc7ccf3ef52ec3ca": "c5eb071ad08cb4c2584d0c03d1f6a362",
".git/objects/e9/7214a05eabfbefd54af64a3530f32303533fa8": "c6c2d985443aaef7581ef952ef68d3ea",
".git/objects/e0/fb9aa30ad72d168c33eeb702a19c618ba3aa47": "6381bda19204ce88d0744fe057d193f0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/c9ca9610517cbd770c3cab919a6a43b943f0c9": "a90a5f2299856e7888b980b6ea54c24e",
".git/objects/71/31d28ec9190a0fd71191e7195a08ba77ca4e50": "571b873342b7844bef19e28efd393215",
".git/objects/71/4aa70630d2ea1bd368f3ab191cc5442e8fec65": "16a06fb9263ec186c449b576829afc16",
".git/objects/49/b3293c2dad155f91d6cb55e3858d3569283df1": "26709c213f8e97495db4bc574e010d54",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/6f8d195a38333d871d5fe03247543eafcb6a9c": "7edabc8367e243db0739437703f12c49",
".git/objects/78/3b50089a5aa0076bb75640239277a3b58573c8": "c9e99031d3091142a8495b975f138a7f",
".git/objects/7f/a11bd7e04c7935a4fd55e77a05b5fc22d88dac": "9bd2e28e1940750d252156f1e8a1d865",
".git/objects/7a/cb9b4121ade27f0f6454623be4dd279f1219aa": "aa255bcb0ea457841f30f2a2795609f6",
".git/objects/22/c6534a59759d36c9501ab0cc5a9f38554eb252": "9cc10977fcd9ad8f20d94f1ed483fa17",
".git/objects/25/97befca546bac96f8925302ac028765f7701d3": "352f89f038d024c1ffad4a5d725cdcca",
".git/objects/25/0f3837f8d03c39aed33293b99f404d352911d1": "c4bbea786ae8d535f208ff9c90924440",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df462c52828ddf6fdd6e83c49d34b971",
".git/logs/refs/heads/main": "df462c52828ddf6fdd6e83c49d34b971",
".git/logs/refs/remotes/origin/main": "95a7833b52c2dfedbd4126e778555e7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "52ad34cd284d073b4bb6b2dc002f649f",
".git/refs/remotes/origin/main": "52ad34cd284d073b4bb6b2dc002f649f",
".git/index": "d823af0ddf32ffbae497c1995f763ac4",
".git/COMMIT_EDITMSG": "8b917bf51b5b2fe1ae0bc0e74997dac0",
"assets/AssetManifest.json": "2dcd8ffdeab698ede93231557aa24fa0",
"assets/NOTICES": "0f0986a9dec5c08093de774687f6724d",
"assets/FontManifest.json": "9333bda650133932a3f35d5f052020eb",
"assets/AssetManifest.bin.json": "5d18c27582dd525ca5f7b0937f41a561",
"assets/packages/raphy_wedding_ui/assets/images/assist_button.png": "a1c2e7fa3443a00519b9cb499f21c835",
"assets/packages/raphy_wedding_ui/assets/images/colors.png": "304699314fcabb108b27ac4343b6b514",
"assets/packages/raphy_wedding_ui/assets/images/calendart_icon.png": "b24b1744aa5accd893837b745f5f5117",
"assets/packages/raphy_wedding_ui/assets/images/google_maps_icon.png": "bccb6956bca9669c950f1e61375f7d01",
"assets/packages/raphy_wedding_ui/assets/images/flowers_4.png": "3edc5740ac8ffaa84fb425310c88b59b",
"assets/packages/raphy_wedding_ui/assets/images/flowers_1.png": "47ccb37d34020714a69ea6a53859b2c1",
"assets/packages/raphy_wedding_ui/assets/images/full_main_photo.png": "9c55c1e0ea305e8838f9876c6c1769c9",
"assets/packages/raphy_wedding_ui/assets/images/yape_and_bcp.png": "27fd74582da883cf42f2b7d25b9f4283",
"assets/packages/raphy_wedding_ui/assets/images/flowers_3.png": "9e9390aaaf72e0b3e3b54e01a26be545",
"assets/packages/raphy_wedding_ui/assets/images/flowers_2.png": "1bdc377ca5f64c5b65abdde915681175",
"assets/packages/raphy_wedding_ui/assets/images/large_separator.png": "280927dc3384fcfe66476458a75b8fd0",
"assets/packages/raphy_wedding_ui/assets/images/logo.png": "7114fde3151dce4898d73123c048293c",
"assets/packages/raphy_wedding_ui/assets/images/info_separator.png": "aa6ff09e7b12accab822dd488281ae72",
"assets/packages/raphy_wedding_ui/assets/images/golden_detail_2.png": "bae1978da4c982a2db1b85790fb92aa3",
"assets/packages/raphy_wedding_ui/assets/images/golden_detail_1.png": "ed311e1194346473dec47bf47dc7b45a",
"assets/packages/raphy_wedding_ui/assets/images/main_photo.png": "e197a8053a276fd2144ec681c00ac494",
"assets/packages/raphy_wedding_ui/assets/images/qr.png": "a82d238e0cfd23b54cf7c8c9813e5755",
"assets/packages/raphy_wedding_ui/assets/images/small_separator.png": "a65249268d32de183e895442bdf8f2f9",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Light.ttf": "574ea20b15da019bfb7fbe81cdaebb09",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Bold.ttf": "f47776685e9e1ae2da8caa912c9bb717",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Medium.ttf": "69965eb88a975b3696b90be4a7198635",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Regular.ttf": "d1b1822b6d14fdc9d556018a901786f1",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Black.ttf": "9f8cc3ec2d88209be37af7107cf86b36",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Thin.ttf": "31972b78291bdf4e5afb3161a879b8b6",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-ExtraLight.ttf": "b80ae7e7fdbbc6e349a2bf4b78dcba3a",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-SemiBold.ttf": "f1e78d8510f2f9f8a26a1cefb5c4dc2e",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-ExtraBold.ttf": "8e603349db923d3bc2f0c34ea38bba29",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ad1c0c9a982d4507aa976a4f42a403e8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
