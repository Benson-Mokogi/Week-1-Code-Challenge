//create a variable for an the button element
const btn2 = document.getElementById("btn2");

//create a variable that listens to actions on the button element
btn2.addEventListener("click", carSpeed);

// function for calculating the speed of the car
function carSpeed(){

    //variable for storing the value of the element content
    const speed = document.getElementById("speedid").value;
    let points;
    let comments;
    
    if (speed < 70){
        console.log ("Ok");
        points = "Speed is ok";
        comments = "No penalty"
        
    }
    else { 
        let token = (speed-70)/5;
        console.log(token);
        if (token <=12){
            console.log("License suspended!");
            points = token;
            comments = "Speed is ok"

        }

        else if (token > 12){
            console.log("License suspended!");
            points = token;
            comments = "License suspended!"
            
        }
        
    }

    // use the .innerHTML method to update the contents of element ID output2.
    document.getElementById("output2").innerHTML = points;

    // use the .innerHTML method to update the contents of element whose ID is output3.
    document.getElementById("output3").innerHTML = comments;
}
