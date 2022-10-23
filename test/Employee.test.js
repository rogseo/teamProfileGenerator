// const { it } = require("node:test");
// const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Employee(12, '12', 'rog@gmail.com');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Employee('', '12', 'rog@gmail.com');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'ID' is not a string", () => {
            const err = new Error("Expected parameter 'ID' to be a number string");
            const cb = () => new Employee('Yeon', 'as', 'rog@gmail.com');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'email' is not valid format", () => {
            const err = new Error("not valid email address");
            const cb = () => new Employee('Yeon', '12', 'rog@');

            expect(cb).toThrow(err);

        });
    });
    describe("getRole()",()=>{
        it("should get 'Manager' for the role", () => {
            const employee= new Employee('Yeon', '12', 'rog@gmail.com');
            const role=employee.getRole();
            expect(role).toEqual('Employee');
        });

    });





});

