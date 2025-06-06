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

// Função para marcar o primeiro checkbox da tabela por padrão
function marcarPrimeiroCheckboxTabelaDroneiros() {
    const tabela = document.getElementById('tabela-droneiros');
    if (!tabela) return;
    const primeiroCheckbox = tabela.querySelector('tbody tr input[type="checkbox"]');
    if (primeiroCheckbox) {
        primeiroCheckbox.checked = true;
    }
}

// Chame essa função após o carregamento inicial da tabela
window.addEventListener('DOMContentLoaded', function() {
    marcarPrimeiroCheckboxTabelaDroneiros();
});

// Exclusividade dos checkboxes de envio
document.addEventListener('DOMContentLoaded', function() {
    // Exclusividade dos checkboxes de envio
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

    // Exclusividade dos checkboxes da tabela-droneiros
    const tabela = document.getElementById('tabela-droneiros');
    if (tabela) {
        tabela.addEventListener('change', function(e) {
            if (e.target && e.target.type === 'checkbox' && e.target.id !== 'check-all') {
                const checkboxes = tabela.querySelectorAll('tbody input[type="checkbox"]');
                checkboxes.forEach(cb => {
                    if (cb !== e.target) cb.checked = false;
                });
            }
        });
    }

    // Botão de convocação
    const btnConvocar = document.getElementById('btn-convocar');
    if (btnConvocar) {
        btnConvocar.addEventListener('click', function() {
            const texto = document.getElementById('convocacao-texto').value;
            const enviaEmail = chkEmail.checked;
            const enviaWhatsapp = chkWhatsapp.checked;

            // Busca o e-mail do registro selecionado na tabela
            let emailSelecionado = '';
            let telefoneSelecionado = '';
            if (tabela) {
                const checked = tabela.querySelector('tbody input[type="checkbox"]:checked');
                if (checked) {
                    const tr = checked.closest('tr');
                    // Colunas: [checkbox, nome, telefone, email, regiao, experiencia]
                    const tds = tr.querySelectorAll('td');
                    emailSelecionado = tds[3]?.textContent.trim() || '';
                    telefoneSelecionado = tds[2]?.textContent.replace(/\D/g, '') || '';
                }
            }

            if (enviaEmail) {
                if (!emailSelecionado) {
                    alert('Selecione um registro na tabela para enviar por e-mail.');
                    return;
                }
                const assunto = encodeURIComponent('Convocação Voluntário RDR');
                const corpo = encodeURIComponent(texto);
                window.location.href = `mailto:${emailSelecionado}?subject=${assunto}&body=${corpo}`;
            } else if (enviaWhatsapp) {
                if (!telefoneSelecionado) {
                    alert('Selecione um registro na tabela para enviar por WhatsApp.');
                    return;
                }
                const mensagem = encodeURIComponent(texto);
                // Formato internacional do WhatsApp: 55 + DDD + número (ajuste conforme necessário)
                let numero = telefoneSelecionado;
                if (numero.length < 11) {
                    alert('Telefone inválido para envio via WhatsApp.');
                    return;
                }
                const link = `https://wa.me/55${numero}?text=${mensagem}`;
                window.open(link, '_blank');
            } else {
                alert('Selecione uma opção para envio.');
            }
        });
    }

    // Exemplo de função de exclusão de registro
    document.getElementById('btn-excluir').addEventListener('click', function() {
        const tabela = document.getElementById('tabela-droneiros');
        const linhas = tabela.querySelectorAll('tbody tr');
        let excluiu = false;
        for (let linha of linhas) {
            const checkbox = linha.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                linha.remove();
                excluiu = true;
                break; // Remove apenas o primeiro selecionado
            }
        }
        // if (!excluiu) {
        //     alert('Selecione um registro para excluir.');
        // }
        // Após exclusão, marcar o primeiro checkbox disponível
        marcarPrimeiroCheckboxTabelaDroneiros();
    });
});
