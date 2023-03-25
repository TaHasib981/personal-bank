document.getElementById("btn-withdraw").addEventListener('click', function () {
    const withdrawInput = document.getElementById('wdr-input')
    const newWithdraw = parseFloat(withdrawInput.value)

    const totalWithdraw = document.getElementById('totalWithdraw')
    const currentTotalWithdraw = parseFloat(totalWithdraw.innerText)
    // totalWithdraw.innerText = currentTotalWithdraw + newWithdraw

    const totalBalance = document.getElementById('total-balance')
    const currentTotalBalance = parseFloat(totalBalance.innerText)
    if (withdrawInput.value == "") {
        alert('enter ammount')
    } else {
        if (currentTotalBalance >= newWithdraw) {
            totalWithdraw.innerText = currentTotalWithdraw + newWithdraw

            const newTotalBalance = currentTotalBalance - newWithdraw
            totalBalance.innerText = newTotalBalance
        } else {
            alert('sorry!! unsufficient balance')
        }
    }
    // console.log(newTotalBalance)
    withdrawInput.value = ''
})