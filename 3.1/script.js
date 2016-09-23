/**
 * Created by siqi on 9/21/16.
 */

console.log("Exercise 3.1 running...");

/* Create an object representing a student with the following properties
 * Name (string)
 * ID (string)
 * Program (??)
 * Number of courses taken (??)
 * Enrollment status (??)
 * Classes currently taken (??)
 */

var student1 = {
    name:"Lucy",
    ID:"12345",
    program:"IDV",
    numOfCourses:3,
    enrollment:"enrolled",
    classes:['thesis','studio','ARTG5330']
};

var student2 = {
    name:"Molly",
    ID:"12346",
    program:"IDV",
    numOfCourses:4,
    enrollment:"enrolled"
};

var students = [student1, student2];



/* Now think about how classes might be represented as a Javascript object */