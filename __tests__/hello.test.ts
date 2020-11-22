import { hello } from '@/index'

describe('hello', () => {
    it('sayHello working', () => {
        const unknown = hello.sayHello()
        const world = hello.sayHello('World')
        expect(unknown).toEqual('Hello, Unknown !')
        expect(world).toEqual('Hello, World !')
    })
})
