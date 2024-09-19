// Get the user's financial data from the backend
fetch('/financial-data')
  .then((response) => response.json())
  .then((data) => {
    // Check if the user has gone over budget
    if (data.expenses.reduce((acc, item) => acc + item.amount, 0) > data.budget) {
      alert('You have gone over budget!');
    }

    // Check if the user has reached a savings milestone
    if (data.savings.reduce((acc, item) => acc + item.amount, 0) >= 1000) {
      alert('You have reached a savings milestone!');
    }
  })
  .catch((error) => console.error(error));