import {Temporal} from "@js-temporal/polyfill";
import {Student, isStudent, parseStudent} from "./Model/student.model";
import {Assessment, calculateGrade} from "./Model/assessment.model";
import {CourseStatus, describeCourse} from "./Model/course.model";



const student: Student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: Temporal.Now.instant(),
};

//student.id = "STU-999";
console.log(student.gpa?.toFixed(2));
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");


// Legacy dangerous
// function processStudent(data: any) {
// console.log(`GPA: ${data.gpa.toFixed(2)}`); // Crashes if gpa is missing or not a number
// }
function processStudent(raw: unknown) {
if (isStudent(raw)) {
const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
} else {
console.error("Invalid student data received");
}
}

//******************* Step 3 test it*****************

//processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
// Prints: Student Hana GPA: 3.70
//processStudent(42);
// Prints: Invalid student data received
//*************************Exercise 3 part B*********************** 

//console.log(parseStudent({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object
//parseStudent({ id: 42, name: "Test" });
// Throws: TypeError: Expected id to be a string, received number
//*************************Exercise 4***********************
const quiz: Assessment = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10
};

const lab: Assessment = {
    id: "LAB-001",
    kind: "Lab",
    title: "REST API Lab",
    functionalityScore: 85,
    codeQualityScore: 90
};

console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // Prints the grade for the quiz
console.log(`Lab grade: ${calculateGrade(lab)}%`);   // Prints the grade for the lab assignment

//quiz.id = "Quiz-999"; // Error: Cannot assign to 'id' because it is a read-only property.;

//****************Exercise 5******************

//**************Exercise 5 Part B**************/
const webDev: CourseStatus = {
status: "ACTIVE",
enrolledCount: 28,
startDate: Temporal.PlainDate.from("2026-09-01"),
};
console.log(describeCourse(webDev));