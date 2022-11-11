require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stool deny meadow uncle hard light army gate'; 
let testAccounts = [
"0x2af40fc8f5618b8a7761146bb24e4f271c882bdb829f28004dbb053cadf45250",
"0xf325eba0a992c6589ea6782db55d82ff99a049d5f36caac41fa4cba5322bacad",
"0x9fed23f3cce80c3aa03179d7b298209d79e3bb332338636b4720b8a7cf11bb9b",
"0x3c651e2db7d76dd6a2b2dfa8717224d7fb85d3751fae61f8a67ed2b61a3fd9ea",
"0xb3e038e517b752d08dc366777c6fc695ec49fc3d7dd7abd12bdeeafefa701d18",
"0x5d6f69f9be804d7f4aa36f22d4e42560cf7ea3b3ea6de05a638e06f891e65276",
"0x69e267e07685ac8578181bfc7c20c3ebec681f05e280cb7f0e7cb26930b37dc7",
"0xaa1155c6b1a13107b1b3d15e1117cf3999eccc5a4033be769f1631184db83363",
"0x40e5aba91accec80bc1e7388573c153992950c627c4fd66a6cabea39ba59692c",
"0x19e95254d89421911f50b69027c7018b83a4dac8f8d89a9127d658825da8fc9d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


