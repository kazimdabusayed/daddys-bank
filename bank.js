document.getElementById('btn-deposit').addEventListener('click', function(){
    //
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    console.log(newDepositAmount);
    //for non-input, use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDeposit = depositTotalElement.innerText;

    const currentDepositTotal = previousDeposit + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    //clear the deposit field
    depositField.value = '';
    
})