function User(username, isLoggedin, logginCount)
{
    this.username = username,
    this.isLoggedin = isLoggedin,
    this.logginCount =logginCount
}

const userOne = new  User("Aryan Mishra",true,11);
console.log(userOne);
