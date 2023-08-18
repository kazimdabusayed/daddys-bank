document.getElementById('btn-deposit').addEventListener('click', function(){
    //
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //for non-input, use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositString = depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    //
    const currentDepositTotal = previousDeposit + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    //clear the deposit field
    depositField.value = '';

})

//Withdraw part
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('widthraw-field');
    const newWithdrawAmountSrting = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountSrting);
    // step-3
    const withdrawTotalElement = document.getElementById('widthraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotat = parseFloat(previousWithdrawTotalString);
    // step-4
    const currentWithdrawTotal = previousWithdrawTotat + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step-
    withdrawField.value = '';
})