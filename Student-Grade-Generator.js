
//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
function studentGradeCalculator(studentMarks){
    const checkNumber = isNaN(studentMarks);
    if (checkNumber === false){
    if (studentMarks > 100 || studentMarks < 0){
        console.log ("Invalid marks");
        return ("Invalid marks");
    }
    else if (studentMarks >=0 && studentMarks < 40){
        console.log("E");
        return "E";
    }
    else if (studentMarks >= 40 && studentMarks < 50){
        console.log("D");
        return "D";
    }
    else if (studentMarks >=50 && studentMarks < 60){
        console.log("C");
        return "C";
    }
    else if (studentMarks >=60 && studentMarks < 80){
        console.log("B");
        return "B";
    }else (studentMarks > 79);{
        console.log("A")
        return "A";
        
    }
    }
    else {
        console.log("Not a number");
    }

}
studentGradeCalculator(studentMarks = prompt("Enter the subject marks: " ))