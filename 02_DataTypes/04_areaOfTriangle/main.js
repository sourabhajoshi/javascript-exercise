function calculateArea(){
    let base = prompt("Enter a base value : ")
    let height = prompt("Enter a height value : ")

    base = parseFloat(base)
    height = parseFloat(height)

    let area = 0.5*height*base

    document.getElementById('result').innerText = `The area of triangle is ${area}`;
}