const fns = require('./functions');
const prod = require('./products');

describe('testing filtering', () => {
    test('filter defaults', () => {
        expect(prod.length).toBe(10)
        expect(Array.isArray(prod)).toBeTruthy()
        expect(fns.max).toEqual(0)
        expect(fns.min).toBe(0)
        expect(fns.gear).toBe('all')
        expect(fns.bikeType).toEqual('all')
    })
    test('filtering products', () => {
        fns.max = 300
        const products = prod.filter(fns.handleFiltering)
        console.log(products);
        expect(products.length).toEqual(9)
    })
})