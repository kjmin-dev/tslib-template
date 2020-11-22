function sayHello(name?: string): string {
    return `Hello, ${name || 'Unknown'} !`
}

export default {
    sayHello,
}
