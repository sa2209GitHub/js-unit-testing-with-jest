const { default: axios } = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax echo', () => {
    test('should return value using async/await syntax', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })

    test ('should return value with promise', () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    })

    
    test('should catch errors using async/await syntax', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })

    test('should catch errors with promise', () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})

describe('Ajax: GET', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [{
            id: 1,
            title: 'Todo 1',
            completed: false
        }]
        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})