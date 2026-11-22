export type TrackMaterial = {
  session: string;
  title: string;
  slides: string;
  recording: string;
  recordingPasscode: string;
};

export type CohortKey = 'original' | 'arabic';

export const localAccessCodeHashes: Record<string, string[]> = {
  "ai-strategist": [
    "0644a1699ae21c6968d6915e90e06afc31dc21f283f2b019fca4bad31a3010b1",
    "11dfad89b6037d96614173936c85726637e673f508362c9fe1eb7cfadea1eef9",
    "1a57510ee4d33dec402d7d360ce428a6686ea6deb8921ed99ea19064951a097f",
    "2757bb04086cbafb2d59c62faeb9b14f59d7ff43c07f1a1dd82c852fea71c9bd",
    "2bf9f8a089747c53a28d2f721e1a1e0a1f62c7339157f55e8ef64630aabca60c",
    "3747f3940f316ca0250f9c3de4c6ed5fb058e0294e0441bc8667f5bfc4688bf9",
    "40847711b9831fcfb5e0c6cf43f62b20a000051fe4f5f418254b5379dd0ee980",
    "514ca1cb2d834aa85925d2cccd95a742e23a4bd88708e6919159608e7380e1e9",
    "67390a0f827d9dcb6cccff49335c71250b7ad738f990c219c9312acdf8aacc07",
    "6fb48410cf16e25ad72257e3d2378bc12ca180f91755f480a32fba6e6ad2e705",
    "6fcef34988946297529e34fd834876ddb55931ccd4e01ce7fdec931024fcfe0e",
    "7bb4f68568ac425ee4e9e5319cd8f3c35f718693c9bf9a077c017305a34d5e7a",
    "8086a80ce82905753f9281dd4aa67f37dfa437e704abac9e69c5ab5b77c21160",
    "8183eafb4afbc8a83189c7ff42d3da7b288916b598d084412c4f2d7122b51f23",
    "8190774c5f5c7ee1cb4daeb49a090bde358c9115b18daf6923d6d4c70890b156",
    "8e4b2e936836b1fe9bbb691746440bdb42b0135b436bfc6227646ddcff46788c",
    "a3757ab2a9e36a39cf24343e5008039a9822214f9fd6feb713f6d06471146a7a",
    "a6424236fe9f8639726d08109143939aaa55af52effcd45b8eb05b4d5e445282",
    "be807960af27d3d9438e1919e71e6c5b1d8e35b020de5f6c887866c80a2717e4"
  ],
  "ai-administrator": [
    "0b3129d627bb6e7e9d62a3ed511c06978db96a529aee932c10d18c410a925386",
    "181cf02886c35cbdca4f158337114bf01463cb9dd6f0671bb5ef2883af0c2866",
    "2bc5154603043a891289f4aedcf59acf46074597af05f74f362eb700c6ccb478",
    "5136813e40096f078a05d88757cb24ec63accd6d692e4e88d8316b1b8b2288cb",
    "5b321bc26434d0fca340c2f3952ccb50b0ab591b6ab2c787725984c3a8f5d233",
    "650cb75848c7869a12868589106852bc2b93b20b0dac37761627eb0c7dbccb5b",
    "9d5809d2e9eeae256e8fb03f6a0462fd0b9df948e17420c4db2f4aa4c20dae52",
    "bf32035a20699ddaf8ff5a5dbb6d4624e7acf48e4e5a8da176a366c7e445c6da",
    "df364234d771230f9f2efa4241aa434b575642ca154709a660d517583c429585",
    "fef05a88112c5d71cfa001e1ed244e0653cbf9a7c93031bf6aa56e97b1ba58f8"
  ],
  "ai-engineer": [
    "0088ecd5906255e0e4973818ac303b5d7be80bdbf850ae541cf24e5bddee4ac0",
    "05edc3e655c893b1514d96ab617022259484f54d6c5dc4c767f404111dcef7d3",
    "079418e888acca10142dc1fee771e4bc26bac51848fa2c37f7b3fb6ea8b84746",
    "125d2577cb2025d2aef1024f44ee08bb28bedcd25b37966a48fb85dbdeb4cf32",
    "16844f8e0c69be8485f4bc1bc6fde1e5bfbc5ad5a20a7898edc8c3857c922ac4",
    "16c7188e0b0c198949427f6b535bfba7f32bf85ffb79b0c4bdfe88a2a9153445",
    "19f034752dfd65569885a954770c19bb43048ac60f1c13baa21eea5994e3f155",
    "2030f785e60d7d06766235ed9d373813fdddba0a4055dbb9d7d8283ffd26a171",
    "2aa269d7866b61a96f8ac350fbbe55165d28bb4fca8d03942e808b8168fe5db2",
    "2c12192298b7cf61d07366463d5b406d6c42321e5cf5b51e3e92896d4a42f67a",
    "30b3388ad98ffc566c483b8714670718c678b228d5507beb0c5bd970c64a7b41",
    "32828edfededb1cf5c1d8918da1c90015502fea03b7961e8b4cdf96473121a9e",
    "3384e93dcb92bc900a317950c103582c3e76bb81f986a045fd148a88ab162cba",
    "37f8587fbde418e1a2d5c8ab85e4993d8b0f915c0c66d0856226ad878b90006b",
    "3e4530869412185b7b5a79838f537d75cf91fe815078063cca428ccc6d602380",
    "3e6911486441f983c3525efcffcd2fa42a9805b4866903f9eef842083a1d2f7d",
    "418b63a45013dd16009044bb8b49f6ef61d26f18830eb9b8aec9df96919f684b",
    "44fbdfd66ce87a3e1e6bccdb961b41e578f296add8942cd468b295fe6a92c7e4",
    "47a2a8c6829f440d9858a3ceba9dc10e9d6ab988a80966ff000925992bf669a6",
    "4b89d0a7d12cde5debf6882479503d6b31f823b0f6be84ad139acee68be8f2d6",
    "536542b9366ae25604bf6c6d8d731fd77ad9b83e53e456b999d0d3eade978bdb",
    "5429a0f98e4ac71994cc529dca4ef4c7597dcc382f21811ad3d8cb1fc24ae709",
    "5772859e3a26498267dfb3b6c0590803f0e812ddb729207029fcd22394233776",
    "599a2987afa96caa4c36b8cdfba15ba866bcab52076f1d399d47f4a32838e81f",
    "5e93dbca93a38595fb50bb3a1cd5eec9b6fefee681b8014ab9dbf264e4731c45",
    "5f0e797263bf3533d30bd5b123e3f9d7a5c55a9bfd8a2bb119a630d31317ba39",
    "621e8acb95d7c5e10303aadf93c94295be860c0d80e7be486fcc027c1ac13d4d",
    "625c85b8175f6b1237212453ef5b89455f334d05522361e40c4397975aac8bdd",
    "6351c74ecf27b53fcff16c20651371810ec5c40c39953e68080fbb8fb58a0687",
    "64c65a0f59be56d5d58aaf1047471d97ba5080124ddb5494e69485da21ac1ac4",
    "69838620817ac901b995dba9c062f0fb372379b72e5cbd6f1a4228ef4759d786",
    "69bc46da447a90f908bf0d8e5b265a8087b9a458ed6ae9780072f323ce6f7594",
    "6bc28fe1d2ae292baa4bbf1476a87ce002d203ae93e2ca92d82e42c2f915b2f3",
    "6eaa4e8b53f0082001c04a0aee6c8eacc7d9f8aa4f9489c5cb7674cc6c9721f5",
    "71185a3cf1bc2f083b88673e48d562928153ba3cab9061656c1693c6c98fa72c",
    "72e2f82605bcf42e25c798a542973b36c7b1f6721aca4001d4966a02755157f2",
    "73a55672976533167b6c55ed7d7f08464e5fb65c69bcd99ab7eb1910ef04aac8",
    "785c928442229d9dc6cefab6fee50d338303ab072eae2d980d58b9059bbe4391",
    "7a10b001efd3c8ee51a865228f76467f5380e1d8a73284e2a5114627251e6321",
    "7a402d6baf827e9ff02f5a2090b3e8f01fead4a4b73a6c87b009863e524a86bc",
    "7f78d6db156a6ee89a22b1238dc6c083874bba802819cb8d9116a623c54dc865",
    "80ff23f63aa401e229463eb24b19bf3f587ef75517697a8b008c4aba5d274770",
    "811b68da518cf0d5985591df807ba5b906073faf7a02e6ccbd95c59a96a00e2f",
    "84ae23e78e419b689bd90af8ea7482412ff34dea841e374c212a4d31644be6f1",
    "84d9fb22ab5190828699515397041bc6fe03e613a90583cb1d38f1675ac67d87",
    "86d94a6d961403337573136311bdedfe4ecc627f798d77ab60323457ace14969",
    "891c5d65007fe8e6a2bd56d992417571ae811381d42e0f8a739f17b2a488bc82",
    "8dbbbf5e6a785aa7fddd527242b2caca4a79e2e8dadaae070668e579ef8b7bf0",
    "90bd08a8911e245c5658c04917ed16c0c1ae55cc2cbe581a992dd38353e30099",
    "92be47d2fb168c051814234f0ec034ca8e45c85f0dac7bd02c5a0b29dc5889a1",
    "92f6173e37759b583c664e70d84080c9eea0f2d45796e5154fbf8204e0e35edc",
    "93997194684d61d3b56e3a680f05d287ef6b2edfbe9cc1f0e7418c7e669f32aa",
    "96c17a7cb48e3a020f6480db0c94936f5470ca3057d564d354c56dca7e1cdb87",
    "97f0b737d47e13725ff6cd98046e3c623e2d97ea7767de115fc1e87d8f24028f",
    "9edeac50d948fedad878cb6e228fae9cb2bd9fc12f34730554e142583234d9d2",
    "a0e26b208870ececc55808da145066087373da56bb11ed5bb06f7251964460f6",
    "a16ad0fd43fd358c5b2cc8306a6cbb125f284486af635821316703a53336e46e",
    "a420c4c6397676bbcc4887822f49b9d85e8a86c6614b7740817dded0386390e1",
    "a4d0549892842446a4265109a03cc28c29898efb167a3f124c2cfcfb6febf613",
    "a5e5cadecb6b1613a0d82a619309e69890dbab97cbe03acc52d2f23ae90fc253",
    "aab350aebf4978a19bed8a9b7e4f15b5d65659eb432f15ad06ad0b7fc636bdd7",
    "add119868ef91d65729272173281e849e1c1e1ecb77db678639c27e84fdc8a14",
    "af2fe4882b0b50274a91aead4a70d6669dcf6e7d21f365381a5e37ab09900149",
    "aff7366e10b6f0170c9da35fde794d430361ba43821e6f11934a9eabb1206ab8",
    "b008ca7343024092fca1abdf84ed4d9d5c0f480c930466a833b3aca293bdba74",
    "b11778587c6adc673aabd3935d8b21b256bcd5131d1596205921563eadcd9f33",
    "b1c0bb3afa89f66244a37be6c4f7f4f93072cf897b304c80829f9a1223f8861b",
    "b2dac6390daa1fb48102d9aee1827df53eb6a86ae75ca9e37e2be495d0c01d38",
    "b3056bc8e0a572e9b27098f920e104659bd18cd978caac71cc9910f38241da9c",
    "b347e307171dc8ed8e0b8d4d845dac00e9e08cc80429ff2adc3cdd3a7d8b29cc",
    "b6174f9491020c6ca3207aeffcbb38e2faec3bd989f5184800c0fa95613144fc",
    "b89715818604e0688f3834fecf45f1e2c09f6ac4fe115cdaf6b1b53940d49800",
    "b8a5df467673323c0373f32ea97fcf89723b454cbd3f5560f3f6401c8472e09a",
    "be5bf5ef3b726eaf641436fb2179d9c052eed6c2f0fc2a17da5eaca68e2d5bac",
    "c0d308dadabbd55224457e5a00e01b6b7292b1d79451837ae924a001b712fa7e",
    "c22525d50a1b7b9ae26f3158a343b6f46a7a3740a53fd53bf6f1ee26cca67ce6",
    "c2d7afe37b815c634daa2c06d15c315470f1c228d575139af5f20b66d995a5bf",
    "c341f42a3165e85c2c13170cdee94b0958841a4ec25d316e767a6eb80ce398b8",
    "c8219ac35751d9d8e16eec5f3b94672fdc96d10f91d3defc9eb1556cbaafe193",
    "c987bb68315eacb91810d0abf40cb4e44d7da270e57479021258fd84692ca122",
    "cd82dd83d85cf2bc787e9276ae2110a22c6758708aa72a4b06e733066a2b57fe",
    "cffda04f6b23c9bc2f9766a720cdd71a39e04b18effbee4238709ca923f5a9e8",
    "d003cd60c005ebc16143024f1a87dc006ae947626ae7823409aa9ce75da54448",
    "d350d9a87f3f44900683da9e77d75222f4f2a5dc9548a5a3aa0cf7247ea3a696",
    "d51ca706b9714eb69cbf7be18676e990faea40cac15422bdcf6ff69aa2bc3b87",
    "d5af8e4bb91669406e022d21dee98ca7b1bad80d5fda33628fe7d2c113742f55",
    "d5d44d4eddca1b8ab17d5a948a7f7ba0494f6ff82e106da4090f9524b81a30c0",
    "d6bfabccdd9b06407b6c9da8d802c8b173eb5d7bb0617ca90851a427cbe80942",
    "d89dc13074e9373c7347c004aa91b3e4af62864838c5b33712e13d26002b1613",
    "da2401657a693235750c21b0b3851ebcbbc0cf7ef9be21c9ca48e7804af0e32e",
    "db16f0298f420f4ce08531cd78d557331df244eb999bc22abd9e6d2f2fdf3c82",
    "db93f492c4300bbae12f05fe6b9dfa0f761ba670fe060a5fc235a9d115f68c72",
    "dcc738dab0303324483665c439a4ce2d5b837ddc63051f9d47bc209902b0c199",
    "de50b6958f72482b7f590d4b2c84726fc1081d9528b210f925eccf8f5942ef90",
    "e018988e246f62eefe6a876a5476801214869bed910d1c5cd7853c5fb2c16e48",
    "e5249625e5ca009431d1dbe05ad551d6d8913d522ff245e84a860b233e48daa9",
    "e6f0f147fd8e71eb9ea742982a98473d2f5a3db74a4c9624bcdb8d9f35a28aa6",
    "ec04337d6b1ce77db8155b9534d2027325e9643b453a86959a42633a60fa5dd0",
    "ec2c85b537f7bafca5c420e7daca3500aac2da1e404afd6ba8d9934004f68577",
    "ecb836d60fb8a4a30e0530147099e0b46b610e4ede2b4b5f1442118bbd64cfe6",
    "ecfc5acc03376193676f4a7a1ab3adffe2a780f9cf6bd7b460ef9ac283df0f2e",
    "ed0d1dc962dda08ebe3ab0913f6e2375ce131faf07038d1dc96f391596660dd5",
    "f02cc28da05b49b60b1ab8486298669aa505ba3014a6e3b0f55c244dca041f13",
    "f05088b5ae90097d501aa06185570cecfd5e69fd4ba628cdb6fceac8faf27c5f",
    "f27fc0f244617df7d4ebbfdb49f8c1a6268bc9e904cc1b1006fc1b592d3c8010",
    "f496dadfa7f5cf57319f8f085c9abf79c80d04638283c7bc2140c6361ff1d9d1",
    "f49d407a7fa6b9d5b7f571a29d01c1f81a174521e09c23ed9a0edf89d3596344",
    "f596a07a8a1011edbd83c7401f8e8c9d12739f251f387871804427156b065cc6",
    "f79436e97793cafa2e204a5171b533d9b4516ebe0f3943f66eadc262d93d5c73",
    "f9edf9f121025ad4f2c1b75eb66bdcab029ce37973b74703a6c443b5b6835797",
    "faaf89bf12ad13648a2b94dcd79ab1d26cb5c3b6b6937e60ae31920847d863ee",
    "fad2ff72fed010ffcaa839a360f089dd8c1420157aefc8be91485cec246a545e",
    "fb9e8fec290277431070d0c3ff035e4ddb0e7a7c6df28612db2a1ab4f76d1832",
    "fd26a7f927fcf4d55823053271e04c8d270f75fbd9f54f581b8b6c89a7e91dbf",
    "ffef2cb59b2c5e70b866e25d701335c2cb4b30b27b6ecc6d2b2b2278429d4404"
  ],
  "ai-junior": [
    "167e654e8463f817a995843d73875646588ba064f73cc5e8949c71d2b83457ea",
    "21570c7949438b1ab1faaaf22e5fc2ece11a8e62cc608bb4bc3bbf6cec97677a",
    "3a4bc527809ffeb26c756eeb1c45f5254573b9e44f46969e036ccc3f04a88306",
    "42502100c3ca364774fe255e064d353a35957f16cecdc84eef55b2520b03c394",
    "46cdc38965704a149fbbabe0d22a9071af10b2ba06cecab680fc72ab624d96f0",
    "50de7a0493155e698dcd08f669aef09af30d08c05143f96d7430cc8704e483fc",
    "5789835b8ed448d6ba1292f7eefdfa5371ebb91a3f5d71d623fd8485321f3d78",
    "6f8fb90fdb68466a0353e8168b7edfbff342cfdee3517f717d35dc8e24280258",
    "87c4b17b208db41fe7138d2a70a6ad00f6a70dfb3d72aa771a1dc013fa6489bf",
    "87cb9419ab454b23a51924cf2fe1c522d795ea4e20f823a4c0d342664a0fcbd6",
    "893c8840ba862a235521635199dd6ad234c2a0a24f5dd25e20e4870e514695ac",
    "971f2d4c0a06af7729d695f6cb24b7a35324301e2d521ee02d972dd94a1b30c5",
    "9b938f6da3528f1aaa3429e729ec29d2d8b2eea7768845669591272c33c7ea98",
    "9f2136f448433ce29f041194467044ddca78cd2d6018e0f69b49264257d881e5",
    "a6733c4fa5112a4615a6a9b35f34e7a8cd9f801023449d61a144d0c23c35f773",
    "a6c19e1493a42180b26ae185c178c3acff6c5f035d0b1eb718d179f73933d8be",
    "b62a9cc1a885bc0027102732c80638ab7f3aeb8abe3502b09fb0bbddf44fcb34",
    "fb49aa63f1e11b73e82be350b86a7ca3249a9b7c993839ddc193bbb7d264bc39"
  ],
  "ai-expert": [
    "0a22c5087b8242a3967c8bd9fbbc08e4fbe77d48fb6dbcef11e0de5365853753",
    "3ae40a3dac5b0217f8d0109aaf5e3fe6b1ab1467a232ed0bd5b4587f25709ff3",
    "4834cd3b18d1346f09873bb797b12fcd028884e5855bba7a5bd8f20d5a8919ef",
    "8e7c5488a0f39b68f824ac4ff2d5e33a3ea6e4fd2a56ceeaec20273e0dd983e6",
    "9d54662930934964b3da1e2171982e789b1377d9976b6a5e3530ae8792a4e8d9",
    "b4adee85cd392048768580f92d562cd5ac2d670a171951cabecd7792f612846c",
    "b9298f71d9afc6eea51e23e17c01bc53733599b9fb155935a9849d7a261116f5",
    "bbee4e5a0e18af772f6ab67af0b8693765e21748e19466acfc89d4c810988c0a",
    "e4d9533d334f884a172dde25fcda133d50961d8903db98d1704812cbadd11393",
    "ee7de340b6b389a1647398ca785a0cba56659432078587bbd75b8c6fdc69850b",
    "fc9e3ee70648366112cac194610cf236ad54f06bafc1cf69b019d01c858ee004"
  ],
  "ai-viber": []
};

