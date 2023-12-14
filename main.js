const scroll = new LocomotiveScroll({
  el: document.querySelector('.scroll'),
  smooth: true
});

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

const sr =scrollreval({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})


    function addToCart(carId, carModel) {
      const hoursInput = document.getElementById(`hours${carId.charAt(carId.length - 1)}`);
      const hours = parseInt(hoursInput.value);
      const pricePerHour = parseInt(document.getElementById(carId).dataset.pricePerHour);

      const cartItems = document.getElementById('cart-items');
      const cartItem = document.createElement('li');
      cartItem.textContent = `${carModel} - ${hours} hours: $${pricePerHour * hours}`;
      cartItems.appendChild(cartItem);

      updateTotalAmount();
    }

    function updateTotalAmount() {
      const cartItems = document.getElementById('cart-items').getElementsByTagName('li');
      let totalAmount = 0;

      for (let i = 0; i < cartItems.length; i++) {
        const itemText = cartItems[i].textContent;
        const itemPrice = parseInt(itemText.split('$')[1]);
        totalAmount += itemPrice;
      }

      document.getElementById('total-amount').textContent = totalAmount;
    }