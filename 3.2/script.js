/**
 * Created by siqi on 9/21/16.
 */

/* Simulation */

var numOfSimulations = 500000;
var sum = 0;
var bucket1 = 0,
    bucket2 = 0,
    bucket3 = 0,
    bucket4 = 0;

/*
    step 1: construct a for loop, iterating over it for x number of times
    each time, run Math.random()
    each run of Math.random() will generate a number between 0 and 1
 */
for(var i=0; i<numOfSimulations; i=i+1){

    var result = Math.random();

    sum = sum + result;
    //console.log("iteration " + i + ", sum is " + sum);

    if(result <= .25){
        //do something
        bucket1 = bucket1 + 1;
    }else if(result <= .5){
        //do something
        bucket2 = bucket2 + 1;
    }else if(result <= .75){
        //do something
        bucket3 ++;
    }else{
        //do something
        bucket4 += 1;
    }


}

console.log("Average is " + sum/numOfSimulations);
console.log("Proportion of values between 0 and .25 is " + bucket1/numOfSimulations*100 + "%");
console.log("Proportion of values between 0.25 and .5 is " + bucket2/numOfSimulations*100 + "%");
console.log("Proportion of values between 0.5 and .75 is " + bucket3/numOfSimulations*100 + "%");
console.log("Proportion of values between .75 and 1 is " + bucket4/numOfSimulations*100 + "%");



/* inside the for loop, run Math.random();
    add the result to a sum variable
 */

/*
    each time we run Math.random(), use
 */