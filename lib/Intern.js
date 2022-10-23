const Employee=require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        var validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validID=/[0-9]/;

          if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
          if (!(id.match(validID))) {
            throw new Error("Expected parameter 'ID' to be a number string");
          }
          if (!(email.match(validEmail))) {
            throw new Error("not valid email address");
          }
          if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
          }
        super(name,id,email);
        this.name=name;
        this.id=id;
        this.email=email;
        this.school=school;
    }
    getRole(){ //it should be inside of constructor?
        return 'Intern'
    }
    getSchool(){
        return this.school
    }

}

module.exports=Intern;