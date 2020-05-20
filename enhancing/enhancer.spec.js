const enhancer = require('./enhancer.js');
// test away!

describe('enhancer module', () => {
    describe('succeed function', () => {
        it('increases if enhancement is below 20', () => {
            const item = {
                name: "TestItem",
                durability: 100,
                enhancement: 18
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 100,
                enhancement: 19
            };
            const actualOutput = enhancer.succeed(item);
            expect(actualOutput.enhancement).toBe(expectedOutput.enhancement);
        });
    });
});
