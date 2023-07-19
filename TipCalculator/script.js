function calculateTip(){

  const billAmount = parseFloat(document.getElementById("bill-amount").value);
  const tipPerc = parseFloat(document.getElementById("tipPerc").value);
  
  const tipAmount = billAmount * tipPerc/100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);

}