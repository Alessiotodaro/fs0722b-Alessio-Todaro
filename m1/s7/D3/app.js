salvaIlDato = function(info_da_salvare) {
    localStorage.ultimo_pensiero = info_da_salvare;
    alert("Merizzazione effettuata")
};
recuperaIlDato = function(elemento){
    if(confirm("Sostituire il contenuto con l'ultimo pensiero inserito?")){
        elemento.value = localStorage.ultimo_pensiero;
    }
};