const trackMaterials: Record<string, TrackMaterial[]> = {
  "ai-strategist": [
    {
      "session": "1",
      "title": "Overview of AI: AI capabilities, limitations  and strategic implications\nPractical output: Organisational AI  ambition statement",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/17Bkebdfn5FyXCdeAWXBvSlJsWRA8fIT1/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "2",
      "title": "Problem framing and strategic  alignment & AI use-cases Practical output: Problem  and stakeholder map",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1bXm7zxsV17aNcJer8bkV4PaxeYIuXdKz/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "3",
      "title": "AI opportunity assessment  and prioritisation Practical output:  Scored opportunity matrix",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1fHv-EVfVDk-GSjx1rSBN_c768NmW3nZK/view?usp=drive_link",
      "recordingPasscode": ""
    },
    {
      "session": "4",
      "title": "AI Strategist use cases  and standards Practical output: get familiar \nwith AI standards and use cases",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1IIw-E5EjAEb0dEbxSyYcF-YIJU_FNcl0/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "5",
      "title": "Data, technology and  organisational readiness Practical output: Readiness  and gap assessment",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1mFDSWwOn9R5N1iQNVzEoQElF8FVDMwsE/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "6",
      "title": "AI solution and sourcing strategy  Practical output: Build, buy, partner  or abstain recommendation",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1c0GN-ho7RAGweKI2OT1BFchhiC5nm1W9/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "7",
      "title": "Value creation, costs and benefits Practical output:  Benefits map and cost model",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "8",
      "title": "Responsible AI and governance Legal,  ethical, security and operational risk Practical output: Governance model and  accountability map Practical output: AI impact and risk  assessment",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1MGfmRFdTgLBRjHtU6GuYXZSflcAXRmQo/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "9",
      "title": "Business case, ROI and uncertainty Practical output:  Risk-adjusted business case",
      "slides": "https://drive.google.com/file/d/1QMB4mr0p-jFnWfZlrJZIu9Qs4A_kswJf/view?usp=sharing",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "10",
      "title": "Operating model, organisational change  and adoption Practical output: Implementation  and change roadmap",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/DKh2C1KVAESS-tNgjWtPWq7c9dd58auvnSm7A9gmfaC8YdKIA-kzM82IIBEM6qxX.s_ipp_Yc3mY09LuR",
      "recordingPasscode": ".64D?FH1"
    },
    {
      "session": "11",
      "title": "Executive recommendation and assessment,  AI evaluation Practical output: AI strategy dossier  presentation and defence",
      "slides": "https://drive.google.com/drive/folders/1bHK3jxnd-srvo7BsA5NL8JQZ9OxOTGOR?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/CfKWhP2a3v3mMGJnJsxCit75SDYkgXxqxR0S9oGQSo3oavtB3LPzjA2Xmp6rFvH3.mluz1W8ETkYLd_uA?startTime=1794317409000",
      "recordingPasscode": "?gj^i%3B"
    },
    {
      "session": "12",
      "title": "Final Exam",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ],
  "ai-administrator": [
    {
      "session": "1",
      "title": "Foundations: what agents and automations are; agent anatomy (model,tools, memory, instructions); workflow vs.\nagent; real admin and operations examples. Tools: ChatGPT, Claude, Microsoft Copilot, Gemini.",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1mUvK1iiXKFsupe1Wfl7UgH4b3rDFn58L/view?usp=drive_link",
      "recordingPasscode": ""
    },
    {
      "session": "2",
      "title": "Prompting for operators: roles, context, structured outputs, reusable prompt templates; AI assistants with projects and\nfiles. Tools: ChatGPT Projects / custom GPTs, Claude Projects, Copilot",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/nW0aBwOJGC8mwFe36a4aBMTzyREmPSVaDh2NLbRYzSRfVJrb0TTkIazPYgIdoSi_.shH7sn66rMfrIE8R?startTime=1791226551000",
      "recordingPasscode": "2E&3h.#L"
    },
    {
      "session": "3",
      "title": "Workflow mapping 1: current-state maps,  swimlanes, hand-offs, inputs and outputs, pain points. Lab: map one real process. Tools: Miro or Lucidchart, draw.io, Visio",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/TlON7aPhYE13jbiQLWpt3XWLghABgWv9gGHDLPx4XlLW8DuxERschp9MUo_5TNnf.QZEEm_U5lpiZcvho?startTime=1791485656000",
      "recordingPasscode": "8vr&*Vx="
    },
    {
      "session": "4",
      "title": "Workflow mapping 2: future-state maps, automation candidates, rule-based vs. AI- judged vs. human-only steps, ROI and risk scoring. Tools: Miro or Lucidchart, Google Sheets / Excel",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://drive.google.com/file/d/147lo3CPo-Jxf7ya0jXEcTvTUCnT4An-R/view?usp=drive_link",
      "recordingPasscode": ""
    },
    {
      "session": "5",
      "title": "Automation basics: triggers, actions, conditions, data fields, error paths. Lab: first no-code automation (form to email to\nsheet). Tools: n8n, Make, Zapier, Power Automate",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/oBjijKikWCP9RR5JujR_YSfN1uG7yW9SWbDrGDtqqC2_cVx9o155XjCaXH7tuH0G.kcXbU00LXlQgD58G?startTime=1791830370000",
      "recordingPasscode": "P@bn27P."
    },
    {
      "session": "6",
      "title": "Adding AI to automations: classify,  summarise, extract, draft. Lab: inbox triage  and ticket routing.  Tools: n8n AI nodes, Gmail / Outlook,  Google Sheets, Slack or Teams",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/Wik2_5JMilENl_vbQfg53FZN4goE0bF5c78qxaHBivd_OhL53wIgRVIsH97zpNb_.OqMVuFHyQugSi4_v?startTime=1792090025000",
      "recordingPasscode": "QyY2&3&d"
    },
    {
      "session": "7",
      "title": "Connecting tools: APIs without code, connectors, MCP servers as universal plugs, document and knowledge sources, RAG for admins. Tools: n8n connectors, MCP servers, Google Workspace / Microsoft 365, Notion, Airtable",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/uTfhMN9tAS5SXMuwAUvbt100iJS4_iS3ADydyxK41WbqedAo0Tv_ZYW0rbXGD2ga.V1tJ3gtrFcUIL7er?startTime=1792263941000",
      "recordingPasscode": "^!D?V9Zv"
    },
    {
      "session": "8",
      "title": "Building an agent: instructions, tools, memory, skills. Lab: a department assistant in a no-code agent builder. Tools: n8n AI Agent node, Copilot Studio, OpenAI Agent Builder, Dify or Flowise",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/LoXbQJKoku7gzBM7UkYKCCx6W83XpfcuaC3NK0QQhuUoXH_ny0BxLwn41flB0BYc.-wgJnz1yIBNCVbI1?startTime=1792435929000",
      "recordingPasscode": "?&pniFD4"
    },
    {
      "session": "9",
      "title": "Multi-step and multi-agent workflows: sequential, parallel, supervisor, critic and revision loops. Demo: always-on personal agents.Tools: n8n, OpenClaw, Hermes Agent (WhatsApp / Telegram demo)",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "10",
      "title": "Controls 1: risk tiering of actions, approval gates, human-in-the-loop patterns (approve,edit, reject, escalate), audit trails. Lab: add an approval step.Tools: n8n / Power Automate approval nodes, Slack or email approval buttons",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "11",
      "title": "Controls 2: security and governance, permissions and least privilege, prompt injection, data privacy and PII, AI usage \npolicy, EU AI Act human oversight. Tools: OpenClaw and Claude Code permission settings (examples), NIST AI RMF, ISO 42001, policy template",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "12",
      "title": "Monitoring and improvement: run logs and history, failure handling, retries, evaluating output quality, cost tracking, \nchange management and adoption. Tools: n8n execution history, Zapier / Make logs, Google Sheets dashboards",
      "slides": "https://drive.google.com/drive/folders/1Sk7iKgVK4YbpRavMB28dsDxsEwMzdYpG?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "13",
      "title": "Capstone: map, build, and present an end-to-end automation with a human approvalgate, audit log, and one-page risk\nassessment; peer review.Tools: all of the above",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "14",
      "title": "Final exam: theoretical component plus a timed practical exercise (design a workflow with human oversight). Tools: online exam platform, n8n",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ],
  "ai-engineer": [
    {
      "session": "1",
      "title": "Intorduction to AI Enginnering Track , Google Collab",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1imVmdDTHBKBkgGBiP8MTfCkngBF4hmuu/view?usp=drive_link",
      "recordingPasscode": ""
    },
    {
      "session": "2",
      "title": "Data Wrangling with pandas",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1iS5HhwZy67ucJN-wcuIzle8NeMlkRJei/view?usp=drive_link",
      "recordingPasscode": ""
    },
    {
      "session": "3",
      "title": "Exploratory Data Analysis and Visualization",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1XWfQG6kdvdJXPG3jN04-ZXatTr05lAB_/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "4",
      "title": "Data Cleaning and Preprocessing",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/drive/folders/1Mhx2UjE0VxW_PwUhJcRvahPH0VNokoP7?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "5",
      "title": "Statistics and Probability for ML",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1oiSgVkWhkAp3140vzc46Gr_UAg7TGpsy/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "6",
      "title": "Regression",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1nnpBYUUtiupr3Gehq_V1toI88Gsu5UzT/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "7",
      "title": "Classification",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1fNN7Kel9i1TPThTkQNafi9zi1lonsvCR/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "8",
      "title": "Model Evaluation and Validation",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1H7PJu1A211G2zrRUnPyVFGdcw-VC3cU7/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "9",
      "title": "Trees and Ensembles",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/EytCtEafMaabC8BEiyFrSLyRLQ24j04emPjAWk1vuw2q9Y2vNaT6CbP6w92T9ipo.3mAl57Tglb-UH9Yz?startTime=1792868165000",
      "recordingPasscode": "!2fxjwpL"
    },
    {
      "session": "10",
      "title": "Feature Engineering and Hyperparameter Tuning",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "11",
      "title": "Unsupervised Learning",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1gOoXh3muC6crH-lGDIo6vW400_zhT0O-/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "12",
      "title": "Introduction to Deep Learning",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/M3kocyYvHFGw57QRHbWsxSfjtjWSBiTco_jMP6hqj7rf2-Zd5hiUwcr5tovecZDs.0q2ezurzy1kIDVDv?startTime=1793559441000",
      "recordingPasscode": "5c^QU+XV"
    },
    {
      "session": "13",
      "title": "NLP and Practical LLM Use",
      "slides": "https://drive.google.com/drive/folders/1-KkxAf5o4Ex7BcK04ra_o3I4gmG4CdiY?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/4O8HcAK_Rv92ibHxfgfNf68dDJ7Dn3-TwKhPAoX9eH071qG_OY7PopTUku_apkQt.K9eDMDXuw7NAOZ5M?startTime=1793818565000",
      "recordingPasscode": "$p23JxHx"
    },
    {
      "session": "14",
      "title": "From Notebook to Production",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "15",
      "title": "Deployment, Monitoring,  and Responsible ML",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "16",
      "title": "final exam",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ],
  "ai-junior": [
    {
      "session": "1",
      "title": "Welcome & Introduction to AI:  What AI Is, Its History, and \nReal-World Examples",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1X0UHWx2a7QCwNrnE_sdC_-3AjBN_XrIO/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "2",
      "title": "How Computers \"Think\": Data,  Algorithms & Pattern \nRecognition",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1mItPyBDbq0dbnM9p3P_Wk3o2SiSOVSou/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "3",
      "title": "Meet Machine Learning:  Supervised vs. Unsupervised \nLearning",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://drive.google.com/file/d/1Mnt95Dvie3lAX__9KTq9jEc0ApTU9kuC/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "4",
      "title": "Neural Networks for Kids: How  the Brain Inspired AI",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/YJ3orpEPwPR7QPuNfN2dbGPzH5UaHAWNNceh-FQL58VlGOJFE8PwrTWA7nRGHvkV.f3EO303fdFetvzsw?startTime=1792947608000",
      "recordingPasscode": "2H61J#7H"
    },
    {
      "session": "5",
      "title": "Level Up with AI: Designing Intelligent Game Systems",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/-N22ftg58L4A9GnaIXf5qryLtFq7wnBgcKUiuz0fQL9oQ-5ogwjXamcUyc13oleA.gopErOeed7Nrh6yO?startTime=1793206809000",
      "recordingPasscode": "=6Q!1Cb+"
    },
    {
      "session": "6",
      "title": "Creative AI: Exploring  AI-Generated Art and Music",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "7",
      "title": "Hands-On Lab: Training a  Simple AI Model with No-Code \nTools",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/ZsfWTM-RA85nMH8YZPDhx7H_dbJyRhYes096IF83DyEBvYicV75aHtEBIQnbK3pk.CFc0YLy2oFYfvOy-?startTime=1793811610000",
      "recordingPasscode": "6U3q!ZHR"
    },
    {
      "session": "8",
      "title": "Build Your Own Chatbot:  Introduction to Conversational AI",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "https://us06web.zoom.us/rec/share/FlI71EUXaJTlrSkUNtqpCXqthZIw0pZEBNLyXsityo4IyKUkGQN_r1k799HlFyh6.bt8f_zfmAi300nXt?startTime=1794157208000",
      "recordingPasscode": "^9hp5RD#"
    },
    {
      "session": "9",
      "title": "Staying Safe with AI: Privacy  and Responsible Use",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "10",
      "title": "AI Ethics & Bias: Understanding Fairness in AI",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "11",
      "title": "Guided Final Project: Designing  and Building an AI Solution",
      "slides": "https://drive.google.com/drive/folders/1AesOx748joEAi_-SDx-2U1C9GNHB3Att?usp=drive_link",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "12",
      "title": "final exam",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ],
  "ai-expert": [
    {
      "session": "1",
      "title": "Generative AI and Large Language Models -  capabilities, limitations, common failure modes,  and appropriate tool selection",
      "slides": "",
      "recording": "https://us06web.zoom.us/rec/share/YWuNVwYNuKeJ1AmvGJI6KtHNFL-CFOhSrQMJDk0efkbJADtIku2oWkCbtX061A2L.hx-W1knlnJsS85v3?startTime=1792083557000",
      "recordingPasscode": "89C@eh6h"
    },
    {
      "session": "2",
      "title": "AI-Assisted Research, Knowledge Work, and  Productivity - Practical Lab - information  gathering and synthesis; document analysis;  comparison and organization of information; content  development; decision support; evaluating the  reliability and usefulness of AI-generated outputs;  practical research/productivity task",
      "slides": "",
      "recording": "https://us06web.zoom.us/rec/share/tfU5iVetmjSTFddZa_4acdaJSuDt-PI_ScJ2aVjdKz5xIpMexwE6BffcG_A2lBkh.xTZFvjK_ShqKmSWY?startTime=1793551997000",
      "recordingPasscode": "tubX9LY*"
    },
    {
      "session": "3",
      "title": "Prompt Design, Context Engineering, and  Evaluation - principles of effective prompting;  context and instructions; constraints and examples;  structured outputs; prompt evaluation and iterative \nrefinement",
      "slides": "",
      "recording": "https://drive.google.com/file/d/11IoaCZCAcxCoGPkTbwviXYrrSdbLIobU/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "4",
      "title": "No-Code AI Assistant Development � Practical  Lab - configure a task-specific AI assistant; custom instructions; selected documents and trusted knowledge sources; expected outputs; testing;  evaluation; identifying limitation",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "5",
      "title": "AI with Documents and Knowledge Sources �  principles of RAG; document-grounded AI;  knowledge-base assistants; external and organizational knowledge; source grounding;  limitations and verification of retrieved  informationRAG-based AI Assistants.",
      "slides": "",
      "recording": "https://drive.google.com/file/d/1B9RgbqUbotZ9xtLZRPhRk-3O0n7VtmJm/view?usp=sharing",
      "recordingPasscode": ""
    },
    {
      "session": "6",
      "title": "AI-Enabled Workflow Automation �  no-code/low-code automation of structured, multi-step professional workflows using AI, including task identification, tool and data  integration, triggers and actions, validation, review, and human oversight.",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "7",
      "title": "Agentic Workflows - AI agents and agentic workflows; planning and task decomposition; tool use; access to information sources; intermediate decisions; autonomy levels; human supervision; \nrisks and limitations",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "8",
      "title": "Designing AI-Assisted Workflows - Practical Lab -design and demonstrate an end-to-end professional workflow combining AI capabilities, tools, and automation; define verification steps, human checkpoints, and responsible-use safeguards; evaluate the complete workflow",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "9",
      "title": "Emerging AI Paradigms: Multimodal AI, World  Models, and Physical AI - multimodal perception and reasoning; world models and simulation; interaction with physical environments; applications 4in robotics, autonomous systems, digital twins, and intelligent environments",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "10",
      "title": "Responsible and Trustworthy AI Use - privacy  and sensitive data; intellectual property; security;  bias; hallucinations and reliability; verification;  professional accountability; human oversight  and human-in-the-loop validation",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "11",
      "title": "Adversarial Machine Learning and AI Model Security - Understanding attacks targeting machine learning systems; adversarial examples; data poisoning; model evasion; model extraction; membership inference; AI supply-chain risks; and techniques for improving model robustness, integrity, and resilience against malicious manipulation.",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "12",
      "title": "Final Assessment - theoretical assessment and practical evaluation covering the main concepts, skills, and professional applications developed throughout the track",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ],
  "ai-viber": [
    {
      "session": "1",
      "title": "Foundations of AI-Assisted Software Engineering",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "2",
      "title": "Agent Setup and Safe Use",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "3",
      "title": "Requirements and Specification",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "4",
      "title": "Directing an Agent: Prompting and Context",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "5",
      "title": "Project Scaffold and Architecture Decisions",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "6",
      "title": "Core Feature One: Implementing with an Agent",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "7",
      "title": "Code Review and Recovery from Agent Failure",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "8",
      "title": "Credentials, Data Safety and Core Feature Two",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "9",
      "title": "Testing from Acceptance Criteria",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "10",
      "title": "Debugging and Fault Diagnosis",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "11",
      "title": "The Extension: Working with Existing Code",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "12",
      "title": "Adding an AI-Backed Capability",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "13",
      "title": "Security Checks and Maintainability",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "14",
      "title": "Documentation, Deployment and Handover",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "15",
      "title": "Project Demonstration and Submission",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    },
    {
      "session": "16",
      "title": "final exam",
      "slides": "",
      "recording": "",
      "recordingPasscode": ""
    }
  ]
};

const materialsWorkbookUrl = 'https://docs.google.com/spreadsheets/d/1mVCxa-XY78gyvqq_DO8DbC5PsBqhehKK/export?format=xlsx';
const codesWorkbookUrl = 'https://docs.google.com/spreadsheets/d/1S-Dy8kkDEdrj-ywf_V-UJ_r17AKdGRgThtQfz9hlz4g/export?format=xlsx';
const arabicMaterialsWorkbookUrl = 'https://docs.google.com/spreadsheets/d/1EieNm3XyPTxyVoLxDh8--2aEPMQiuCAo/export?format=xlsx';
const arabicCodesWorkbookUrl = 'https://docs.google.com/spreadsheets/d/1CgVrl-76J9pCjazS4FJ3kKkoaZ3AgVuysWdF_Nk_-rI/export?format=xlsx';

const trackSheetNames: Record<string, string> = {
  'ai-strategist': 'AI Strategist',
  'ai-administrator': 'AI Administrator',
  'ai-engineer': 'AI Engineer',
  'ai-junior': 'AI Junior',
  'ai-expert': 'AI Expert',
  'ai-viber': 'AI Viber',
};

function normalizedCellText(cell: any): string {
  const value = cell?.value;
  if (value == null) return '';
  if (typeof value === 'object') {
    if (typeof value.text === 'string') return value.text.trim();
    if (Array.isArray(value.richText)) return value.richText.map((part: any) => part?.text ?? '').join('').trim();
    if (value.result != null) return String(value.result).trim();
  }
  return String(value).trim();
}

function cellLink(cell: any): string {
  const candidate = cell?.hyperlink ?? cell?.value?.hyperlink;
  if (typeof candidate === 'string' && candidate.startsWith('http')) return candidate.trim();
  const match = normalizedCellText(cell).match(/https?:\/\/\S+/);
  return match ? match[0].replace(/[.,]+$/, '') : '';
}

function recordingPasscode(cell: any): string {
  const value = normalizedCellText(cell).replace(/\s+/g, ' ');
  const match = value.match(/(?:passcode|\bPC)\s*[:=]\s*(\S+)/i);
  return match?.[1]?.trim() ?? '';
}

async function loadLiveWorkbook(url: string) {
  const response = await fetch(`${url}&updated=${Date.now()}`, {cache: 'no-store'});
  if (!response.ok) throw new Error(`Google Sheets export returned ${response.status}`);
  const {default: ExcelJS} = await import('exceljs');
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(await response.arrayBuffer());
  return workbook;
}

export async function validateTrackAccessCode(trackSlug: string, submittedCode: string): Promise<CohortKey | null> {
  const expectedTrack = trackSheetNames[trackSlug];
  if (!expectedTrack) return null;
  const sources: Array<{cohort: CohortKey; url: string; sheet: string; trackColumn: number; codeColumn: number}> = [
    {cohort: 'arabic', url: arabicCodesWorkbookUrl, sheet: 'Attendance Logs', trackColumn: 4, codeColumn: 2},
    {cohort: 'original', url: codesWorkbookUrl, sheet: 'All Tracks', trackColumn: 1, codeColumn: 3},
  ];
  let sourceFailures = 0;
  for (const source of sources) {
    try {
      const workbook = await loadLiveWorkbook(source.url);
      const sheet = workbook.getWorksheet(source.sheet);
      if (!sheet) throw new Error(`The ${source.sheet} sheet is missing.`);
      for (let rowNumber = 2; rowNumber <= sheet.actualRowCount; rowNumber += 1) {
        const row = sheet.getRow(rowNumber);
        const track = normalizedCellText(row.getCell(source.trackColumn));
        const code = normalizedCellText(row.getCell(source.codeColumn)).replace(/\.0$/, '');
        if (track === expectedTrack && code === submittedCode.trim()) return source.cohort;
      }
    } catch (error) {
      sourceFailures += 1;
      console.error(`${source.cohort} cohort access-code validation failed.`, error);
    }
  }
  if (sourceFailures === sources.length) {
    const bytes = new TextEncoder().encode(submittedCode.trim());
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    const hash = Array.from(new Uint8Array(digest)).map(value => value.toString(16).padStart(2, '0')).join('');
    return (localAccessCodeHashes[trackSlug] ?? []).includes(hash) ? 'original' : null;
  }
  return null;
}

export async function loadTrackMaterials(trackSlug: string, cohort: CohortKey = 'original'): Promise<TrackMaterial[]> {
  const sheetName = trackSheetNames[trackSlug];
  if (!sheetName) return [];
  try {
    const workbook = await loadLiveWorkbook(cohort === 'arabic' ? arabicMaterialsWorkbookUrl : materialsWorkbookUrl);
    const sheet = workbook.getWorksheet(sheetName) ?? (workbook.worksheets.length === 1 ? workbook.worksheets[0] : undefined);
    if (!sheet) throw new Error(`The ${sheetName} sheet is missing.`);
    let headerRow = 0;
    const columns: Record<string, number> = {};
    for (let rowNumber = 1; rowNumber <= Math.min(sheet.actualRowCount, 20); rowNumber += 1) {
      const row = sheet.getRow(rowNumber);
      row.eachCell((cell: any, columnNumber: number) => {
        const heading = normalizedCellText(cell).replace(/\s+/g, ' ');
        if (['Session Number', 'Session Topic', 'Presentation Link', 'Recording Link'].includes(heading)) {
          columns[heading] = columnNumber;
          headerRow = rowNumber;
        }
      });
      if (columns['Session Topic'] && columns['Presentation Link'] && columns['Recording Link']) break;
    }
    if (!headerRow) throw new Error(`The ${sheetName} material headers are missing.`);
    const rows: TrackMaterial[] = [];
    for (let rowNumber = headerRow + 1; rowNumber <= sheet.actualRowCount; rowNumber += 1) {
      const row = sheet.getRow(rowNumber);
      const title = normalizedCellText(row.getCell(columns['Session Topic']));
      if (!title || /^back\s*up$/i.test(title)) continue;
      const numberText = columns['Session Number'] ? normalizedCellText(row.getCell(columns['Session Number'])).replace(/\.0$/, '') : '';
      const recordingCell = row.getCell(columns['Recording Link']);
      rows.push({
        session: numberText || String(rows.length + 1),
        title,
        slides: cellLink(row.getCell(columns['Presentation Link'])),
        recording: cellLink(recordingCell),
        recordingPasscode: recordingPasscode(recordingCell),
      });
    }
    return rows;
  } catch (error) {
    if (cohort === 'original') {
      console.error('Live materials could not be loaded; using the local fallback.', error);
      return trackMaterials[trackSlug] ?? [];
    }
    console.error('Arabic cohort materials could not be loaded.', error);
    throw error;
  }
}
