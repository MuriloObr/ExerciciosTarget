document.querySelector("input[type='button']").addEventListener("click", calcular);

function calcular() {
    console.clear();
    let last = 0;
    let curr = 1;
    const num = Number(document.querySelector("#fibonacciInput").value);
    console.log("calculando fibonacci de :", num);
    
    for (let res = 1; res <= num; res = curr + last) {
        curr = last;
        last = res;
        console.log(curr, last, res);
    }

    const SpanRes = document.querySelector("span");

    if (last === num) {
        SpanRes.textContent = `${num} é um número de fibonacci`;
    } else {
        SpanRes.textContent = `${num} não é um número de fibonacci`;
    }
}