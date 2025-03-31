const Charts = () => {
    const energyData = {
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      datasets: [
        {
          label: 'Consommation',
          data: [300, 350, 300, 400, 500, 450, 400],
          borderColor: '#007bff',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          fill: true,
          tension: 0.4,
        }, 
      ],
    };
  
    const energyOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Consommation d\'Énergie (24H)', font: { size: 16 } },
      },
      scales: {
        y: { beginAtZero: true, max: 600, title: { display: true, text: 'kWh' } },
        x: { title: { display: true, text: 'Heure' } },
      },
    };
  
    const trafficData = {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [
        {
          label: 'Cars',
          data: [4500, 5000, 4000, 4800, 5500, 3000, 3500],
          backgroundColor: '#007bff',
        },
        {
          label: 'Buses',
          data: [1000, 1200, 800, 1100, 1300, 600, 700],
          backgroundColor: '#ff9800',
        },
        {
          label: 'Bikes',
          data: [500, 600, 400, 700, 800, 300, 400],
          backgroundColor: '#4caf50',
        },
      ],
    };
  
    const trafficOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Flux de Circulation (Semaine)', font: { size: 16 } },
      },
      scales: {
        y: { beginAtZero: true, max: 6000, title: { display: true, text: 'Véhicules par jour' } },
        x: { title: { display: true, text: 'Jour' } },
      },
    };
}


