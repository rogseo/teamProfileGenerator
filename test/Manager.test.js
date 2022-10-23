
const Manager = require("../lib/Manager");


describe("Manager class", () => {
    describe("Initialization", () => {
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Manager(12, '12', 'rog@gmail.com','1234');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Manager('', '12', 'rog@gmail.com','1234');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'ID' is not a string", () => {
            const err = new Error("Expected parameter 'ID' to be a number string");
            const cb = () => new Manager('Yeon', 'as', 'rog@gmail.com','1234');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'email' is not valid format", () => {
            const err = new Error("not valid email address");
            const cb = () => new Manager('Yeon', '12', 'rog@','1234');

            expect(cb).toThrow(err);

        });
  
    });
    describe("getRole()",()=>{
        it("should get 'Manager' for the role", () => {
            const manager= new Manager('Yeon', '12', 'rog@gmail.com','1234');
            const role=manager.getRole();
            expect(role).toEqual('Manager');
        });

    });
});