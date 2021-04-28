export default function initModalSms() {
    const botaoEnviar = document.querySelector('[data-reenviar="abrir"]');
    const botaoFechar = document.querySelector('[data-reenviar="fechar"]');
    const containerModal = document.querySelector('[data-reenviar="container"]');

    if (botaoEnviar && botaoFechar && containerModal) {

        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        function cliqueForaModal(event) {
            if (event.target === this) {
                toggleModal(event);
            }
        }

        botaoEnviar.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}