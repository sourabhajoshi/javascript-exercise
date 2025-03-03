function calculatePerimeter(){
    let a = prompt("Enter a : ")
    let b = prompt("Enter b : ")
    let c = prompt("Enter c : ")

    let perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c);

    document.getElementById("result").innerHTML = `Perimeter of triangle is : ${perimeter}`
}