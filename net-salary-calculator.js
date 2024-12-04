	
function calculatePAYE(monthlySalary) {
    // PAYE calculation
    if (monthlySalary <= 24000) {
      return monthlySalary * 0.1;
    } else if (monthlySalary <= 32333) {
      return 2400 + (monthlySalary - 24000) * 0.25;
    }
    // Add more tax brackets as needed
    return 0; // Default return for cases not handled
  }

  function calculateNHIF(monthlySalary) {
    // NHIF deduction
    if (monthlySalary < 6000) {
      return 150;
    } else if (monthlySalary < 8000) {
      return 300;
    } else if (monthlySalary < 12000) {
      return 400;
    } else if (monthlySalary < 15000) {
      return 500;
    } else if (monthlySalary < 20000) {
      return 600;
    } else if (monthlySalary < 24000) {
      return 750;
    }
    return 0; // Default return for cases not handled
  }

  function calculateNSSF(monthlySalary) {
    // NSSF deduction
    const tierILimit = 7000;
    const tierIILimit = 35000;
    const tierIContribution = 0.06 * Math.min(monthlySalary, tierILimit);
    const tierIIContribution = 0.06 * Math.max(0, Math.min(monthlySalary - tierILimit, tierIILimit - tierILimit));
    return tierIContribution + tierIIContribution;
  }

  function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const payee = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const netSalary = grossSalary - (payee + nhif + nssf);

    return {
      grossSalary: grossSalary.toFixed(2),
      payee: payee.toFixed(2),
      nhif: nhif.toFixed(2),
      nssf: nssf.toFixed(2),
      netSalary: netSalary.toFixed(2),
    };
  }

  function getUserInputAndCalculate() {
    const basicSalary = parseFloat(prompt("Enter Basic Salary (Ksh): "));
    if (isNaN(basicSalary) || basicSalary < 0) {
      alert("Please enter a valid positive number for Basic Salary.");
      return;
    }

    const benefits = parseFloat(prompt("Enter Benefits (Ksh): "));
    if (isNaN(benefits) || benefits < 0) {
      alert("Please enter a valid positive number for Benefits.");
      return;
    }

    // Calculate and display the results
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    alert('Gross Salary: Ksh ${salaryDetails.grossSalary}');
    alert('PAYE: Ksh ${salaryDetails.payee}');
    alert('NHIF: Ksh ${salaryDetails.nhif}');
    alert('NSSF: Ksh ${salaryDetails.nssf}');
    alert('Net Salary: Ksh ${salaryDetails.netSalary}');
  }
  

