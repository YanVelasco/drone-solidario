    // const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; OpenStreetMap contributors'
    // });

    // const queimadasINPE = L.tileLayer.wms("https://geoservicos.ibge.gov.br/geoserver/ows", {
    //   layers: 'biomas:biomas',
    //   format: 'image/png',
    //   transparent: true,
    //   attribution: "IBGE - Biomas"
    // });

    // const map = L.map('map', {
    //   center: [-10.0, -55.0],
    //   zoom: 4,
    //   layers: [baseMap, queimadasINPE]
    // });

    // const baseLayers = {
    //   "Mapa Base": baseMap
    // };

    // const overlays = {
    //   "Queimadas (INPE)": queimadasINPE
    // };

    // L.control.layers(baseLayers, overlays).addTo(map);

    // const legenda = L.control({ position: "bottomright" });
    // legenda.onAdd = function () {
    //   const div = L.DomUtil.create("div", "info legend");
    //   div.innerHTML = "<strong>Legenda</strong><br><span style='background:red;width:10px;height:10px;display:inline-block;margin-right:5px;'></span> Queimadas Ativas";
    //   return div;
    // };
    // legenda.addTo(map);

    // // Evento: Incêndio Florestal - MT
    // L.marker([-12.5, -55.0]).addTo(map)
    // .bindPopup("<strong>🔥 Incêndio Florestal - MT</strong><br>Data: 02/06/2025<br>Área afetada: 120 hectares");
    
    // // Evento: Enchente - RS
    // L.marker([-30.0, -51.2]).addTo(map)
    // .bindPopup("<strong>🌊 Enchente - RS</strong><br>Data: 28/05/2025<br>Famílias afetadas: 300");

//     // Camadas base versao ok icone
// const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
//   });
  
//   const queimadasINPE = L.tileLayer.wms("https://geoservicos.ibge.gov.br/geoserver/ows", {
//     layers: 'biomas:biomas',
//     format: 'image/png',
//     transparent: true,
//     attribution: "IBGE - Biomas"
//   });
  
//   // Inicialização do mapa
//   const map = L.map('map', {
//     center: [-10.0, -55.0],
//     zoom: 4,
//     layers: [baseMap, queimadasINPE]
//   });
  
//   // Controles de camadas
//   L.control.layers(
//     { "Mapa Base": baseMap },
//     { "Queimadas (INPE)": queimadasINPE }
//   ).addTo(map);
  
//   // Legenda
//   const legenda = L.control({ position: "bottomright" });
//   legenda.onAdd = function () {
//     const div = L.DomUtil.create("div", "info legend");
//     div.innerHTML = "<strong>Legenda</strong><br><span style='background:red;width:10px;height:10px;display:inline-block;margin-right:5px;'></span> Queimadas Ativas";
//     return div;
//   };
//   legenda.addTo(map);
  
//   // Ícones personalizados
//   const icones = {
//     incendio: L.divIcon({
//       className: 'custom-icon',
//       html: '<div style="background-color: red; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
//       iconSize: [16, 16],
//       iconAnchor: [8, 8]
//     }),
//     enchente: L.divIcon({
//       className: 'custom-icon',
//       html: '<div style="background-color: blue; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
//       iconSize: [16, 16],
//       iconAnchor: [8, 8]
//     })
//   };
  
//   // Lista de eventos
//   const eventos = [
//     {
//       tipo: "incendio",
//       titulo: "🔥 Incêndio Florestal - MT",
//       descricao: "Data: 02/06/2025<br>Área afetada: 120 hectares",
//       coordenadas: [-12.5, -55.0]
//     },
//     {
//       tipo: "enchente",
//       titulo: "🌊 Enchente - RS",
//       descricao: "Data: 28/05/2025<br>Famílias afetadas: 300",
//       coordenadas: [-30.0, -51.2]
//     }
//   ];
  
//   // Adiciona os marcadores no mapa
//   eventos.forEach(evento => {
//     L.marker(evento.coordenadas, { icon: icones[evento.tipo] })
//       .addTo(map)
//       .bindPopup(`<strong>${evento.titulo}</strong><br>${evento.descricao}`);
//   });
  

//  Camadas base versao ok legenda interativa

// // Camadas base
// const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// });

// const queimadasINPE = L.tileLayer.wms("https://geoservicos.ibge.gov.br/geoserver/ows", {
//   layers: 'biomas:biomas',
//   format: 'image/png',
//   transparent: true,
//   attribution: "IBGE - Biomas"
// });

// // Inicialização do mapa
// const map = L.map('map', {
//   center: [-10.0, -55.0],
//   zoom: 4,
//   layers: [baseMap, queimadasINPE]
// });

// // Controles de camadas
// L.control.layers(
//   { "Mapa Base": baseMap },
//   { "Queimadas (INPE)": queimadasINPE }
// ).addTo(map);

