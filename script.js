document.getElementById('calculate').addEventListener('click', calculateEmi);

function calculateEmi() {
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const monthlyInterestRate = parseFloat(document.getElementById('interest-rate').value) / 1200;
  const loanTermMonths = parseFloat(document.getElementById('loan-term').value);
  
  

  const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
  const totalPayment = monthlyPayment * loanTermMonths;
  
  const result = document.getElementById('result');
  result.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}<br>Total Payment: ${totalPayment.toFixed(2)}`;
}
