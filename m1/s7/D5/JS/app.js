fetch('../user/users.json')
        .then(
            function(response) {
                return response.json()
            }
        ).then(
            function(res) {

                let div = document.querySelector("#contenitor");
            
             for(i = 0 ; i < res.length ; i++) {
                
                    let card = document.createElement("div"); 
            
                    let username = document.createElement("h3");
                    username.innerText = res[i].username;
        
                    
                    let email = document.createElement("h5");
                    email.innerText = res[i].email;
            
                    let male = document.createElement('img');
                    male.setAttribute('src','../assets/male.png');
                    
                    let feMale = document.createElement('img');
                    feMale.setAttribute('src','../assets/female.png'); 

                    card.appendChild(username);
                    card.appendChild(email);   
                    div.appendChild(card);           
                }
            }
        )
        .catch((error) => {
            console.error('errore:', error); 
        });