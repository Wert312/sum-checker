'use strict'

const passInput = document.getElementById('pass-number');
const passBtn = document.getElementById('pass-submit');
const passNumSumResult = document.getElementById('passNumSumResult');

const birthDateInput = document.getElementById('birthDate');
const birthDateBtn = document.getElementById('birthDate-submit');
const birthDateSumResult = document.getElementById('birthDateSumResult');

const issueDateInput = document.getElementById('issueDate');
const issueDateBtn = document.getElementById('issueDate-submit');
const issueDateSumResult = document.getElementById('issueDateSumResult');


const numbersOnlyRegex = /^\d+$/;


const checkSumPattern = '731';
function checkNumSum(pattern, value, element) {
    // Initialize result
    let result = 0;
    let printedResult = '';

    // Iterate through each digit of the number
    for (let i = 0; i < value.length; i++) {
        // Get the current digit of the number
        const digit = parseInt(value[i]);

        // Get the corresponding digit from the pattern
        const patternDigit = parseInt(pattern[i % pattern.length]);

        // Multiply the digits and add to result
        result += digit * patternDigit;
        result = result % 10;
        printedResult = `Контрольная цифра: ${result}`;
    }

    element.innerText = printedResult;
}

passInput.addEventListener('input', () => {
    passBtn.disabled = !(passInput.value && numbersOnlyRegex.test(passInput.value));
    if (!passInput.value) passNumSumResult.innerText = '';
})

passBtn.addEventListener('click', () => {
    if (passInput.value && numbersOnlyRegex.test(passInput.value)) {
        checkNumSum(checkSumPattern, passInput.value, passNumSumResult);
    }
})


birthDateInput.addEventListener('input', () => {
    birthDateBtn.disabled = !(birthDateInput.value && numbersOnlyRegex.test(birthDateInput.value));
    if (!birthDateInput.value) birthDateSumResult.innerText = '';
})

birthDateBtn.addEventListener('click', () => {
    if (birthDateInput.value && numbersOnlyRegex.test(birthDateInput.value)) {
        checkNumSum(checkSumPattern, birthDateInput.value, birthDateSumResult);
    }
})


issueDateInput.addEventListener('input', () => {
    issueDateBtn.disabled = !(issueDateInput.value && numbersOnlyRegex.test(issueDateInput.value));
    if (!issueDateInput.value) issueDateSumResult.innerText = '';
})

issueDateBtn.addEventListener('click', () => {
    if (issueDateInput.value && numbersOnlyRegex.test(issueDateInput.value)) {
        checkNumSum(checkSumPattern, issueDateInput.value, issueDateSumResult);
    }
})
