const TABELA_KEY = "droneiros-solidarios-tabela";

// Carregar tabela do localStorage ao abrir a página
function carregarTabela() {
    const tbody = document.querySelector("#tabela-droneiros tbody");
    tbody.innerHTML = "";
    const dados = JSON.parse(localStorage.getItem(TABELA_KEY) || "[]");
    dados.forEach((item, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><input type="checkbox" class="row-check"></td>
            <td>${item.nome}</td>
            <td>${item.telefone}</td>
            <td>${item.email}</td>
            <td>${item.regiao}</td>
            <td>${item.experiencia}</td>
            <td>${item.modelo}</td>
        `;
        tbody.appendChild(tr);
    });
}
carregarTabela();

// Permite selecionar/desselecionar todos
document.getElementById("check-all").addEventListener("change", function() {
    document.querySelectorAll("#tabela-droneiros .row-check").forEach(cb => cb.checked = this.checked);
});

// Excluir registros selecionados
document.getElementById("btn-excluir").addEventListener("click", function() {
    let dados = JSON.parse(localStorage.getItem(TABELA_KEY) || "[]");
    const checks = Array.from(document.querySelectorAll("#tabela-droneiros .row-check"));
    const novasLinhas = [];
    dados.forEach((item, idx) => {
        if (!checks[idx] || !checks[idx].checked) {
            novasLinhas.push(item);
        }
    });
    localStorage.setItem(TABELA_KEY, JSON.stringify(novasLinhas));
    carregarTabela();
    document.getElementById("check-all").checked = false;
});

// Função para adicionar registro (usada pela página detalhesCadDrones.html)
window.adicionarDroneiroSolidario = function(dados) {
    let lista = JSON.parse(localStorage.getItem(TABELA_KEY) || "[]");
    lista.push(dados);
    localStorage.setItem(TABELA_KEY, JSON.stringify(lista));
    carregarTabela();
};

// Exclusividade dos checkboxes de envio
document.addEventListener('DOMContentLoaded', function() {
    const chkEmail = document.getElementById('envia-email');
    const chkWhatsapp = document.getElementById('envia-whatsapp');
    if (chkEmail && chkWhatsapp) {
        chkEmail.addEventListener('change', function() {
            if (this.checked) chkWhatsapp.checked = false;
        });
        chkWhatsapp.addEventListener('change', function() {
            if (this.checked) chkEmail.checked = false;
        });
    }

    // Botão de convocação
    const btnConvocar = document.getElementById('btn-convocar');
    if (btnConvocar) {
        btnConvocar.addEventListener('click', function() {
            const texto = document.getElementById('convocacao-texto').value;
            const enviaEmail = chkEmail.checked;
            const enviaWhatsapp = chkWhatsapp.checked;

            if (enviaEmail) {
                alert('Convocação enviada por E-mail:\n\n' + texto);
                // Integração real de e-mail pode ser feita aqui
            } else if (enviaWhatsapp) {
                const mensagem = encodeURIComponent(texto);
                const link = `https://wa.me/?text=${mensagem}`;
                window.open(link, '_blank');
            } else {
                alert('Selecione uma opção para envio.');
            }
        });
    }

    // Exclusividade dos checkboxes da tabela-droneiros
    const tabela = document.getElementById('tabela-droneiros');
    if (tabela) {
        tabela.addEventListener('change', function(e) {
            if (e.target && e.target.type === 'checkbox' && e.target.id !== 'check-all') {
                // Desmarca todos os outros checkboxes exceto o atual
                const checkboxes = tabela.querySelectorAll('tbody input[type="checkbox"]');
                checkboxes.forEach(cb => {
                    if (cb !== e.target) cb.checked = false;
                });
            }
        });
    }
});
