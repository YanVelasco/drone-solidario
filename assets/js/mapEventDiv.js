
// Mapa 1: Eventos do Projeto
const mapEventos = L.map('map-eventos').setView([-10.0, -55.0], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapEventos);

// Lista de eventos com tipo e cor
const eventos = [
  {
    tipo: "incendio",
    cor: "red",
    titulo: "🔥 Incêndio Florestal - Cuiabá - MT",
    descricao: "Data: 02/06/2025<br>Área afetada: 120 hectares",
    coordenadas: [-12.5, -55.0]
  },
  {
    tipo: "enchente",
    cor: "blue",
    titulo: "🌊 Enchente - Porto Alegre - RS",
    descricao: "Data: 28/05/2025<br>Famílias afetadas: 300",
    coordenadas: [-30.0, -51.2]
  }
];

// Geração dinâmica de ícones
const icones = {};
eventos.forEach(evento => {
  if (!icones[evento.tipo]) {
    icones[evento.tipo] = L.divIcon({
      className: 'custom-icon',
      html: `<div style="background-color: ${evento.cor}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  }
});

// Adiciona marcadores ao mapa de eventos
eventos.forEach(evento => {
  L.marker(evento.coordenadas, { icon: icones[evento.tipo] })
    .addTo(mapEventos)
    .bindPopup(`<strong>${evento.titulo}</strong><br>${evento.descricao}`);
});

// Legenda dinâmica para o mapa de eventos
const legenda = L.control({ position: "bottomright" });
legenda.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  div.innerHTML = "<strong>Legenda</strong><br>";

  const tiposUnicos = [...new Map(eventos.map(e => [e.tipo, e])).values()];
  tiposUnicos.forEach(evento => {
    div.innerHTML += `<span style="background:${evento.cor};width:10px;height:10px;display:inline-block;margin-right:5px;border-radius:50%;"></span> ${evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}<br>`;
  });

  return div;
};
legenda.addTo(mapEventos);

// Mapa 2: Dados Públicos (INPE)
const mapPublico = L.map('map-publico').setView([-10.0, -55.0], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapPublico);

// 🔥 Dados de queimadas do INPE
const camadaQueimadas = L.layerGroup().addTo(mapPublico);
const urlQueimadas = './assets/dados/queimadas_brasil_24h.csv';

Papa.parse(urlQueimadas, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'red',
          fillColor: 'red',
          fillOpacity: 0.6
        }).addTo(camadaQueimadas)
          .bindPopup(`
            🔥 <strong>Foco de Queimada</strong><br>
            Bioma: ${ponto.bioma}<br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-focos').innerText = `Total de focos de queimadas: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de queimadas:", err);
    document.getElementById('contador-focos').innerText = 'Erro ao carregar dados de queimadas.';
  }
});

// 🌊 Dados de enchentes
const camadaEnchentes = L.layerGroup().addTo(mapPublico);
const urlEnchentes = './assets/dados/enchentes_brasil_24h.csv';

Papa.parse(urlEnchentes, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.6
        }).addTo(camadaEnchentes)
          .bindPopup(`
            🌊 <strong>Enchente</strong><br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-enchentes').innerText = `Total de enchentes: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de enchentes:", err);
    document.getElementById('contador-enchentes').innerText = 'Erro ao carregar dados de enchentes.';
  }
});

// 🌪️ Dados de vendavais
const camadaVendavais = L.layerGroup().addTo(mapPublico);
const urlVendavais = './assets/dados/vendavais_brasil_24h.csv';

Papa.parse(urlVendavais, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'purple',
          fillColor: 'purple',
          fillOpacity: 0.6
        }).addTo(camadaVendavais)
          .bindPopup(`
            🌪️ <strong>Vendaval</strong><br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-vendavais').innerText = `Total de vendavais: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de vendavais:", err);
    document.getElementById('contador-vendavais').innerText = 'Erro ao carregar dados de vendavais.';
  }
});

// 🪨 Dados de deslizamentos
const camadaDeslizamentos = L.layerGroup().addTo(mapPublico);
const urlDeslizamentos = './assets/dados/deslizamentos_brasil_24h.csv';

Papa.parse(urlDeslizamentos, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'brown',
          fillColor: 'brown',
          fillOpacity: 0.6
        }).addTo(camadaDeslizamentos)
          .bindPopup(`
            🪨 <strong>Deslizamento</strong><br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-deslizamentos').innerText = `Total de deslizamentos: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de deslizamentos:", err);
    document.getElementById('contador-deslizamentos').innerText = 'Erro ao carregar dados de deslizamentos.';
  }
});

// 🚧 Dados de acidentes
const camadaAcidentes = L.layerGroup().addTo(mapPublico);
const urlAcidentes = './assets/dados/acidentes_brasil_24h.csv';

Papa.parse(urlAcidentes, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'orange',
          fillColor: 'orange',
          fillOpacity: 0.6
        }).addTo(camadaAcidentes)
          .bindPopup(`
            🚧 <strong>Acidente</strong><br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-acidentes').innerText = `Total de acidentes: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de acidentes:", err);
    document.getElementById('contador-acidentes').innerText = 'Erro ao carregar dados de acidentes.';
  }
});

// 🏥 Dados de alertas de saúde pública
const camadaAlertasSaude = L.layerGroup().addTo(mapPublico);
const urlAlertasSaude = './assets/dados/alertas_saude_brasil_24h.csv';

Papa.parse(urlAlertasSaude, {
  download: true,
  header: true,
  complete: function(results) {
    const dados = results.data;
    let total = 0;

    dados.forEach(ponto => {
      const lat = parseFloat(ponto.latitude);
      const lon = parseFloat(ponto.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        total++;
        L.circleMarker([lat, lon], {
          radius: 5,
          color: 'green',
          fillColor: 'green',
          fillOpacity: 0.6
        }).addTo(camadaAlertasSaude)
          .bindPopup(`
            🏥 <strong>Alerta de Saúde Pública</strong><br>
            Estado: ${ponto.estado}<br>
            Município: ${ponto.municipio}<br>
            Data: ${ponto.data_hora}
          `);
      }
    });

    document.getElementById('contador-alertas-saude').innerText = `Total de alertas de saúde pública: ${total}`;
  },
  error: function(err) {
    console.error("Erro ao carregar CSV de alertas de saúde pública:", err);
    document.getElementById('contador-alertas-saude').innerText = 'Erro ao carregar dados de alertas de saúde pública.';
  }
});

// Atualiza a legenda de camadas
L.control.layers(null, {
  'Focos de Queimada': camadaQueimadas,
  'Enchentes': camadaEnchentes,
  'Vendavais': camadaVendavais,
  'Deslizamentos': camadaDeslizamentos,
  'Acidentes': camadaAcidentes,
  'Alertas de Saúde Pública': camadaAlertasSaude
}).addTo(mapPublico);
