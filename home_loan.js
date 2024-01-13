
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


let calculation = () => {
  let j = document.querySelector("#innerlable").value
  let monthly_rate = j / (12 * 100);
  let monthly_rate_one_add = monthly_rate + 1

  let years = document.querySelector("#years_lable").value
  let year_in_month = years * 12;
  let powerResult = Math.pow(monthly_rate_one_add, year_in_month)

  let principle = document.querySelector("#principle_lable").value


  const monthlyInterestAmount = principle * monthly_rate;


  const emiNumerator = monthlyInterestAmount * powerResult;


  const emiDenominator = powerResult - 1;


  const emi = Number.parseInt(emiNumerator / emiDenominator)


  let totalintrest = emi * year_in_month - principle
  document.querySelector("#home_intrest").innerHTML = `Total Intrest of Loan:-  ${totalintrest}`
  document.querySelector("#home_principle").innerHTML = `Total Loan Taken:-  ${principle}`

  document.querySelector("#home_years").innerHTML = `Total Repements Years:-  ${years}`



  //same nir
  let ans = document.querySelector("#ans")
  ans.innerHTML = `<h3>Monthly EMI :- ${emi}</h3>`


  document.querySelector("#home_rate").innerHTML = `Total Intrest Rate:-  ${document.querySelector("#rate_of_intrest").value}`


}

let btn = document.querySelector("#Calculate_btn");

btn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior
  calculation();
});
