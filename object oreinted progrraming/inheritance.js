class User {
    constructor( username , email , password){
        this.username = username ;
        this. email = email;
        this.password = password;
    }
}

class Teacher extends User {
    constructor(username, email ,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course is addes by  ${ this.username}`);
    }

}


const chai = new Teacher(" Aryan mishra ", "aryanmishra@gmail.com", "1234");

chai.addcourse()