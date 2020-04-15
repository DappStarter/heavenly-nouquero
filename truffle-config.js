require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember social install merry flock tortoise'; 
let testAccounts = [
"0x1a13f64a854bec6f9ec3ac80f2c0e40f6a7707236b4026032ea75efaf8e03860",
"0xb5cd563428a3dbde8fd06b5806e4204aa134ecf441597446a65660d34876ddc0",
"0x69c59e1a990964dd2abde92b0d5827ec3cd6d2e3c4c11a6491fe338a7b03c72f",
"0x1c614fc0ebd4c91cd64d0a09962c5230e634ee0dfa558a83bd0aca0211fcccef",
"0x6bc2b2468a11d2ce9b40f789834e0cd3e893928c24bbcff46ae6ada758036d5d",
"0x02a946634380b4707fd5b529b1cccb0080a51c52758ea3070352ee24ae5d283d",
"0xf7e471b09cfc40f68af27b9b96a677493c147385dd1e3679c8ec957d4f7919ca",
"0xf22d07b9c0fd450dfb6c88a075c1dd1f3e9266616314a815d98301758ef48963",
"0xb553b0143ada38045fdc16feb13a067555e01fc255c4898d0be74e40fafb3649",
"0x501bf3427ea0f848180ead9e9c63f26386074f1f695706cf8b0ea57868b0c037"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
