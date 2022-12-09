fetch('../user/users.json')
        .then(
            function(response) {
                return response.json()
            }
        ).then(
            function(res) {
             console.log(res[0].username)

             for(i = 0 ; i < res.length ; i++) {
                   
                    let card = document.createElement('div');
                    card.className = 'card';
            
                    let cardBody = document.createElement('div');
                    cardBody.className = 'card-body';
            
                    let username = document.createElement('h3');
                    username.innerText = res[i].username;
                    username.className = 'card-username';
                    
                    let email = document.createElement('h4');
                    email.innerText = res[i].email;
                    email.className = 'card-username';
            
                    let male = document.createElement("img");
                    male.setAttribute('src','../assets/male.png');
                    
                    let feMale = document.createElement("img");
                    feMale.setAttribute('src','../assets/female.png');

                    if(res[i].gender === "Male") {
                        cardBody.appendChild(male);
                    }else{
                        cardBody.appendChild(female);
                    }


                    cardBody.appendChild(username);
                    cardBody.appendChild(email);

                    card.appendChild(cardBody);
                    
                




                /* let elemento = document.createElement("div");
                   elemento.innerHTML = `${res[i].username}  /  ${res[i].gender}`;
                   elemento.append */
                }
            }
        )
        .catch(error => console.log('errore'));