'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cde9b58530408a615e0db13cd2157b4c",
"index.html": "cd9c04a67e512ccb41a0bc881789e6b1",
"/": "cd9c04a67e512ccb41a0bc881789e6b1",
"index.php": "3c66e36c8ee72d792c60a98e67b8649c",
"main.dart.js": "d5afdbe950466bd7b19da6e1352d8d1e",
"favicon.png": "2e3e264fd8c1ab445ee88deae2c4bb7f",
"icons/Icon-192.png": "99e983cb7e4a35a574ca32e380c542bd",
"icons/Icon-512.png": "05a90d9ef47e5d9c469325695d0b7aec",
"manifest.json": "adcec2601e98f5676246bb7a5abfc848",
".git/config": "06bcc9ab783581fd3100f9c181d90fbb",
".git/objects/61/03fe869411775628be95fd2ad43aab290ec685": "3e8138b5154828345fe3e5b82a77d7f2",
".git/objects/0d/30fd7d3908319576bc2b3f583fc7820ac76f45": "791901bfe1e0b61671dd4d0fffe5c837",
".git/objects/3e/31f52b1ed1ee524fa9262b53279b63a8fd1081": "da41347fb07660b3c6b8bbd262315500",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/d4d52852e862c12145dd233f3bcc22aedcf60e": "6fd995a34810ebc0bb8166bcf2acae09",
".git/objects/68/9f724f28ac3d17a8611cc51005952e278e602d": "2f82eec8c382c31019f5b116aea0d468",
".git/objects/57/8715fafc89dc97fee692ba1278fbe63d1e8478": "2569cbae1eb9fa3ae0ec715e1e8d1626",
".git/objects/3b/1327468ed48c3d892dd456568d84fe53045712": "516f3a6c1e092fa5a150aa12ebed016f",
".git/objects/3c/37609b1c837c482b2cd6cb139150a82d786734": "c553a790a518efc52dd099cd29c4a6b6",
".git/objects/3d/74728408f8dfb4218f9ac7ba6304f2d3ef67a1": "f6c5bd1857483f68aeed2de65886af41",
".git/objects/58/1b315eb237197ee359a93b836ed1038d19788c": "ddd0005efc5e0a18bb9b5c57dbfb4799",
".git/objects/0b/27d025a161042493a3d20cfa52d7d4c16fe29f": "c79eb8118c8ff15c41d2d31aa8a2facb",
".git/objects/93/e4459952597bd1351f243dc6dda591d98ee62d": "f23f66de6c2af69e10e4b540ddfbe1ae",
".git/objects/60/8231d096ad6e5c1286daed7639386077a11b07": "a1ae460a7ef0a444a2194a0021c3ed89",
".git/objects/34/75eb286eec61441f2f0e0128784796be614033": "c60b9a95035add2af34df8437228fc02",
".git/objects/5a/d02c63dc4e2113888e14e6812a0313094d9ce5": "08590514d83359f24e940541181fe564",
".git/objects/05/a1bc48672ff105ea140a931eb8df6d6a159567": "d80b2d2d47850da5d5fe9c7810acb8f7",
".git/objects/9d/fa87635843e284666a29cdfd2b0acd30fb4ee8": "ab975579fc12df179ee66eeb9165d63b",
".git/objects/9d/dd42876b5035117319cd9faa734b96e3ecad1f": "841a5d88a33fd5b87a43ff50993c2bbf",
".git/objects/9c/ca7d67be2d2a66bd38c8d031a9b03f4142cce5": "8e299be80d7a6994f045e80e3562baec",
".git/objects/9c/1b308e0252d25dd1cc914d38a9691b4cf08c34": "c39e5ac6774c099b5f1b9baa53719ec5",
".git/objects/9c/60571e061f6de7057dc21c29cd32d5928bd45b": "d99496669293eb714c364b1b4119ecb7",
".git/objects/02/f2b717d70b4288952c3d7fe586a5613ebd42ab": "ab669b1760ee8ac31f56d108d8a6c11a",
".git/objects/b5/4f3ddc881de007028e0a0eb41985baf97ed912": "f4a0e3342d48cbe22e3484993c8ed52c",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/d9/7430e6e748f33c797ed2f0dbfad4a020e3b221": "36d50730916350d1c500efbd1b65921c",
".git/objects/ad/00aa3fb05018c26433f321ee557e5a1da3fdf5": "65e0dfb993c8d50572431dc2826f6ddc",
".git/objects/b3/fc5fb555f0eac19c348da9347aceee0573d46f": "e51eb64e888639dff67c8e367f201eb4",
".git/objects/b4/dfccb28b4c406d29f72a325b1ec0983775e051": "ee48dd7befb28ecb4ea44b80478e3a71",
".git/objects/b4/eb3f6828eeeaa8c31f86f9c7342cb8e68f07f3": "93a7b09f796a31f11617617768dbfe2c",
".git/objects/a2/17400e5e38d22ebd3fad912fa0f51778bf71ef": "6d704e6d4a5f6128ee7c29d46859b866",
".git/objects/a2/e81de4681301ca24f3e18429d4e18b327efacd": "55630239aab391c2e058342d8a66de6c",
".git/objects/a5/1ddde7949b35ab67f4aa6c5359eb39a9ad08f8": "af6357949adcd6f64d0eb69504ba1732",
".git/objects/bd/b4f4f8312d254b0954939e659d0ece635d72d8": "519c474d2068bfd8c4a5489e30f96735",
".git/objects/bd/7a1f38b095017957bf2d279232a867173c9e6d": "bbe65d16f83a2b878ae15c628d0647f7",
".git/objects/d6/ddf60485e453767e120102ee51f577a0c1aa06": "af9d211846ab6d5e4e3687f89db4e804",
".git/objects/f3/3294a4a54f3e96e9f688f4ed424d9075c31e40": "5b66f9e8fb0279ee747c4d891d4fcf38",
".git/objects/f3/4d4f2a69cae191e5124ed8976f35f04c4e73cb": "af5815686324c42ccce0320cd24e47ac",
".git/objects/c9/8e6f925e6e593d3e3e14269bb7d25a47039271": "aaad9ddac0d9cddd87363d131f71e4f4",
".git/objects/fc/f5ba15f192589879ba0230d9756a7aa0dc1664": "938e6baeda62073dfa26b5a83148df91",
".git/objects/fd/e03de58fd5064cc2368b8a6846d096853810d3": "d08f593f3f7919636a1c9bee62c83b75",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/51651678358728c887cc2173f2de551f25e813": "710036e42cfea0d1ab69b8fd5c0d4aac",
".git/objects/e4/74cfda4394e7fc6427562eab2037e9dcab8a31": "b51e7d7265f18ddcd108273ca6b8a683",
".git/objects/e4/ae5ad24386e138cf3d2e0d47d416421f7988e3": "2632ffcae98a3680d849f0db2b0a2914",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fb/149024347b364ba1b679130a70e0f11c1fed36": "b57a2444b4770862eb27af57ffe2245e",
".git/objects/c1/def74c1a4202195fa0aa3e15997ef8ef693f67": "6b692dcc66cb9624a35bb9e202735c52",
".git/objects/c1/f0a11a622d4d05de82fba2f7fb4498d8d8b0c7": "1075047bd1e00dfa9a8ef13929e85753",
".git/objects/27/5fc7cd732e783c995908a30aac588efee5f348": "d4699d3d4af036e6399e9f4883eeee86",
".git/objects/4b/ca1a699a50654968ac30448dcc0d5e934d8b92": "7d72a9dbd892c20502015e12528eac02",
".git/objects/7c/1749645ad3314d81b9c1d6a0ede62e6f094ad8": "80b0d87126d799ab40fa96f17beb45db",
".git/objects/7c/8eb200f0a012d08c2f7514bbd591b40d8bb299": "bb0cfc03859a7ef1e32e64ffe322bc28",
".git/objects/89/96f4d7dd0c16ef11da043532a685618c00278b": "b17c924a4a2914ce2978adfd2e9cfc62",
".git/objects/89/ab4d122308c00e4131b3a5f60d80832650adcf": "d8cedb51ac04ad4326d6a18eeaf4f258",
".git/objects/87/519c22d833327c5757a645dcd6f2a03f4e5965": "0ecd7fe97f87969d585c68a50e2c7729",
".git/objects/7b/d606bbc41e76a6b14ea93d9df43851e88d3f2b": "1ecdbbc0dc92a7454aa6a8cc8e8ec44f",
".git/objects/8f/77fa8f620ae5872175025dee18e43a67567563": "31e6f27d0e6812c9fa1d4710ab9b2a4c",
".git/objects/8a/f3b73e51ddde9528f4411b1de420b55e37cbc3": "a283631e2200170740257fb1522fea74",
".git/objects/7e/0124c2ac6654b672edb481db1ce4a1666c373d": "7a5f2d356987a2cdb33ea962840f17b9",
".git/objects/19/5a42bcccf3d13339b466655e24a5985661484d": "e0cce2896b34d77632cad005ff351f29",
".git/objects/26/fa94913ac49c65cdd34df17f3ce9ce48459ebf": "347e8c705ae9b24179809dfe4cd5dde0",
".git/objects/26/60b0f2b3a0c67d9b5c1d0a9e850fd3f4a91126": "3b8e520baf8104c2f07a0e27d356fe76",
".git/objects/86/bf10e1030791f3912bc57fb8e426d7ccf45c81": "b1062840f2017539861935ed83cb85b1",
".git/objects/44/18a3d5c72de1e8803fd72f743ef56cfcecd681": "7255ffa241b90e5685c711e0747ec777",
".git/objects/88/e41a142ca486ad44294a665fc4870adb53985d": "aa9aa7f004befae256988eb966680fce",
".git/objects/88/84ecf00193e13eabbf63a8538dd8468e670274": "7f2daa83cda0dfbd80b3dd5bc681ba5d",
".git/objects/6b/7a5061e987d2e64c530c0a6b06f7b086f1ce84": "fafb71b100640c7ecb70d2de07e6b6a0",
".git/objects/6b/f52852fe8ae3d47646642c19a76d15db1a5364": "04c914709f98cdf3ab0ad20f035bdfbd",
".git/objects/38/5a26565ba47b800c7e6cd9bb3813aa878b6ae4": "3a992950f38fbb74dc358add149ff6fa",
".git/objects/38/f5404ecdbb014904f4983c6bb4cfd8a58684ca": "a20148320cc1514e8c12889cc3aa16c1",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/65/06914613336543a0b51a9f4e56d2c72f7db78f": "a77221b563117c1f733e0b012c75bd9b",
".git/objects/96/367dcb7e1fbf9275967d411c36adda02781c52": "25a849ffcc050af7def1cdd82c3fb7e7",
".git/objects/53/061fab019210cae6476b60c86f6b92e892fa42": "fe416f077f90769e4d219399692b4f98",
".git/objects/30/6a86a34fadeb13eb1d1ff6a310c3310819067f": "ae3f30aa3a92a035cbe00d5d3059f9cb",
".git/objects/6d/04ce43b0ddae6b5b14b3a02b7e134878a8904a": "cfbb00c423bd2b9cfb9d9b2dfbe262f9",
".git/objects/52/cd34fa6abc2cda6507b2dba253b5e52ffe1ed3": "8ddab9e9891c8111360435bfffa1d524",
".git/objects/97/7c75bf15014a4356a3f184c573bca8490e3879": "89c74ba2dad30111851693f6a920e72c",
".git/objects/97/4b1e48ca61e9c1c366741a8fe3f0d79c5fb678": "adc70eaf7474ed1d0c1b48f4a4e212b0",
".git/objects/97/80ac2c7f4c7d41ea7bf4e442c713c962e09021": "67b24594a2c326472caf2db2efe0bdfc",
".git/objects/0a/adf94fbd09d73908582d45fdb0b4216eb2a6e1": "122ea510bfa6f73355f123839e3ca20e",
".git/objects/90/ba52c99beec7dede3657f8189e13ada1c52cec": "aa4ea224eb7288f7a6dc94068ff4bd0b",
".git/objects/bf/3f47856343833f548cd4765be5b1322df31374": "9a0a9cc92c2cf96c55571c9176bc7dfa",
".git/objects/d4/79dd426eef657d550e67dc0a5bb27857b93b0a": "105d897ab3e4d8a88cc8e8e40099bfb6",
".git/objects/d4/0a772c20b2574c396135d711098c92494923f1": "13ff2459e293e7f0c0cc8ff1e8459c56",
".git/objects/ba/ae23cf057de09224586443a64d48fe5d8aa30b": "944b0c13e6ab8aa1e6909901bb70988d",
".git/objects/a7/ec61b13d8b50fc1b6ef09e5a8ec95fe077ac52": "1ff3f2fa49c5afc9acefcf304782d2af",
".git/objects/b8/4ca36c346727fdb254428c024a7cd9b8f8f988": "fd4ede45acf992135ec5c82b53011cc3",
".git/objects/b1/177097f6468b08c5ecf2386e78396104785de7": "fadde14e6b80047a738ac6007b07a8c3",
".git/objects/b1/175f5a4263dbea14fd511cb6211a286f5d84be": "76298c03a17b769c4edd278dfc44ae30",
".git/objects/dd/90f9b2edc161f51d93b93f676211f8449c96a7": "98411358c77ae0aaf47be3e66c504e6d",
".git/objects/dc/400afd421e5d9bad231d1d118c97fcaf59f9d7": "d70f46f74b7aa91a8cc40802cab0d0c3",
".git/objects/aa/917427dff430b4485b5fb48bd97e1a18dbedd9": "db6de2191591e24da9def9d84a213571",
".git/objects/aa/61da6e806ef77ebf2b57dda9f3d5824ce9ac51": "3f05e9d233618e1b33c7af9a546abe6a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/73dceee8ff0659ace8cb3c930bf9e6da0278f0": "603f42a0858a58008cb66d4520d09c83",
".git/objects/a6/cc8cfe8471716402871253552c29a0fb3b946a": "e7f2dc407bf1d9f0b85a8fe31b897c7b",
".git/objects/b9/99ab1f425c73d3d7e3c5c1cd2ee0b556235755": "6b5bc7fb1eb12347e53920c6adc12a55",
".git/objects/b9/b893d8b7812d83d3c60e5ea47deac4b332f8c3": "2a2cfb76d9bd8ec517e3558b2a7fb45b",
".git/objects/c3/4b82d07043d32788ed7f3ac929d5c15b7dfa33": "28af0957f212ca6f994fe6321e802a43",
".git/objects/c4/97067736358231801e44159247b1d59410f11c": "ed48e20166adc6a3d2796b4ad8494da8",
".git/objects/e1/d77f9eed1b7907d65f2fcfa6a7a0f1942550c7": "31bbab122012b05ad72f9332f04d19e9",
".git/objects/e1/77fe6300722a56497588bbd19f0beb7591c954": "fefc833aaa7a76bfd7f115b8db741c69",
".git/objects/cd/6e2daa984d1a7b7ff246ae676b804a97581420": "148a435b0446a3cea82205bd1b7382d1",
".git/objects/cc/ca210a41e551344035e960159c4b6d5f9e70c8": "aead65f3376b53ce6e9df030d7c4efb2",
".git/objects/f9/573484e50d1e860eb659eca09fa2979be2cc85": "f81f587a6866610484971a5cf2a58bd0",
".git/objects/f9/4741c12b7ff0111a8762af5052195bec24b388": "e816fe3870523db7ba08eb73e91e7f7d",
".git/objects/f7/28c9559c8cd2b6afc0b492312bfbcd3549854b": "ff5562c755fe05de676ad2b537a463a2",
".git/objects/ff/a1747eb3531b2d122c12b3e521171446b32687": "1e3dc53c6aa19eccb43b7b5d54c4394a",
".git/objects/f6/85e1c86f63a1677404268a4406784838568923": "434c0ac519c26f9da8bd9e17ef7cb607",
".git/objects/e9/5d0040450fd3caffda7a8fd682683041cd8b71": "51a720c9debf0e4a93654264cb23ca93",
".git/objects/e9/5e0c600c0412ffa9c37786d4328291bee670e9": "79bf619f716faf7a6b8d83a097db5ce6",
".git/objects/e9/1b3c40a4127087f61dc85a19569cba7ea0aee3": "e002fedf9eba2a00f620a180d8c69948",
".git/objects/e9/4d89a9905a6a4fba4c37263fff2989d7dcfca9": "c6ff3e6346b8f79df73ad54e50d696f5",
".git/objects/e9/bba6980e8c0c9deb3cb270feb3e227c15e1624": "db8ac0b5c66338abfd75f76cf6677158",
".git/objects/f1/b9dbfc399acfa8ec3d288885856e5c0233a0c9": "d95aaabb1e7fb41fc4ab9fcbe9e920bd",
".git/objects/e7/deb1cca675a78ab25409b1adfb067d50c02d6f": "8bb448e5d7670438fa0f19b91159eeef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/13d69189b672e1a3881f8ec6ad3c81f04afbee": "cebc28f1ef7d4f17e83490bf27e8b094",
".git/objects/41/fbcb1e2d00104ec9f5c9b1f874360ed0ce3957": "e01fdbbd24ae19e053982f0394e90ea0",
".git/objects/1b/2721a6b9860e7fa6eb6e67581fe3730ff84099": "111ca60b992aa00506f3d26035307006",
".git/objects/70/281e3f76bd07c3b5c7d3665939605b35a2c444": "489996729196cd14840c02e0322592da",
".git/objects/84/c24cc005460a23b84d994cd8275f8773e0a17e": "dbba2d82120cfd37373a071d2c24ffc1",
".git/objects/24/370c786b51de669116160c31b4d18c0c9ce31b": "adcf25c8e8c71f4448973e5dbbb27a28",
".git/objects/23/eb861fbd3a271d662499bae4ee94ce36752a0e": "5f62daba567416432b881fcc225a6376",
".git/objects/23/c0e4a1064e97849b81420ffc410a52f169288c": "fced31426c110e35c0eb4125125eb091",
".git/objects/15/b3d5ca86e0a74d9a757cf032236851d6ae81f4": "73dcc67b2e196322acff7454b3761ed7",
".git/objects/71/2eb676e4cb26cc97df18d9c5bb4f116d0644ff": "285a44debc6f070791eee536c7885a58",
".git/objects/76/00a7020dbf01a6fc2b4cce74cd4fb9df38adf5": "b569ef4e0f65a066f789bd2e56e7acc0",
".git/objects/1c/f5e3f8171aff214bd09d7c1713199ebbf7159d": "d60acfcc3245a47ffdda9cfabf925f6a",
".git/objects/40/35d6e2fc8c07b9b942ceddf9d14e73f3b5e826": "6f0da947191e4e2a25da5cdb89f7b350",
".git/objects/2b/73c9ff5eb2566b5f7da62b6139ba4561c4ead8": "8986898de7ed35a071c2aebe3ecf5025",
".git/objects/2b/5e071c824dafd3d67610e29113f797489111f0": "a0cf93c0a98c16519180da579f6d2847",
".git/objects/2b/f3445b7cf6f42ade5a6bfe056e6ae12ba71394": "846a6870d52523fc2b9be8d31e8bcd8e",
".git/objects/2b/8f67c2e7a2e4c85028ccab8140733844bc8f2b": "f1b29f60616b5c04827bf4492909ded6",
".git/objects/78/9ddf669963dc43916700934d7a6d129e5afb58": "0856e6ab3077b764e0329e842e6cecc0",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/6de18f63424e4292453842b614c73e6d72ef38": "e3748eb31b5eb4bfdcb46814cde064cb",
".git/objects/7f/66bfaa98f0f0c7e967816c217f14f747a0bfc0": "c3957f159599d084d5ca42dfd404323b",
".git/objects/7f/29f477a6f0bbdefa2ec8804514ebe52b168466": "62bcae9e1b3c8257d689f58cf6bb5faf",
".git/objects/8e/61a71a81347a6b616c0bafabfb92b3f7ff092c": "8303057a4973e70218577274797f7e02",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bedb14e5b41188f63532a15bbdbcda43",
".git/logs/refs/heads/main": "daaa65977b0bcd7596cc46333bccf47e",
".git/logs/refs/remotes/origin/main": "0076cfc23fabe3606711c2965a92d781",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "83b91e5e5b421468a92387b8d06e3447",
".git/refs/remotes/origin/main": "83b91e5e5b421468a92387b8d06e3447",
".git/index": "32eb3338350441ebcbae9099802c407c",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
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
