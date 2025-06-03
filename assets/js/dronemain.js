const params = new URLSearchParams(window.location.search);
const modelo = params.get('modelo');

const drones = {
    DroneA: {
        nome: "PHANTOM 4 PRO",
        imagem: "../assets/images/drones/PHANTOM 4 PRO.jpg",
        descricao: "Drone profissional com excelente qualidade de imagem e estabilidade. Design com um novo controlador ESC, hélices e tecnologia de transmissão OcuSync. Mais robusto e confiável, pois possui sensores anti colisão."
    },
    DroneB: {
        nome: "YUNEEC",
        imagem: "../assets/images/drones/YUNEEC.png",
        descricao: "Drone versátil ideal para mapeamento e inspeções. Possui dois modelos que são altamente utilizados por profissionais. Typhoon H, com câmera que grava em 4K e rotação em 360 graus para lente, e Typhoon Q500+, modelo mais simples com câmera Full HD."
    },
    DroneC: {
        nome: "MATRICE 600PRO",
        imagem: "../assets/images/drones/MATRICE 600PRO.jpg",
        descricao: "Drone robusto para cargas pesadas e aplicações industriais. Modelo projetado para cineastas e aplicações industriais. Possui tempo de voo prolongado e transmissão de longo alcance profissional em HD."
    },
    DroneD: {
        nome: "MAVIC 1 PRO",
        imagem: "../assets/images/drones/MAVIC 1 PRO.jpg",
        descricao: "Drone compacto com excelente portabilidade e qualidade de imagem. Pequeno, porém poderoso. Possui uma das mais sofisticadas câmeras do mercado. Ainda com a melhor portabilidade."
    },
    DroneE: {
        nome: "A DEFINIR",
        imagem: "../assets/images/drones/DroneIndefinido.png",
        descricao: "Modelo ainda não cadastrado. Por favor, forneça mais informações."
    }
};

// if (modelo && drones[modelo]) {
//     const drone = drones[modelo];
//     document.getElementById('tituloDrone').innerText = `Detalhes do ${drone.nome}`;
//     document.getElementById('modeloDrone').value = modelo;
//     document.getElementById('imagemDrone').src = drone.imagem;
//     document.getElementById('imagemDrone').alt = drone.nome;
//     document.getElementById('descricaoDrone').innerText = drone.descricao;

//     if (modelo === "DroneE") {
//         document.getElementById("uploadImagemContainer").style.display = "block";
//     }
// } else {
//     document.getElementById('tituloDrone').innerText = "Drone não encontrado";
//     document.getElementById('descricaoDrone').innerText = "O modelo selecionado não está disponível.";
// }

function exibirDrone(drone) {
    document.getElementById('tituloDrone').innerText = `Drone ${drone.nome}`;
    document.getElementById('modeloDrone').value = modelo;
    document.getElementById('imagemDrone').src = drone.imagem;
    document.getElementById('imagemDrone').alt = drone.nome;
    document.getElementById('descricaoDrone').innerText = drone.descricao;
}

if (modelo && drones[modelo]) {
    // Drone fixo
    exibirDrone(drones[modelo]);

    if (modelo === "DroneE") {
        document.getElementById("uploadImagemContainer").style.display = "block";
    }

} else {
    // Verifica se é um drone personalizado salvo no localStorage
    const dronesSalvos = JSON.parse(localStorage.getItem('drones')) || [];
    const dronePersonalizado = dronesSalvos.find(d => d.modelo === modelo);

    if (dronePersonalizado) {
        exibirDrone(dronePersonalizado);
        // Oculta o formulário de upload, pois já está cadastrado
        document.getElementById("uploadImagemContainer").style.display = "none";
    } else {
        document.getElementById('tituloDrone').innerText = "Drone não encontrado";
        document.getElementById('descricaoDrone').innerText = "O modelo selecionado não está disponível.";
    }
}


