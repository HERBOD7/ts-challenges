
import {decodedValue} from './resistor-color-duo'
describe('Resistor Color Duo', () => {
    it('black and red', () => {
        expect(decodedValue(['black', 'red'])).toEqual(2)
    })

    it('white and brown', () => {
        expect(decodedValue(['white', 'brown'])).toEqual(91)
    })

    it('orange and yellow and red', () => {
        expect(decodedValue(['orange', 'yellow', 'red'])).toEqual(34)
    })
})