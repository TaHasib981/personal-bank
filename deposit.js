
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('depositInput')
    const depositAmount = parseFloat(depositField.value)

    console.log(parseFloat(depositField.value))
    // || depositField.value != 'number' 
    if (parseFloat(depositField.value) <= 0 || depositField.value == "") {
        alert('enter valid amount')
    } else {
       
        const depositTotalElement = document.getElementById('deposit-total')
        const previoiusDepositString = depositTotalElement.innerText
        const currentDepositTotal = parseFloat(previoiusDepositString)
        // if (depositField.value = -1) {
        //     alert('enter amount ')
        // } else {
        const newDepositTotal = currentDepositTotal + depositAmount
        depositTotalElement.innerText = newDepositTotal

        const totalBalance = document.getElementById('total-balance')
        const totalBalanceString = totalBalance.innerText
        const currentTotalBalance = parseFloat(totalBalanceString)
        totalBalance.innerText = currentTotalBalance + depositAmount
        // console.log(currentTotalBalance)
        depositField.value = ''
    }

    depositField.value = ''

})