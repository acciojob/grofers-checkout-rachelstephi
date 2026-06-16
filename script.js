const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const getSum = () => {
       const priceElements = document.querySelectorAll('.price');
    let total = 0;

    
    priceElements.forEach(element => {
       const price = parseInt(element.textContent, 10) || 0;
        total += price;
    });

   
    let totalRow = document.getElementById("ans");
    if (totalRow) {
        totalRow.remove();
    }

  
    const table = document.querySelector("table");
    totalRow = document.createElement("tr");
    totalRow.setAttribute("id", "ans");

    const labelCell = document.createElement("td");
    labelCell.textContent = "Total";
    labelCell.style.fontWeight = "bold";
	
    const valueCell = document.createElement("td");
    valueCell.textContent = total;
    valueCell.style.fontWeight = "bold";

    totalRow.appendChild(labelCell);
    totalRow.appendChild(valueCell);
    table.appendChild(totalRow);
};
  
};

getSumBtn.addEventListener("click", getSum);

