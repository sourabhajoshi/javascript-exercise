
const doSomething = callBack =>{
    setTimeout(()=>{
        let skills = ["html", "css", "JacsScript"]
        callBack("There is no error", skills);
    }, 3000)
}


const callBack = (err, result) =>{
    if(err){
        return console.log("Error block : ", err); ////There is no error
    }
    return console.log("Result block : ", result)
}

doSomething(callBack); //Error block :  There is no error