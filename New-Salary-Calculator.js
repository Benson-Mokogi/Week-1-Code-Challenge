function newSalaryCalculator(grossPay){
    //paye calculator
    if (grossPay <= 24000){
        PAYE = grossPay*10/100;
    }
    else if(grossPay > 24000 && grossPay <= 32333){
        PAYE = grossPay*25/100;
    }
    else {
        PAYE = grossPay*30/100;
    }
    console.log(`PAYE = ${PAYE}`);

    
    //NHIF calculator
    
    if (grossPay < 6000) {

        deduction = 150;
        } 
        else if (grossPay >= 6000 && grossPay < 8000) {
        deduction = 300;
        } else if (grossPay >= 8000 && grossPay < 12000) {
        deduction = 400;
        } else if (grossPay >= 12000 && grossPay < 15000) {
        deduction = 500;
        } else if (grossPay >= 15000 && grossPay < 20000) {
        deduction = 600;
        } else if (grossPay >= 20000 && grossPay < 25000) {
        deduction = 750;
        } else if (grossPay >= 25000 && grossPay < 30000) {
        deduction = 850;
        } else if (grossPay >= 30000 && grossPay < 35000) {
        deduction = 900;
        } else if (grossPay >= 35000 && grossPay < 40000) {
        deduction = 950;
        } else if (grossPay >= 40000 && grossPay < 45000) {
        deduction = 1000;
        } else if (grossPay >= 45000 && grossPay < 50000) {
        deduction = 1100;
        } else if (grossPay >= 50000 && grossPay < 60000) {
        deduction = 1200;
        } else if (grossPay >= 60000 && grossPay < 70000) {
        deduction = 1300;
        } else if (grossPay >= 70000 && grossPay < 80000) {
        deduction = 1400;
        } else if (grossPay >= 80000 && grossPay < 90000) {
        deduction = 1500;
        } else if (grossPay >= 90000 && grossPay < 100000) {
        deduction = 1600;
        } else {
        deduction = 1700;
        }
    console.log(`NHIF = ${deduction}`);

    //NSSF calculator
    if (grossPay){
        NSSF = grossPay*6/100;
    }
    console.log(`NSSF = ${NSSF}`)
    
    //New pay
    const netPay = grossPay - NSSF - deduction - PAYE;
    console.log(`Net Salary = ${netPay}`);
}
newSalaryCalculator(grossPay = prompt("Enter your monthly salary: "))