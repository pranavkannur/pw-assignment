// Function to grade students based on their marks
function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
        return "B Grade";
    } else if (marks >= 50 && marks <= 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Sample student marks
let studentMarks = [95, 85, 65, 45];

// Grading each student
for (let marks of studentMarks) {
    console.log(`Student with ${marks} marks receives: ${gradeStudent(marks)}`);
}
