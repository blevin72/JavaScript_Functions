// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if(userName == null || age == null){
        console.log("Not enough data to determine if user can drive.")
    }
    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y){
    //declartions
    let zeroes = "The point lies on both the x and y axis."
    let xAxis = "The point lies on the X Axis"
    let yAxis = "The point lies on the Y Axis"
    let Q1 = "The point lies in quadrant one."
    let Q2 = "The point lies in quadrant two."
    let Q3 = "The point lies in quadrant three."
    let Q4 = "The point lies in quadrant four."
    
    //if-else statement
    if(x == 0 && y == 0){
        console.log(zeroes)
    }
    else if(x > 0 || x < 0 && y == 0){
        console.log(xAxis)
    }
    else if(y > 0 || y < 0 && x == 0){
        console.log(yAxis)
    }
    else if(x > 0 && y > 0){
        console.log(Q1)
    }
    else if(x < 0 && y > 0){
        console.log(Q2)
    }
    else if(x < 0 && y < 0){
        console.log(Q3)
    }
    else{
        console.log(Q4)
    }
}

// Exercise 4 Section
function typeOfTriangle(x, y, z){
    if(x + y < z && x + z < y && y + z < x){
        console.log("Invalid Triangle")
    }
    else if(x == y == z){
        console.log("Equilateral Triangle")
    }
    else if(x == y != z || x == z != y || y == z != x){
        console.log("Isocoles Triangle")
    }
    else if(x != y != z){
        console.log("Scalene Triangle")
    }  
    else{
        console.log("Error")
    }  
}

// Exercise 5 Section

function dataUsage(planLimit, day, usage){
    let suggAvgDailyUsage = (planLimit/30)
    let actAvgDailyUsage = (usage/day)
    let reaminingLimit = (planLimit - usage)
    let daysRemaining = (30 - day)
    let projectedTotalUsage = (actAvgDailyUsage * 30)
    let projectedExceed = (projectedTotalUsage - planLimit)
    let adjustedSuggAveDailyUsage = (reaminingLimit/daysRemaining)

    console.log(`You have ${daysRemaining} days remaining.`)
    if(actAvgDailyUsage > suggAvgDailyUsage){
        console.log(`You are EXCEEDING your average daily use ${suggAvgDailyUsage} GB/day`);
        console.log(`At this rate, you will exceed your data plan by ${projectedExceed} GB.`);
        console.log(`To stay below your data plan, use no more than ${adjustedSuggAveDailyUsage} GB/day`);
    }
    else if(actAvgDailyUsage < suggAvgDailyUsage){
        console.log(`Great job! You are on pace to go under your ${planLimit} GB plan limit.`);
        console.log(`You can increase your daily usage to ${adjustedSuggAveDailyUsage} GB/day to meet your plan limit.`);
    }else {
        console.log(`Great job! You are on pace to meet your ${planLimit} GB plan limit.`)
        console.log(`Maintain your ${suggAvgDailyUsage} GB/day.`)
    }
}
dataUsage(300, 15, 275);