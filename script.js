document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Hide the form
  document.getElementById('myForm').style.display = 'none';

  // Show the divs section
  document.getElementById('divs').style.display = 'block';

  // Call your calculation function (you can modify it as needed)
  Calculate();
});

function Calculate(){
  let tint = document.getElementById("tint").value;
  let detail = document.getElementById("detail").value;
  let price = parseInt(tint) + parseInt(detail);
  let tax = parseFloat((.0485*price).toFixed(2));
  let total = price+tax;
  document.getElementById("price").textContent = `Price: $${price}`
  document.getElementById("tax").textContent = `Tax: $${tax}`
  document.getElementById("total").textContent = `Total: $${total}`
}