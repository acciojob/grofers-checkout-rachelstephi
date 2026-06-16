const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    const table = document.querySelector("table");

    const tr = document.createElement("tr");
    tr.id = "ans";

    const td = document.createElement("td");
    td.colSpan = "2";
    td.textContent = total;

    tr.appendChild(td);
    table.appendChild(tr);
};



getSumBtn.addEventListener("click", getSum);

