class Employee {
    constructor(name,id,email){
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

        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }

}

module.exports=Employee;