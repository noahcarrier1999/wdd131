let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

export function renderTransaction(tx) {
  const expenseContainer = document.querySelector("#expense-container");

  const expenseDiv = document.createElement("div");
  expenseDiv.classList.add("expense");
  expenseDiv.setAttribute("data-id", tx.id);

  expenseDiv.innerHTML = `
    <h3>${tx.name}</h3>
    <h3>$${tx.amount.toFixed(2)}</h3>
    <button class="delete-btn">X</button>
  `;

  const deleteBtn = expenseDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTransaction(tx.id);
  });

  expenseContainer.appendChild(expenseDiv);
}

export function deleteTransaction(id) {
  transactions = transactions.filter((tx) => tx.id !== id);
  saveTransactions();
  refreshUI();
}

export function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

export function updateTotal() {
  const totalDisplay = document.querySelector("#total-display");
  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

export function loadTransactions() {
  transactions.forEach(renderTransaction);
  updateTotal();
}

export function refreshUI() {
  const expenseContainer = document.querySelector("#expense-container");
  expenseContainer.innerHTML = "";
  loadTransactions();
}

export function addTransaction(transaction) {
  transactions.push(transaction);
  saveTransactions();
}