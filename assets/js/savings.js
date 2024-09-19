const form = document.getElementById('savings-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const amount = document.getElementById('amount').value;
  const type = document.getElementById('type').value;

  // Send a POST request to the backend to add the savings
  fetch('/savings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date, amount, type }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});