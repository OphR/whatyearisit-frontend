fetch('whatyearisit-backend-fr5uv8q6h-ophelies-projects-722a4a6d.vercel.app')
    .then(response => response.json())
    .then(data => {
      document.querySelector('#year').textContent = data.year;
    });

