let chart;

async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}

async function renderChart() {
    const data = await fetchData();

    const ctx = document.getElementById('myChart').getContext('2d');
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'bar', // Change to 'line', 'pie', etc., as needed
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Sample Data',
                data: data.values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            }]
        },
        options: {
            responsive: true,
        }
    });
}

document.getElementById('updateData').addEventListener('click', renderChart);

// Initial render
renderChart();
