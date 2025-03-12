/*
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// for(let i=0; i<=10; i++){
//     process.stdout.write(i + " ");
// }

for(let i=0; i<10; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write("#" + " ")
    }   
    console.log();
    
}
