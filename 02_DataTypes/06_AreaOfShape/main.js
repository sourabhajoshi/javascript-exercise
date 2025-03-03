//  perimeter of rectangle (perimeter = 2 x (length + width))
function perimeterOfRectangle(){
    let length = prompt("Enter length : ")
    let width = prompt("Enter width : ")

    let perimeter = 2 * (parseFloat(length) + parseFloat(width))

    document.getElementById('perOfRect').innerHTML = `Perimeter of rectangle ${perimeter}`
}

// area of a circle (area = pi x r x r)
function areaOfCircle(){
    let r = prompt("Enter radius of circle : ")

    let areaOfCircle = Math.PI * parseFloat(r) * parseFloat(r);

    document.getElementById('areaOfCir').innerHTML = `Area of circle is :  ${areaOfCircle}`
}