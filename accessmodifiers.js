"use strict";
class Student {
    // PUBLIC: Anyone can access
    studentName;
    // PRIVATE: Only this class can access
    marks;
    password;
    // PROTECTED: Accessible inside child classes
    attendance = 90;
    constructor(name, marks, password) {
        this.studentName = name;
        this.marks = marks;
        this.password = password;
    }
    // PUBLIC METHOD
    viewResult(pass) {
        if (this.verifyPassword(pass)) {
            console.log(`${this.studentName}'s Marks: ${this.marks}`);
        }
        else {
            console.log("Incorrect Password!");
        }
    }
    // PUBLIC METHOD
    updateMarks(newMarks, pass) {
        if (this.verifyPassword(pass)) {
            this.marks = newMarks;
            console.log("Marks Updated Successfully.");
        }
        else {
            console.log("Access Denied!");
        }
    }
    // PRIVATE METHOD
    verifyPassword(pass) {
        return this.password === pass;
    }
}
// Child Class
class SportsStudent extends Student {
    addAttendance() {
        // Protected member can be accessed
        this.attendance += 5;
        console.log(`Updated Attendance: ${this.attendance}%`);
        // ERROR
        // this.marks = 95;   // Cannot access private member
    }
}
const student1 = new Student("Rahul", 82, "abc123");
console.log(`Student Name: ${student1.studentName}`);
// Using Public Methods
student1.viewResult("abc123");
student1.updateMarks(90, "abc123");
student1.viewResult("abc123");
// Child Class Object
const sportsStudent = new SportsStudent("Anjali", 88, "pass123");
sportsStudent.addAttendance();
