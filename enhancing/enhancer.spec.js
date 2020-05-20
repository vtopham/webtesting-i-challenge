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

        it ('does not increase if enhancement is already 20', () => {
            const item = {
                name: "TestItem",
                durability: 100,
                enhancement: 20
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 100,
                enhancement: 20
            };
            const actualOutput = enhancer.succeed(item);
            expect(actualOutput.enhancement).toBe(expectedOutput.enhancement);
         })
    });

    describe('fail function', () => {
        it('decreases durability to 0 if enhancement is less than 15 and durability is 5 or less', () => {
            const item = {
                name: "TestItem",
                durability: 2,
                enhancement: 1
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 0,
                enhancement: 1
            };
            const actualOutput = enhancer.fail(item);
            expect(actualOutput.enhancement).toBe(expectedOutput.enhancement);
        })
    })
});
