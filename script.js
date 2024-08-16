function computeLoan() {
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const years = document.querySelector('#years').value;
  
    const months = years * 12;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2);
  
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('#payment').innerHTML = `Monthly Payment = ₹${payment}`;
  }