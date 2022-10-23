
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Initialization", () => {
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Engineer(12, '12', 'rog@gmail.com','rogseo');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'name' is not a string", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Engineer('', '12', 'rog@gmail.com','rogseo');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'ID' is not a string", () => {
            const err = new Error("Expected parameter 'ID' to be a number string");
            const cb = () => new Engineer('Yeon', 'as', 'rog@gmail.com','rogseo');

            expect(cb).toThrow(err);

        });
        it("should throw an error if 'email' is not valid format", () => {
            const err = new Error("not valid email address");
            const cb = () => new Engineer('Yeon', '12', 'rog@','rogseo');

            expect(cb).toThrow(err);

        });
  
    });
    describe("getRole()",()=>{
        it("should get 'Engineer' for the role", () => {
            const engineer= new Engineer('Yeon', '12', 'rog@gmail.com','rogseo');
            const role=engineer.getRole();
            expect(role).toEqual('Engineer');
        });

    });





});