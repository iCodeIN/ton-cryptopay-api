import { expect } from "chai";
import { GetExchangeRates } from "../../src/methods/GetExchangeRates"

describe('methods', function() {
    it('getExchangeRates', function() {
        let obj = new GetExchangeRates()
        expect(obj.getParams()).deep.equal({})
        expect(obj.getSource("https://test").toString()).equal("https://test/getExchangeRates")
    })
})
