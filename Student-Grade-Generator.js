
//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
function studentGradeCalculator(studentMarks){
    if (studentMarks > 100 || studentMarks < 0){
        console.log ("Invalid marks");
        return ("Invalid marks");
    }
    else if (studentMarks >=0 && studentMarks < 40){
        console.log("E");
        return "E";
    }
    else if (studentMarks >=40 && studentMarks <= 49){
        console.log("D");
        return "D";
    }
    else if (studentMarks >=50 && studentMarks <= 59){
        console.log("C");
        return "C";
    }
    else if (studentMarks >=60 && studentMarks <= 79){
        console.log("B");
        return "B";
    }else (studentMarks > 79);{
        console.log("A")
        return "A";
        
    }

}
studentGradeCalculator(-1)