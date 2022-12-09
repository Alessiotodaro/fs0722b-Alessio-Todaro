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
                    card.className = "card";

                    let img = document.createElement("img");
                    img.setAttribute('src', res[i].profileURL);
                    img.className = "image";
            
                    let username = document.createElement("h3");
                    username.innerText = res[i].username;
        
                    
                    let email = document.createElement("h5");
                    email.innerText = res[i].email;
                    email.className = "email";

                    card.append(img)
                    card.appendChild(username);
                    card.appendChild(email);   
                    div.appendChild(card);           
                }
            }
        )
        .catch((error) => {
            console.error('errore:', error); 
        });