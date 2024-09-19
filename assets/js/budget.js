const form = document.getElementById('budget-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const category = document.getElementById('category').value;
  const goal = document.getElementById('goal').value;

  // Send a POST request to the backend to set the budget goal
  fetch('/budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, goal }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});