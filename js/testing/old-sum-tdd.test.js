import { sum-tdd } from "./sum-tdd.js" ;

const paramsMustBeNumbersError = new Error(
    "Height and width need to be numbers"
);

describe("Test cases for a sum area function", () => {
    it("should caculate the sum of two positive numbers", ()=> {
        expect(sum(2,3).toBe(5));
        expect(sum(100,200).toBe(300));
    });

    it("should throw an error when or more argument are not a number", ()=> {
        expect(() => {
            sum ("hi", "hello");
        }).toThrow(paramsMustBeNumbersError);
      

    });

    
});

//JANET
// import { sum } from './sum-tdd.js'

// describe('sum tests', () => {
//     it('Should throw an error if one or more parameters are not a number', () => {
//         expect(() => {
//             sum(1, "test");
//         }).toThrow();

//         expect(() => {
//             sum("4242", "test");
//         }).toThrow();

//         expect(() => {
//             sum(1, "test", 2, 3, 4, 5, 6, 7, 8);
//         }).toThrow();
//     });

//     it('Should throw an error if no parameters are passed', () => {
//         expect(() => {
//             sum();
//         }).toThrow();
//     });

//     it('Should sum up any number of inputs (inputs >= 1)', () => {
//         expect(sum(1, 2)).toBe(3);
//         expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
//         expect(sum(100)).toBe(100);
//     });
// })
//JANET
