function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function principle() {
    let principle = document.querySelector("#principle_amt");
    let principle_lable = document.querySelector("#principle_lable");
    principle_lable.value = principle.value;

    principle.oninput = function k() {
        principle_lable.value = this.value;
    }
}

function rate() {
    let rate_of_interest = document.querySelector("#rate_of_interest");
    let rate_label = document.querySelector("#innerlable");

    rate_label.value = rate_of_interest.value;

    rate_of_interest.oninput = function () {
        rate_label.value = this.value;
    }
}

function year() {
    let year = document.querySelector("#years");
    let years_label = document.querySelector("#years_lable");

    years_label.value = year.value;

    year.oninput = function () {
        years_label.value = this.value;
    }
}

rate();
principle();
year();

function calculateEMI(principal, annualInterestRate, loanTenureInMonths) {
    let monthlyInterestRate = (annualInterestRate / 100) / 12;
    let emiNumerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureInMonths);
    let emiDenominator = Math.pow(1 + monthlyInterestRate, loanTenureInMonths) - 1;
    let emi = emiNumerator / emiDenominator;
    return emi;
}

let calculation = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    let principal = parseFloat(document.querySelector("#principle_lable").value);
    let rate = parseFloat(document.querySelector("#innerlable").value);
    let years = parseFloat(document.querySelector("#years_lable").value);
    let loanTenureInMonths = years * 12;

    const monthlyEMI = calculateEMI(principal, rate, loanTenureInMonths);

    document.querySelector("#home_principle").innerHTML = `Total Loan Taken: ${formatNumber(principal)}`;
    document.querySelector("#home_years").innerHTML = `Total Repayments Years: ${years}`;
    document.querySelector("#home_rate").innerHTML = `Total Interest Rate: ${rate}%`;

    document.querySelector("#ans").innerHTML = `<h3>Monthly Personal Loan EMI: ${formatNumber(monthlyEMI.toFixed(2))}</h3>`;
}

// Event listener
let btn = document.querySelector("#Calculate_btn");
btn.addEventListener('click', calculation);

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
