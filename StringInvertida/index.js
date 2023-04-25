document.querySelector("input[type='button']").addEventListener("click", inverter);

function inverter() {
    let strArr = [];

    const str = document.querySelector("#stringInv").value;
    for(let char in str) {
        strArr.push(str[str.length - char - 1]);
    }
    let finalStr = strArr.join('');
    document.querySelector("span").textContent = `"${str}" é "${finalStr}" ao contrário`;
}