// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = month =>{
    let mon = month.toLowerCase();
    if(["jun", "jul", "aug"].includes(mon)){
        return "Spring";
    }else if(["sep", "oct", "nov"].includes(mon)){
        return "Winter";
    }else if(["dec", "jan", "feb"].includes(mon)){
        return "Autumn";
    }else{
        return "Summar";
    }
}

console.log(checkSeason("Aug"));
