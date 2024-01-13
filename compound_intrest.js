function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function principle() {
    let principle = document.querySelector("#principle_amt");
    let principle_lable = document.querySelector("#principle_lable");
    principle_lable.value = principle.value;
  
    principle.oninput = function () {
      principle_lable.value = this.value;
    }
  }
  
  function rate() {
    let rate_of_interest = document.querySelector("#rate_of_intrest");
    let rate_lable = document.querySelector("#innerlable");
  
    rate_lable.value = rate_of_interest.value;
  
    rate_of_interest.oninput = function () {
      rate_lable.value = this.value;
    }
  }
  
  function year() {
    let year = document.querySelector("#years");
    let years_lable = document.querySelector("#years_lable");
  
    years_lable.value = year.value;
  
    year.oninput = function () {
      years_lable.value = this.value;
    }
  }
  
  rate();
  principle();
  year();
  
  let calculation = () => {
    let j = parseFloat(document.querySelector("#innerlable").value);
    let monthly_rate = j / (12 * 100);
    let monthly_rate_one_add = monthly_rate + 1;
  
    let years = parseFloat(document.querySelector("#years_lable").value);
    let year_in_month = years * 12;
    let powerResult = Math.pow(monthly_rate_one_add, year_in_month);
  
    let principle = parseFloat(document.querySelector("#principle_lable").value);
  
    const monthlyInterestAmount = principle * monthly_rate;
    const emiNumerator = monthlyInterestAmount * powerResult;
    const emiDenominator = powerResult - 1;
    const emi = emiNumerator / emiDenominator;
  
    document.querySelector("#home_principle").innerHTML = `Total Loan Taken: ${formatNumber(principle)}`;
    document.querySelector("#home_years").innerHTML = `Total Repayment Years: ${years}`;
    document.querySelector("#home_rate").innerHTML = `Total Interest Rate: ${j}%`;
    
    // Calculate and display compound interest
    const compoundingFrequency = 12;
    const compoundInterest = calculateCompoundInterest(principle, j, years, compoundingFrequency);
  
    
      document.querySelector("#ans").innerHTML = `<h3>Campound Intrest: ${compoundInterest}</h3>`;
}

function calculateCompoundInterest(principal, rate, time, compoundingFrequency) {
    const compoundInterest = principal * Math.pow(1 + rate / (compoundingFrequency * 100), compoundingFrequency * time) - principal;
    return compoundInterest;
}

let btn = document.querySelector("#Calculate_btn");

btn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    calculation();
  });
  