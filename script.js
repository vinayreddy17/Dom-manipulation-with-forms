 const form = document.getElementById('form');
 console.log(form);
const tableBody = document.querySelector('#myTable tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.getElementById('gender').value;
  const foodOptions = document.querySelectorAll('input[name="food"]:checked');
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;


  if (foodOptions.length < 2) {
    alert('Please select at least two food options.');
    return;
  }
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${Array.from(foodOptions).map(option => option.value).join(', ')}</td>
    <td>${state}</td>
    <td>${country}</td>
  `;

  
  tableBody.appendChild(newRow);

  
  form.reset();
});
