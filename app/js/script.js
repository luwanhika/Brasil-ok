const btnAceitar = document.querySelector('#btncontinuar');
const header = document.querySelector('.header');

btnAceitar.addEventListener('click', function(){
    console.log('click button');

    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
    }
});