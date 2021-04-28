export default function initModalSms() {
    const botaoEnviar = document.querySelector('[data-reenviar="abrir"]');
    const botaoFechar = document.querySelector('[data-reenviar="fechar"]');
    const containerModal = document.querySelector('[data-reenviar="container"]');
    const botaoAutorizar = document.querySelector('[data-autorizar="abrir"]');

    if (botaoEnviar && botaoFechar && containerModal && botaoAutorizar) {

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
        botaoAutorizar.addEventListener('click', toggleModal);
    }
}