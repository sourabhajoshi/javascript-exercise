function compareAges(){
    const MYAGE = 25;
    
    let yourAge = prompt("Enter your age : ")
    yourAge = parseInt(yourAge);

    let ageDiff = Math.abs(yourAge - MYAGE);

    let feeback = MYAGE > yourAge ? `You are ${ageDiff} years younger than me.` : `You are ${ageDiff} years older than me.`
    document.getElementById("compareAges").innerHTML = feeback
}
