# Student Grade Generator
This program is designed to calculate a student's grade based on their marks in a given subject. The grades are assigned as follows:

    A: 80 - 100
    B: 60 - 79
    C: 50 - 59
    D: 40 - 49
    E: 0 - 39

## Use
To use this program, simply run the studentGradeCalculator function and enter the student's marks when prompted. The function will return the student's grade.
The studentGradeCalculator function takes one argument, studentMarks, which represents the student's marks in the subject. If the studentMarks argument is not a number, the program will return "Not a number". If the studentMarks argument is outside the range of 0 - 100, the program will return "Invalid marks". If the studentMarks argument is within the range of 0 - 100, the program will return the student's grade based on the grade ranges mentioned above.

# Speed Detector
1. The carSpeed() function is a program that checks the speed of a car and determines if a fine is applicable, as well as the number of points to be deducted from the driver's license.
Usage

## Use
To use the function, call carSpeed() and pass in the car's speed as an argument. The function returns one of three values:

If the speed is less than or equal to 70, the function will return "Ok" indicating that the speed is within the limit.
If the speed is greater than 70, the function will return the number of points to be deducted from the driver's license, as well as the message "Fine is applicable".
If the number of points to be deducted is greater than 12, the function will also print the message "License suspended".
 
# Net Salary Calculator


This is a salary calculator that calculates an employee's net salary after deductions for PAYE, NHIF, and NSSF.
How to Use

Run the code in a JavaScript environment.
When prompted, enter your monthly gross pay.
The code will calculate your PAYE, NHIF, NSSF, and net salary and display them in the console.

## Use

The code works as follows:
It takes in the employee's monthly gross pay as input.
It calculates the PAYE based on the gross pay using the following table:

Gross Pay (Ksh)	Deduction (Ksh)
Up to 24,000	10%
24,001 to 32,333	25%
32,334 and above	30%

It calculates the NHIF based on the gross pay using the following table:

# Gross Pay (Ksh)	Deduction (Ksh)
    Up to 5,999	150
    6,000 to 7,999	300
    8,000 to 11,999	400
    12,000 to 14,999	500
    15,000 to 19,999	600
    20,000 to 24,999	750
    25,000 to 29,999	850
    30,000 to 34,999	900
    35,000 to 39,999	950
    40,000 to 44,999	1,000
    45,000 to 49,999	1,100
    50,000 to 59,999	1,200
    60,000 to 69,999	1,300
    70,000 to 79,999	1,400
    80,000 to 89,999	1,500
    90,000 to 99,999	1,600
    100,000 and above	1,700

It calculates the NSSF based on the gross pay at a rate of 6%.
It calculates the net salary by subtracting the PAYE, NHIF, and NSSF from the gross pay.
