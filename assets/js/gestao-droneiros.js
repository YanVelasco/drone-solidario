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

// Enviar convocação
document.getElementById("btn-convocar").addEventListener("click", function() {
    const texto = document.getElementById("convocacao-texto").value;
    const enviaEmail = document.getElementById("envia-email").checked;
    const enviaWhatsapp = document.getElementById("envia-whatsapp").checked;
    const checks = Array.from(document.querySelectorAll("#tabela-droneiros .row-check"));
    const dados = JSON.parse(localStorage.getItem(TABELA_KEY) || "[]");
    checks.forEach((cb, idx) => {
        if (cb.checked) {
            const droneiro = dados[idx];
            if (enviaWhatsapp && droneiro.telefone) {
                const wa = `https://wa.me/55${droneiro.telefone.replace(/\D/g,'')}?text=${encodeURIComponent(texto)}`;
                window.open(wa, '_blank');
            }
            if (enviaEmail && droneiro.email) {
                const mailto = `mailto:${droneiro.email}?subject=Convocação Drone Solidário&body=${encodeURIComponent(texto)}`;
                window.open(mailto, '_blank');
            }
        }
    });
});
