import { TokenSymbol } from '../util/types';

export interface TokenMetaData {
    addresses: { [key: number]: string };
    symbol: TokenSymbol;
    decimals: number;
    name: string;
    primaryColor: string;
}

export const KNOWN_TOKENS_META_DATA: TokenMetaData[] = [
    {
        decimals: 8,
        symbol: TokenSymbol.Zxb,
        name: '0xBitcoin',
        primaryColor: '#ff7423',
        addresses: {
            1: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
            4: '0x0000000000000000000000000000000000000000',
            42: '0x0000000000000000000000000000000000000000',
            50: '0x0000000000000000000000000000000000000000',
        },
    },

    {
        decimals: 18,
        symbol: TokenSymbol.Dai,
        name: 'DAI Stablecoin',
        primaryColor: '#ffce6b',
        addresses: {
            1: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
            4: '0x0000000000000000000000000000000000000000',
            42: '0x0000000000000000000000000000000000000000',
            50: '0x0000000000000000000000000000000000000000',
        },
    },
    {
        decimals: 9,
        symbol: TokenSymbol.Dgd,
        name: 'DigixDao',
        primaryColor: '#E1AA3E',
        addresses: {
            1: '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A',
            4: '0xc40a46ca4bc8e6057ed571e39cf400f3f935e4d5',
            42: '0xA4f468c9c692eb6B4b8b06270dAe7A2CfeedcDe9',
            50: '0xcdb594a32b1cc3479d8746279712c39d18a07fc0',
        },
    },

	    {
        decimals: 18,
        symbol: TokenSymbol.King,
        name: 'King Token',
        primaryColor: '#cfb3e2',
        addresses: {
            1: '0xc46321EfE8883D22D81eD65CB4F0766e1004129d',
            4: '0x0000000000000000000000000000000000000000',
            42: '0x0000000000000000000000000000000000000000',
            50: '0x0000000000000000000000000000000000000000',
        },
    },

	    {
        decimals: 18,
        symbol: TokenSymbol.Link,
        name: 'Chainlink',
        primaryColor: '#6997e0',
        addresses: {
            1: '0x514910771af9ca656af840dff83e8264ecf986ca',
            4: '0x0000000000000000000000000000000000000000',
            42: '0x0000000000000000000000000000000000000000',
            50: '0x0000000000000000000000000000000000000000',
        },
    },
	    {
        decimals: 8,
        symbol: TokenSymbol.Lira,
        name: 'Lira Cash',
        primaryColor: '#6997e0',
        addresses: {
            1: '0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb',
            4: '0x0000000000000000000000000000000000000000',
            42: '0x0000000000000000000000000000000000000000',
            50: '0x0000000000000000000000000000000000000000',
        },
    },
	{
        decimals: 18,
        symbol: TokenSymbol.Weth,
        name: 'Wrapped Ether',
        primaryColor: '#3333ff',
        addresses: {
            1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            4: '0xc778417e063141139fce010982780140aa0cd5ab',
            42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
            50: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
        },
    },
    {
        decimals: 18,
        symbol: TokenSymbol.Zrx,
        name: '0x Token',
        primaryColor: '#333333',
        addresses: {
            1: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
            4: '0x8080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
            42: '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa',
            50: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
        },
    },

];
