const btn1 = document.getElementById("btn1");

//A function is going to be invoked
btn1.addEventListener("click", studentGradeCalculator);

// create a function that calculates the correct grade for given marks.
function studentGradeCalculator(){
    const studentMarks = document.getElementById("gradeid").value;
    let marks;
    
    const checkNumber = isNaN(studentMarks);
    if (checkNumber === false){
        if (studentMarks > 100 || studentMarks < 0){
            console.log ("Invalid marks");
            marks = ("Invalid marks");
        }
        else if (studentMarks >=0 && studentMarks < 40){
            console.log("E");
            marks = "E";
        }
        else if (studentMarks >= 40 && studentMarks < 50){
            console.log("D");
            marks = "D";
        }
        else if (studentMarks >=50 && studentMarks < 60){
            console.log("C");
            marks = "C";
        }
        else if (studentMarks >=60 && studentMarks < 80){
            console.log("B");
            marks = "B";
        }
        else if (studentMarks > 79){
            console.log("A");
            marks = "A";
            
        }
    }
    else {
        console.log("Not a number");
        marks = "Not a number";
    }
   
    // Pass the output from the function to be displayed in html.
    document.getElementById("output1").innerHTML = marks;

}