const copyText = document.getElementById('copy-text');

const initialValue = localStorage.getItem('copy-value');
console.log(initialValue);

if (initialValue) {
    copyText.value = initialValue;
}

const copyButton = document.getElementById('copy-button');

copyButton.onclick = function() {
    const value = copyText.value;

    navigator.clipboard.writeText(value);
    localStorage.setItem('copy-value', value);
}
