import { CurrencyPair, TokenSymbol } from '../util/types';

export const availableMarkets: CurrencyPair[] = [
    {
        base: TokenSymbol.Xbc,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Dgd,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Weth,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Xbc,
        quote: TokenSymbol.Weth,
    },
//    {
//        base: TokenSymbol.Dai,
//        quote: TokenSymbol.Weth,
//    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Weth,
    },
];
