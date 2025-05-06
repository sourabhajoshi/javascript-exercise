// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speedOfObject = (distance, time) => {
    if(time == 0){
        return "Time can not be zero";
    }
    return distance/time;
};

console.log(`Speed of object is : ${speedOfObject(50, 8)}`);
