// main.js
import {
    addTransaction,
    renderTransaction,
    updateTotal,
    loadTransactions,
  } from "./ui.js";
  
  const submitButton = document.querySelector(".submit-button");
  const expenseNameInput = document.querySelector("#expense-name");
  const expenseAmountInput = document.querySelector("#expense-amount");
  
  window.onload = () => {
    loadTransactions();
  };
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleClick();
  });
  
  function handleClick() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
  
    if (!name || isNaN(amount) || amount < 0) {
      alert("Please enter a valid name and amount.");
      return;
    }
  
    const transaction = {
      id: Date.now(),
      name,
      amount,
    };
  
    addTransaction(transaction);
    renderTransaction(transaction);
    updateTotal();
  
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  }