// // Lista de eventos com tipo e cor
// const eventos = [
//   {
//     tipo: "incendio",
//     cor: "red",
//     titulo: "🔥 Incêndio Florestal - MT",
//     descricao: "Data: 02/06/2025<br>Área afetada: 120 hectares",
//     coordenadas: [-12.5, -55.0]
//   },
//   {
//     tipo: "enchente",
//     cor: "blue",
//     titulo: "🌊 Enchente - RS",
//     descricao: "Data: 28/05/2025<br>Famílias afetadas: 300",
//     coordenadas: [-30.0, -51.2]
//   }
// ];

// // Geração dinâmica de ícones com base na cor
// const icones = {};
// eventos.forEach(evento => {
//   if (!icones[evento.tipo]) {
//     icones[evento.tipo] = L.divIcon({
//       className: 'custom-icon',
//       html: `<div style="background-color: ${evento.cor}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
//       iconSize: [16, 16],
//       iconAnchor: [8, 8]
//     });
//   }
// });

// // Adiciona os marcadores no mapa
// eventos.forEach(evento => {
//   L.marker(evento.coordenadas, { icon: icones[evento.tipo] })
//     .addTo(map)
//     .bindPopup(`<strong>${evento.titulo}</strong><br>${evento.descricao}`);
// });

// // Legenda dinâmica com base nos tipos de eventos
// const legenda = L.control({ position: "bottomright" });
// legenda.onAdd = function () {
//   const div = L.DomUtil.create("div", "info legend");
//   div.innerHTML = "<strong>Legenda</strong><br>";

//   const tiposUnicos = [...new Map(eventos.map(e => [e.tipo, e])).values()];
//   tiposUnicos.forEach(evento => {
//     div.innerHTML += `<span style="background:${evento.cor};width:10px;height:10px;display:inline-block;margin-right:5px;border-radius:50%;"></span> ${evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}<br>`;
//   });

//   return div;
// };
// legenda.addTo(map);

// // Mapa 1: Eventos do Projeto
// const mapEventos = L.map('map-eventos').setView([-10.0, -55.0], 4);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(mapEventos);

// // Lista de eventos com tipo e cor
// const eventos = [
//   {
//     tipo: "incendio",
//     cor: "red",
//     titulo: "🔥 Incêndio Florestal - MT",
//     descricao: "Data: 02/06/2025<br>Área afetada: 120 hectares",
//     coordenadas: [-12.5, -55.0]
//   },
//   {
//     tipo: "enchente",
//     cor: "blue",
//     titulo: "🌊 Enchente - RS",
//     descricao: "Data: 28/05/2025<br>Famílias afetadas: 300",
//     coordenadas: [-30.0, -51.2]
//   }
// ];

// // Geração dinâmica de ícones
// const icones = {};
// eventos.forEach(evento => {
//   if (!icones[evento.tipo]) {
//     icones[evento.tipo] = L.divIcon({
//       className: 'custom-icon',
//       html: `<div style="background-color: ${evento.cor}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
//       iconSize: [16, 16],
//       iconAnchor: [8, 8]
//     });
//   }
// });

// // Adiciona marcadores ao mapa de eventos
// eventos.forEach(evento => {
//   L.marker(evento.coordenadas, { icon: icones[evento.tipo] })
//     .addTo(mapEventos)
//     .bindPopup(`<strong>${evento.titulo}</strong><br>${evento.descricao}`);
// });

// // Mapa 2: Dados Públicos (INPE)
// const mapPublico = L.map('map-publico').setView([-10.0, -55.0], 4);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(mapPublico);

// // 🔥 Dados de queimadas do INPE
// fetch('https://queimadas.dgi.inpe.br/api/focos/ativos.json')
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(ponto => {
//       L.circleMarker([ponto.latitude, ponto.longitude], {
//         radius: 6,
//         color: 'red',
//         fillColor: 'red',
//         fillOpacity: 0.7
//       }).addTo(mapPublico)
//         .bindPopup(`🔥 <strong>Foco de Queimada</strong><br>
//                     Data: ${ponto.data_hora}<br>
//                     Satélite: ${ponto.satelite}<br>
//                     Estado: ${ponto.estado}<br>
//                     Município: ${ponto.municipio}`);
//     });
//   })
//   .catch(error => {
//     console.error("Erro ao carregar dados do INPE:", error);
//   });

// Nova Versao 2 Mapas

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
fetch('https://queimadas.dgi.inpe.br/api/focos/ativos.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(ponto => {
      L.circleMarker([ponto.latitude, ponto.longitude], {
        radius: 6,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.7
      }).addTo(mapPublico)
        .bindPopup(`🔥 <strong>Foco de Queimada</strong><br>
                    Data: ${ponto.data_hora}<br>
                    Satélite: ${ponto.satelite}<br>
                    Estado: ${ponto.estado}<br>
                    Município: ${ponto.municipio}`);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar dados do INPE:", error);
  });
