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
        it('decreases durability to 0 if durability is 5 or less (enhancement < 15)', () => {
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
            expect(actualOutput.durability).toBe(expectedOutput.durability);
        })

        it('decreases durability properly if durability is greater than 5 (enhancement < 15)', () => {
            const item = {
                name: "TestItem",
                durability: 6,
                enhancement: 1
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 1,
                enhancement: 1
            };
            const actualOutput = enhancer.fail(item);
            expect(actualOutput.durability).toBe(expectedOutput.durability);
        })

        it('decreases durability properly if durability is less than 10 (enhancement < 15)', () => {
            const item = {
                name: "TestItem",
                durability: 9,
                enhancement: 15
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 0,
                enhancement: 15
            };
            const actualOutput = enhancer.fail(item);
            expect(actualOutput.durability).toBe(expectedOutput.durability);
        })

        it('decreases durability properly if durability is less than 10 (enhancement < 15)', () => {
            const item = {
                name: "TestItem",
                durability: 11,
                enhancement: 15
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 1,
                enhancement: 15
            };
            const actualOutput = enhancer.fail(item);
            expect(actualOutput.durability).toBe(expectedOutput.durability);
        })

        it('does not affect enhancement if it is already 16 or less', () => {
            const item = {
                name: "TestItem",
                durability: 11,
                enhancement: 16
            };
            const expectedOutput = {
                name: "TestItem",
                durability: 1,
                enhancement: 16
            };
            const actualOutput = enhancer.fail(item);
            expect(actualOutput.enhancement).toBe(expectedOutput.enhancement);
        })
    })
});
