

## Challenges

### 1. **Student Grade Generator**
This function prompts the user to input student marks (between 0 and 100), then determines and displays the corresponding grade based on predefined ranges:

- `A` for marks above 79
- `B` for marks between 60 and 79
- `C` for marks between 50 and 59
- `D` for marks between 40 and 49
- `E` for marks below 40





### 2. **Speed Detector**
This program takes the speed of a car as input and checks whether the driver is speeding. If the speed is above 70, the program calculates demerit points based on each 5 km/h above the limit. If the points exceed 12, the program suspends the driver's license.






### 3. **Net Salary Calculator**
This program calculates an individual’s net salary by considering basic salary, benefits, PAYE tax, NHIF, and NSSF deductions. The logic for tax rates, NHIF, and NSSF deductions is simplified for demonstration purposes.


## How to Use

1. Clone the repository to your local machine.
2. Open any of the solution files (e.g., `student-grade-generator.js`).
3. Open the HTML file (if provided) or run the JS file in your browser's console.
4. Follow the prompts and view the results in the browser.


This repository contains solutions to simple JavaScript toy problems. One of the problems solved here is the **Speed Detector** challenge.

## Problem Description

### Speed Detector

This program takes the speed of a car as input and checks if the driver is over the speed limit. The program behaves as follows:

1. **If the car speed is below or equal to 70 km/h**, the program displays: `Ok`.
2. **If the car is speeding (above 70 km/h)**:
   - For every 5 km/h above the limit, the driver accumulates 1 demerit point.
   - The program displays the demerit points if the driver is speeding.
   - **If the total demerit points exceed 12**, the driver's license is suspended.

### Example Flow:

- **Input 1:** Car speed = 80 km/h  
  **Output 1:** Points: 2

- **Input 2:** Car speed = 100 km/h  
  **Output 2:** Points: 6

- **Input 3:** Car speed = 130 km/h  
  **Output 3:** Your license registration is suspended.

## How to Use

1. Open the `speed-detector.js` file.
2. Open the file in your browser's developer console, or integrate the script into an HTML file.
3. When prompted, enter the car's speed.
4. View the results as alerts in your browser.

## Contributing

Feel free to fork this repository and contribute additional solutions or improvements!
## Problem Description

### Net Salary Calculator

The program calculates the **gross salary** by adding the basic salary and benefits, then deducts:
1. **PAYE (tax)** based on salary brackets.
2. **NHIF** deductions based on salary.
3. **NSSF** deductions at a rate of 6% of the salary, capped at KES 200.

The program then outputs:
- **Gross Salary**
- **Total Deductions**
- **Net Salary**

### Example Flow:

1. **Input:**  
   - Basic Salary: 50,000  
   - Benefits: 10,000

2. **Output:**
   - Gross Salary: 60,000
   - Total Deductions: 3,850
   - Net Salary: 56,150

### Salary Calculation Breakdown:
- **PAYE (Tax):** Calculated based on salary brackets.
- **NHIF:** Deduction based on salary.
- **NSSF:** 6% of salary, capped at 200.

## How to Use

1. Open the `net-salary-calculator.js` file.
2. Open the file in your browser's developer console, or integrate the script into an HTML file.
3. When prompted, enter your basic salary and benefits.
4. View the results in the console.

## Example:

```javascript
let basicSalary = 50000;
let benefits = 10000;
const salaryDetails = netSalary(basicSalary, benefits);

