// Event Handler For Login Button 
let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function () {
    let loginArea = document.getElementById('loginArea')
    loginArea.style.display = 'none'
    let bankArea = document.getElementById('bank')
    bankArea.style.display = 'block'
})

// Event Handler For Deposit Button 
let depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {
    let depositNumber = getInputNumber('depositAmount')
    updateSpanText('currentDeposit', depositNumber)
    updateSpanText('currentBalance', depositNumber)
    document.getElementById('depositAmount').value = ''
})

// Event Handler For Withdraw Button 
let withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click', function () {
    let withdrawNumber = getInputNumber('withdrawAmount')
    updateSpanText('currentWithdraw', withdrawNumber)
    updateSpanText('currentBalance', -1 * withdrawNumber)
    // Multiply by Negative 1 because increasing Withdraw decreases Balance
    document.getElementById('withdrawAmount').value = ''
})

// Universal Functions 
function getInputNumber(id) {
    let amount = document.getElementById(id).value
    let toNumber = parseFloat(amount) // Converting String to Number with parseFloat method.
    return toNumber
}

function updateSpanText(id, addedNumber) {
    let current = document.getElementById(id).innerText
    let toNumbers = parseFloat(current)
    let total = addedNumber + toNumbers
    document.getElementById(id).innerText = total
}
