const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Initialization", () => {
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = (err) => new Intern(12, '12', 'rog@gmail.com','UT');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Intern('', '12', 'rog@gmail.com','UT');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'ID' is not a string", () => {
            const err = new Error("Expected parameter 'ID' to be a number string");
            const cb = () => new Intern('Yeon', 'as', 'rog@gmail.com','UT');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'email' is not valid format", () => {
            const err = new Error("not valid email address");
            const cb = () => new Intern('Yeon', '12', 'rog@','UT');

            expect(cb).toThrow(err);

        });
  
    });
    describe("getRole()",()=>{
        it("should get 'Intern' for the role", () => {
            const intern= new Intern('Yeon', '12', 'rog@gmail.com','UT');
            const role=intern.getRole();
            expect(role).toEqual('Intern');
        });

    });

});