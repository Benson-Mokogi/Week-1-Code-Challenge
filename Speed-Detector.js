function carSpeed(speed){
    const fine = "Fine is applicable";
    if (speed <= 70){
        console.log ("Ok");
        return "Ok";
    }
    else { 
        let token = (speed-70)/5;
        console.log(fine)
        console.log(`Points: ${token}`);
        if (token > 12){
            console.log("License suspended");
        }
        return token;
    }
}
carSpeed(161)