document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // if (!modelo || !drones[modelo]) {
    //     alert("Modelo de drone inválido ou não selecionado.");
    //     return;
    // }
    const dronesSalvos = JSON.parse(localStorage.getItem('drones')) || [];
    const dronePersonalizado = dronesSalvos.find(d => d.modelo === modelo);
    
    if (!modelo || (!drones[modelo] && !dronePersonalizado)) {
        alert("Modelo de drone inválido ou não selecionado.");
        return;
    }

    const nome = this.nome.value.trim();
    const telefone = this.telefone.value.trim();
    const email = this.email.value.trim();
    const regiao = this.regiao.value.trim();
    const experiencia = this.experience.value;

    if (!nome || !telefone || !email || !regiao || !experiencia) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (modelo === "DroneE") {
        // const modeloPersonalizado = this.modeloPersonalizado.value.trim();
        const modeloPersonalizado = this.modeloPersonalizado.value.trim().toUpperCase();
        const tempoVoo = this.tempoVoo.value.trim();
        const alcance = this.alcance.value.trim();
        const imagem = this.imagemPersonalizada.files[0];
        // const descricaoPersonalizada = this.descricaoPersonalizada.value.trim();
        const descricaoPersonalizada = this.descricaoPersonalizada.value.trim().toLowerCase().replace(/^./, c => c.toUpperCase());


        if (!modeloPersonalizado || !tempoVoo || !alcance || !imagem) {
            alert("Por favor, preencha todos os campos adicionais e/ou envie uma imagem do drone.");
            return;
        }

        const imagemURL = URL.createObjectURL(imagem);
        document.getElementById("imagemPreview").src = imagemURL;
        document.getElementById("imagemPreviewContainer").style.display = "block";
    
        // Cria objeto do novo drone
        const novoDrone = {
            modelo: modeloPersonalizado,
            nome: modeloPersonalizado,
            imagem: imagemURL,
            descricao: `Tempo de voo: ${tempoVoo}, Alcance: ${alcance}. ${descricaoPersonalizada}`
        };

        // Recupera drones já salvos (ou cria array vazio)
        const dronesSalvos = JSON.parse(localStorage.getItem('drones')) || [];

        // Adiciona o novo drone
        dronesSalvos.push(novoDrone);

        // Salva de volta no localStorage
        localStorage.setItem('drones', JSON.stringify(dronesSalvos));


    } else {
        document.getElementById("imagemPreviewContainer").style.display = "none";
    }

    // alert(`Cadastro enviado com sucesso para o modelo ${modelo}, mas desde já agradecemos pela iniciativa de fazer parte do nosso time de Operações de Resgate! Ressaltamos que você receberá uma 1ª notificação via sms para confirmar o cadastro e demais notificações apenas no caso de evento em andamento na sua localidade já com as orientações para devidas providências`);
    const nomeDrone = drones[modelo]?.nome || dronePersonalizado?.nome || modelo;
    const modeloPersonalizado = this.modeloPersonalizado.value.trim().toUpperCase();
    
    // Substitui "A DEFINIR" por "modelo personalizado", senão mantém o nome original
    const nomeFinal = nomeDrone === "A DEFINIR" ? modeloPersonalizado : nomeDrone;

    alert(`${nome}, cadastro enviado com sucesso para o modelo ${nomeFinal}, mas desde já agradecemos pela iniciativa de fazer parte do nosso time de Operações de Resgate! Ressaltamos que você receberá uma 1ª notificação via sms para confirmar o cadastro e demais notificações apenas no caso de evento em andamento na sua localidade já com as orientações para devidas providências`);


    this.reset();
    window.location.href = "maindrones.html";
    // window.location.href = `maindrones.html?modelo=${modeloPersonalizado}`;

});

// Exibe a pré-visualização da imagem assim que o usuário selecionar um arquivo
const inputImagem = document.getElementById("imagemPersonalizada");
if (inputImagem) {
    inputImagem.addEventListener("change", function () {
        const imagem = this.files[0];
        if (imagem) {
            const imagemURL = URL.createObjectURL(imagem);
            document.getElementById("imagemPreview").src = imagemURL;
            document.getElementById("imagemPreviewContainer").style.display = "block";
        } else {
            document.getElementById("imagemPreviewContainer").style.display = "none";
        }
    });
}

