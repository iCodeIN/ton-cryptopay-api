import { expect } from "chai";
import { GetMe } from "../../src/methods/GetMe"

describe('methods', function() {
    it('getMe', function() {
        let obj = new GetMe()
        expect(obj.getParams()).deep.equal({})
        expect(obj.getSource("https://test").toString()).equal("https://test/getMe")
    })
})
