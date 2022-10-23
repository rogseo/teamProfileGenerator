const Employee=require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        var validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validNum=/[0-9]/;

          if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
          if (!(id.match(validNum))) {
            throw new Error("Expected parameter 'ID' to be a number string");
          }
          if (!(email.match(validEmail))) {
            throw new Error("not valid email address");
          }
          if (!(officeNumber.match(validNum))) {
            throw new Error("Expected parameter 'ID' to be a number string");
          }

        super(name,id,email);
        this.name=name;
        this.id=id;
        this.email=email;
        this.officeNumber=officeNumber;
    }
    getRole(){ //it should be inside of constructor?
        return 'Manager'
    }

}

module.exports=Manager;