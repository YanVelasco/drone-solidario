function validateVolunteerForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const droneModel = document.getElementById('droneModel').value;
    const flightCapabilities = document.getElementById('flightCapabilities').value;
    const location = document.getElementById('location').value;

    if (!name || !email || !phone || !droneModel || !flightCapabilities || !location) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    return true;
}

function handleFormSubmission(event) {
    event.preventDefault(); 
    if (validateVolunteerForm()) {
        alert('Cadastro realizado com sucesso!');
    }
}

function showSuccessModal(message) {
    const oldModal = document.getElementById('success-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'success-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <span class="modal-close" id="modal-close-btn">&times;</span>
            <h3>Sucesso!</h3>
            <p>${message}</p>
            <button id="modal-ok-btn">OK</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('modal-close-btn').onclick = closeModal;
    document.getElementById('modal-ok-btn').onclick = closeModal;
    modal.querySelector('.modal-backdrop').onclick = closeModal;

    function closeModal() {
        modal.remove();
    }
}

const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessModal('Cadastro de voluntário salvo com sucesso!');
        volunteerForm.reset();
    });
}

const regiaoForm = document.getElementById('form-regiao');
if (regiaoForm) {
    regiaoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessModal('Cadastro da região salvo com sucesso!');
        regiaoForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});