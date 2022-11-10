document.querySelector('#inserisci')
.addEventListener('click', function(){

    let testo = document.querySelector('#testo').value;
    
    let div = document.createElement('div');
    div.classList.add('todo')
    
    let completato = document.createElement('button');
    completato.textContent = 'Completata';

    let contenutoInput = document.querySelector('#testo').value;

    div.classList.add('daCompletare');
    document.querySelector('#lista').append(div)

    completato.addEventListener('click', function() {
        div.classList.add('Complete');
        document.querySelector('#lista-completati').append(div);
    })
    div.append(contenutoInput, completato);
});



       

