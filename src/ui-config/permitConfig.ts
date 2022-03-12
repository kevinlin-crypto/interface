import { ChainId } from '@aave/contract-helpers';

export const permitByChainAndToken: {
  [chainId: number]: Record<string, boolean>;
} = {
  [ChainId.mainnet]: {},
  [ChainId.ropsten]: {},
  [ChainId.rinkeby]: {
    '0xA3a8697C4C6A7D9ccF9238cb567b122d53012ac9': true,
    '0x58Cd851c28dF05Edc7F018B533C0257DE57673f7': true,
    '0x8017B7FC5473d05e67E617072fB237D24Add550b': true,
    '0xFfaDa869df79320120dfFd6eeE8cF664Dba43146': true,
    '0xa982Aef90A37675C0E321e3e2f3aDC959fB89351': true,
    '0x8D01d567AFdE8601C6BA784CF0da7Da12b3BFd66': true,
    '0xaE4A267987f640AE1b0Dd757854Af00651cf2EC7': true,
    '0xF1bE881Ee7034ebC0CD47E1af1bA94EC30DF3583': true,
  },
  [ChainId.kovan]: {},
  [ChainId.arbitrum_one]: {
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1': true,
    '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4': true,
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': true,
    '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f': true,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': true,
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9': true,
    '0xba5DdD1f9d7F570dc94a51479a000E3BCE967196': true,
    '0xD22a58f79e9481D1a88e00c343885A588b34b68B': true,
  },
  [ChainId.arbitrum_rinkeby]: {
    '0x5eb35Fe1f1074Ae8d6D23Bf771705846Cc812c09': true,
    '0x200c2386A02cbA50563b7b64615B43Ab1874a06e': true,
    '0x403052a80d33A79Bef4645c0D8Ff00FA03f424c7': true,
    '0x774382EF196781400a335AF0c4219eEd684ED713': true,
    '0x1F7dC0B961950c69584d0F9cE290A918124d32CD': true,
    '0x7c53810c756C636cEF076c92D5D7C04555694E76': true,
    '0x31f909C64E93f764dc90d78DCBB38a6A6D1D48dE': true,
    '0xaB874B1862938704Cf44Fb81E33c59B67c6BeC07': true,
  },
  [ChainId.fantom]: {
    '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E': true,
    '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8': true,
    '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75': true,
    '0x321162Cd933E2Be498Cd2267a90534A804051b11': true,
    '0x74b23882a30290451A17c44f4F05243b6b58C76d': true,
    '0x049d68029688eAbF473097a2fC38ef61633A3C7A': true,
    '0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B': true,
    '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC': true,
    '0x1E4F97b9f9F913c46F1632781732927B9019C68b': true,
  },
  [ChainId.fantom_testnet]: {
    '0x2a6202B83Bd2562d7460F91E9298abC27a2F0a95': true,
    '0xAC1a9503D1438B56BAa99939D44555FC2dC286Fc': true,
    '0xc469ff24046779DE9B61Be7b5DF91dbFfdF1AE02': true,
    '0x42Dc50EB0d35A62eac61f4E4Bc81875db9F9366e': true,
    '0x484b87Aa284f51e71F15Eba1aEb06dFD202D5511': true,
    '0x06f0790c687A1bED6186ce3624EDD9806edf9F4E': true,
    '0x1b901d3C9D4ce153326BEeC60e0D4A2e8a9e3cE3': true,
    '0xd0404A349A76CD2a4B7AB322B9a6C993dbC3A7E7': true,
    '0x2aF63215417F90bd45608115452d86D0a1bEAE5E': true,
    '0xF7475b635EbE06d9C5178CC40D50856Fa98C7332': true,
  },
  [ChainId.polygon]: {
    '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063': true,
    '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c': true,
  },
  [ChainId.mumbai]: {
    '0x0AB1917A0cf92cdcf7F7b637EaC3A46BBBE41409': true,
    '0xFCadBDefd30E11258559Ba239C8a5A8A8D28CB00': true,
    '0xE3981f4840843D67aF50026d34DA0f7e56A02D69': true,
    '0x3e4b51076d7e9B844B92F8c6377087f9cf8C8696': true,
    '0x9A753f0F7886C9fbF63cF59D0D4423C5eFaCE95B': true,
    '0x56e0507A53Ee252947a1E55D84Dc4032F914DD98': true,
    '0x302567472401C7c7B50ee7eb3418c375D8E3F728': true,
    '0x8AaF462990dD5CC574c94C8266208996426A47e7': true,
    '0xBaaCc99123133851Ba2D6d34952aa08CBDf5A4E4': true,
    '0xD9E7e5dd6e122dDE11244e14A60f38AbA93097f2': true,
    '0xdDc3C9B8614092e6188A86450c8D597509893E20': true,
    '0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2': true,
    '0x21C561e551638401b937b03fE5a0a0652B99B7DD': true,
    '0x85E44420b6137bbc75a85CAB5c9A3371af976FdE': true,
    '0xd575d4047f8c667E064a4ad433D04E25187F40BB': true,
    '0xb685400156cF3CBE8725958DeAA61436727A30c3': true,
  },
  [ChainId.harmony]: {},
  [ChainId.harmony_testnet]: {},
  [ChainId.avalanche]: {
    '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E': true,
    '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7': true,
  },
  [ChainId.fuji]: {
    '0x407287b03D1167593AF113d32093942be13A535f': true,
    '0xFc7215C9498Fc12b22Bc0ed335871Db4315f03d3': true,
    '0x73b4C0C45bfB90FC44D9013FA213eF2C2d908D0A': true,
    '0x3E937B4881CBd500d05EeDAB7BA203f2b7B3f74f': true,
    '0x09C85Ef96e93f0ae892561052B48AE9DB29F2458': true,
    '0x28A8E6e41F84e62284970E4bc0867cEe2AAd0DA4': true,
    '0xD90db1ca5A6e9873BCD9B0279AE038272b656728': true,
    '0xCcbBaf8D40a5C34bf1c836e8dD33c7B7646706C5': true,
  },
  [ChainId.optimism]: {
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1': true,
    '0x76FB31fb4af56892A25e32cFC43De717950c9278': true,
  },
  [ChainId.optimism_kovan]: {
    '0xb532118d86765Eb544958e47df77bb8bDDe2F096': true,
    '0xd6B095c27bDf158C462AaB8Cb947BdA9351C0e1d': true,
    '0xFbBCcCCA95b5F676D8f044Ec75e7eA5899280efF': true,
    '0x6883D765088f90bAE62048dE45f2202D72985B01': true,
    '0x9cCc44Aa7C301b6655ec9891BdaD20fa6eb2b552': true,
    '0xeE6b5ad81c7d88a632b24Bcdac055D6f5F469495': true,
    '0xfF5b900f020d663719EEE1731C21778632e6C424': true,
    '0x46e213C62d4734C64986879af00eEc5128395776': true,
  },
};
