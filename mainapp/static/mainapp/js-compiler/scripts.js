document.getElementById('menu-toggle').addEventListener('click', function() {
    var submenu = document.getElementById('submenu');
    submenu.classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    var submenu = document.getElementById('submenu');
    submenu.classList.remove('active');
});



// loading Lottie animations
document.addEventListener('DOMContentLoaded', function() {
  const lottieContainers = document.querySelectorAll('.product-lotties div');

  lottieContainers.forEach(container => {
      const path = container.getAttribute('data-path');

      lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: path
      });
  });
});



// function upadateCaseNumber(product, price, isIncreasing){
//     const caseInput = document.getElementById(product + '-number');
//     let caseNumber = caseInput.value;
//             if(isIncreasing){
//                 caseNumber = parseInt(caseNumber) + 1;
//             }
            
//     else if(caseNumber > 0){
//            caseNumber = parseInt(caseNumber) - 1;
//          }
        
//         caseInput.value = caseNumber;
//     // update case total 
//     const caseTotal = document.getElementById(product + '-total');
//     caseTotal.innerText = caseNumber * price;
//     calculateTotal();
//     }


//     function getInputvalue(product){
//         const productInput = document.getElementById(product + '-number');
//         const productNumber = parseInt(productInput.value);
//         return productNumber;
//     }
//     function calculateTotal(){
//         const phoneTotal = getInputvalue('phone') * 1219;
//         const caseTotal = getInputvalue('case') * 59;
//         const subTotal = phoneTotal + caseTotal;
//         const tax = subTotal / 10;
//         const totalPrice = subTotal + tax;

//         // update on the html 
//         document.getElementById('sub-total').innerText = subTotal;
//         document.getElementById('tax-amount').innerText = tax;
//         document.getElementById('total-price').innerText = totalPrice;

//     }





// document.getElementById('case-plus').addEventListener('click',function(){
//         const caseInput = document.getElementById('case-number');
//         const caseNumber = caseInput.value;
//         caseInput.value = parseInt(caseNumber) + 1;
//    upadateCaseNumber('case', 59 ,true);
// });

// document.getElementById('case-minus').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//    if(caseInput.value > 1){
//         caseInput.value = parseInt(caseNumber) - 1;
//    }
// upadateCaseNumber('case', 59, false);
// });

// // phone prcie update using add event linstner 
// document.getElementById('phone-plus').addEventListener('click',function(){
//     upadateCaseNumber('phone',1219, true);
// });


// document.getElementById('phone-minus').addEventListener('click',function(){
//     upadateCaseNumber('phone',1219 , false);
// });


const phoneNumberInput = document.getElementById('phone-number');
const phoneMinusButton = document.getElementById('phone-minus');
const phonePlusButton = document.getElementById('phone-plus');
const phoneTotalSpan = document.getElementById('phone-total');
const subTotalSpan = document.getElementById('sub-total');
const taxAmountSpan = document.getElementById('tax-amount');
const totalPriceSpan = document.getElementById('total-price');
const removeItemImg = document.querySelector('.remove-item');

// Define constants
const PRODUCT_PRICE = 1219;
const TAX_RATE = 0.08; // 8% tax rate

// Initialize variables
let quantity = 1;
let subtotal = 0;
let taxAmount = 0;
let totalPrice = 0;

// Update quantity and prices
function updatePrices() {
  quantity = parseInt(phoneNumberInput.value);
  subtotal = quantity * PRODUCT_PRICE;
  taxAmount = subtotal * TAX_RATE;
  totalPrice = subtotal + taxAmount;

  phoneTotalSpan.textContent = subtotal.toFixed(2);
  subTotalSpan.textContent = subtotal.toFixed(2);
  taxAmountSpan.textContent = taxAmount.toFixed(2);
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Event listeners
phoneMinusButton.addEventListener('click', () => {
  quantity = parseInt(phoneNumberInput.value);
  if (quantity > 1) {
    phoneNumberInput.value = quantity - 1;
    updatePrices();
  }
});

phonePlusButton.addEventListener('click', () => {
  quantity = parseInt(phoneNumberInput.value);
  phoneNumberInput.value = quantity + 1;
  updatePrices();
});

phoneNumberInput.addEventListener('input', updatePrices);

removeItemImg.addEventListener('click', () => {
  // Remove item logic (e.g., update cart, refresh page)
  console.log('Remove item clicked');
});

// Initialize prices
updatePrices();