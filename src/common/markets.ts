import { CurrencyPair, TokenSymbol } from '../util/types';

export const availableMarkets: CurrencyPair[] = [
    {
        base: TokenSymbol.King,
        quote: TokenSymbol.Xbc,
    },
    {
        base: TokenSymbol.Link,
        quote: TokenSymbol.Xbc,
    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Xbc,
    },
    {
        base: TokenSymbol.Xbc,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Dgd,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Link,
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
    {
        base: TokenSymbol.Link,
        quote: TokenSymbol.Weth,
    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Weth,
    },
];
