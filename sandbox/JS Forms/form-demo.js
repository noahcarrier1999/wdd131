// form-demo.js
function validateForm(event) {
    
    const theForm = event.target;
   
    const errors = [];
    
    let isValid = true;
  
    const fullName =document.querySelector("fullname").value.trim()
    const creditCardNumber = document.querySelector("#card-number").value.trim()
    const paymentMethod = document.querySelector("#payment").value;

    if(fullName !== "Bob"){
        error.push("Only Bob is allowed to submit the form")
        isValid=false
    }

    if(paymentMethod === "credt-card" && creditCardNumber !== "1234123412341234"){
        error.push("Only 123412341234 is allowed")
    }



    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector("#checkoutForm");
    const paymentMethod = document.querySelector("#payment").value
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector("#creditCardNumberContainer");
    const paypalContainer = document.querySelector("#paypalUsernameContainer");
  
    const creditCardInput = document.querySelector("#card-number")
    const paypalInput = document.querySelector("#paypal")
    // Hide payment containers by adding the '.hide' class to each of them
    creditCardContainer.classList.add("hide")
    paypalContainer.classList.add("hide")
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
    creditCardInput.required = false;
    paypalInput.required = false;
  
    // Show the container based on the selected payment method, and add the required attribute back.
    if(paymentMethod === "credit-card"){
        creditCardContainer.classList.remove("hide");
        creditCardInput.required = true;
    } else if (paymentMethod=== "paypal"){
        paypalContainer.classList.remove("hide")
        paypalInput.required = true;
    }
  
  }
  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  // attach a change event handler to the paymentMethod input

  document.querySelector("#payment").addEventListener("change", togglePaymentDetails)

  document.querySelector("checkoutForm").addEventListener("submit",validateForm)
  
  // attach a submit event handler to the form