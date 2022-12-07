const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {
    let array   // = [false, 42, 0, '', true, null, undefined, 'hello']
    let result  // = [42, true, 'hello']

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, undefined, 'hello']
        result = [42, true, 'hello']
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should working array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove all falsy values from the array', () => {
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(undefined)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(NaN)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(0n)
        expect(_.compact(array)).not.toContain('')
    })
})

describe('Lodash: groupBy', () => {
     test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array itams by Math.floot', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            3: [3.1],
            4: [4.2]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array itams by Math.floot', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})