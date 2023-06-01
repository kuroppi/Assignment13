function bankAccount(ownerName) {
    let balance = 0;
    const owner = ownerName;

    return {
        withdrawal: function (withdrawalAmount) {
            if (balance >= withdrawalAmount) {
                balance -= withdrawalAmount;
                displayAccountInfo();
            } else {
                console.log("Insufficient funds");
            }
        },
        deposit: function (depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
                displayAccountInfo();
            } else {
                console.log("Invalid deposit amount");
            }
        },
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return owner;
        }
    };
}

let account;
function enterName() {
    const name = prompt("Enter your name:");
    if (name) {
        account = bankAccount(name);
        displayAccountInfo();
    }
}

function makeDeposit() {
    if (!account) {
        console.log("Please enter your name first");
        return;
    }

    const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
    if (!isNaN(depositAmount)) {
        account.deposit(depositAmount);
    } else {
        console.log("Invalid deposit amount");
    }
}

function makeWithdrawal() {
    if (!account) {
        console.log("Please enter your name first");
        return;
    }

    const withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));
    if (!isNaN(withdrawalAmount)) {
        account.withdrawal(withdrawalAmount);
    } else {
        console.log("Invalid withdrawal amount");
    }
}

function displayAccountInfo() {
    const accountInfo = document.getElementById("accountInfo");
    accountInfo.innerHTML = `Owner: ${account.getOwnerName()}<br>Balance: $${account.getBalance().toFixed(2)}`;
}
