function loadDrones() {
    const dronesContainer = document.getElementById('droneContainer');

    // Drones fixos
    const dronesFixos = [
        {
            modelo: "DroneA",
            nome: "PHANTOM 4 PRO",
            imagem: "../assets/images/drones/PHANTOM 4 PRO.jpg"
        },
        {
            modelo: "DroneB",
            nome: "YUNEEC",
            imagem: "../assets/images/drones/YUNEEC.png"
        },
        {
            modelo: "DroneC",
            nome: "MATRICE 600PRO",
            imagem: "../assets/images/drones/MATRICE 600PRO.jpg"
        },
        {
            modelo: "DroneD",
            nome: "MAVIC 1 PRO",
            imagem: "../assets/images/drones/MAVIC 1 PRO.jpg"
        }
    ];

    // Renderiza os drones fixos
    dronesFixos.forEach(drone => {
        const droneDiv = document.createElement('div');
        droneDiv.className = 'drone';
        droneDiv.onclick = () => location.href = `detalhesCadDrones.html?modelo=${drone.modelo}`;

        const img = document.createElement('img');
        img.src = drone.imagem;
        img.alt = `Drone ${drone.modelo}`;

        const p = document.createElement('p');
        p.innerText = drone.nome;

        droneDiv.appendChild(img);
        droneDiv.appendChild(p);
        dronesContainer.appendChild(droneDiv);
    });

    // Drones personalizados
    const storedDrones = JSON.parse(localStorage.getItem('drones')) || [];

    storedDrones.forEach(drone => {
        // Verifica se os dados essenciais existem
        if (!drone || !drone.modelo || !drone.nome || !drone.imagem) return;
    
        const droneDiv = document.createElement('div');
        droneDiv.className = 'drone';
        droneDiv.onclick = () => location.href = `detalhesCadDrones.html?modelo=${drone.modelo}`;
    
        const img = document.createElement('img');
        img.src = drone.imagem;
        img.alt = `Drone ${drone.modelo}`;
    
        const p = document.createElement('p');
        p.innerText = drone.nome;
    
        droneDiv.appendChild(img);
        droneDiv.appendChild(p);
        dronesContainer.appendChild(droneDiv);

    });    
}

window.onload = loadDrones;
