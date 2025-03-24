
const doSomething = callBack =>{
    setTimeout(()=>{
        let skills = ["html", "css", "JacsScript"]
        callBack(false, skills);
    }, 3000)
}


const callBack = (err, result) => {
    if(err){
        return console.log(`Error occured and my skills are : ${result}`);
    }
    return console.log("No Error", result)
}

doSomething(callBack); //No Error [ 'html', 'css', 'JacsScript' ]