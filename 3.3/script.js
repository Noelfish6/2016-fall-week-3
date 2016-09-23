/**
 * Created by siqi on 9/21/16.
 */
var internalAverage;

function calcAverage(arr){
    var sum = 0;

    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }

    //sum --> the total of all numbers in the array
    internalAverage = sum/arr.length;

    return average;

}

var average = calcAverage([99,76,23]);

/* Write a function such that, given a string and a character
 * the function returns the number of times the character occurs in the string
 */

function numCharInString(str,char){
    var counter = 0;

    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==char){
            counter++;
        }
    }

    return counter;
}