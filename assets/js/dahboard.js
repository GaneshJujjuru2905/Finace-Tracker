// Get the user's financial data from the backend
fetch('/financial-data')
  .then((response) => response.json())
  .then((data) => {
    // Create the income vs. expenses chart
    const incomeVsExpensesChart = document.getElementById('income-vs-expenses-chart');
    new Chart(incomeVsExpensesChart, {
      type: 'bar',
      data: {
        labels: data.income.map((item) => item.date),
        datasets: [{
          label: 'Income',
          data: data.income.map((item) => item.amount),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }, {
          label: 'Expenses',
          data: data.expenses.map((item) => item.amount),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }],
      },
      options: {
        title: {
          display: true,
          text: 'Income vs. Expenses',
        },
      },
    });

    // Create the savings progress chart
    const savingsProgressChart = document.getElementById('savings-progress-chart');
    new Chart(savingsProgressChart, {
      type: 'line',
      data: {
        labels: data.savings.map((item) => item.date),
        datasets: [{
          label: 'Savings',
          data: data.savings.map((item) => item.amount),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
        }],
      },
      options: {
        title: {
          display: true,
          text: 'Savings Progress',
        },
      },
    });

    // Calculate the net worth
    const netWorth = data.income.reduce((acc, item) => acc + item.amount, 0) - data.expenses.reduce((acc, item) => acc + item.amount, 0);
    document.getElementById('net-worth').textContent = `$${netWorth.toFixed(2)}`;

    // Create the budget allocation chart
    const budgetAllocationChart = document.getElementById('budget-allocation-chart');
    new Chart(budgetAllocationChart, {
      type: 'pie',
      data: {
        labels: data.expenses.map((item) => item.category),
        datasets: [{
          label: 'Budget Allocation',
          data: data.expenses.map((item) => item.amount),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            // Add more colors here
          ],
        }],
      },
      options: {
        title: {
          display: true,
          text: 'Budget Allocation',
        },
      },
    });
  })
  .catch((error) => console.error(error));