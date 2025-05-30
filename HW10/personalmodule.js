function greetUser(username){
    const hour = new Date().getHours();
    let greeting;

    if(hour < 12){
        greeting = `Good morning `
    } else if(hour > 12 && hour < 18){
        greeting = `Good afternoon `
    } else {
        greeting = `Good evening `
    }

    return `${greeting} ${username}`;
}

module.exports = {
    greetUser
};