
function formatNumber(number) {

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function principle() {
    let principle = document.querySelector("#principle_amt");
    let principle_lable = document.querySelector("#principle_lable");
    principle_lable.value = principle.value
  
    principle.oninput = function k() {
      principle_lable.value = this.value
  
    }
  
  
  }
  
  
  function rate() {
    let rate_of_intrest = document.querySelector("#rate_of_intrest")
    let rate_lable = document.querySelector("#innerlable")
  
    rate_lable.value = rate_of_intrest.value
  
    rate_of_intrest.oninput = function () {
      rate_lable.value = this.value
    }
  
  
  }
  
  function year() {
    let year = document.querySelector("#years")
    let years_lable = document.querySelector("#years_lable")
  
    years_lable.value = year.value
  
    year.oninput = function () {
      years_lable.value = this.value
    }
  }
  rate()
  
  principle()
  year()
  
  

function calculateMonthlyInterest(principal, annualInterestRate, loanTenureInMonths) {
    let monthlyInterestRate = (annualInterestRate / 100) / 12;
    let monthlyInterest = principal * monthlyInterestRate * loanTenureInMonths;
    return monthlyInterest;
}

let calculation = () => {
    let principle = parseFloat(document.querySelector("#principle_lable").value);
    let rate = parseFloat(document.querySelector("#innerlable").value);
    let years = parseFloat(document.querySelector("#years_lable").value);
    let loanTenureInMonths = years * 12;

    const monthlyInterest = calculateMonthlyInterest(principle, rate, loanTenureInMonths);

    document.querySelector("#home_principle").innerHTML = `Total Loan Taken: ${formatNumber(principle)}`;
    document.querySelector("#home_years").innerHTML = `Total Repayments Years: ${years}`;
    document.querySelector("#home_rate").innerHTML = `Total Interest Rate: ${rate}%`;

    document.querySelector("#ans").innerHTML = `<h3>Monthly Gold Loan Interest Payable: ${formatNumber(monthlyInterest.toFixed(2))}</h3>`;
}

// Rest of your code remains unchanged

// Event listener
let btn = document.querySelector("#Calculate_btn");
btn.addEventListener('click', (event) => {
    event.preventDefault();
    calculation();
});

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
