class Person {
    name = "";
    age = ""
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    older(){
        if(antoninoCannavacciuolo.age < brunoBarieri.age){
            console.log(`${antoninoCannavacciuolo.name} è più giovane di ${brunoBarieri.name}`) 
        }else{
            console.log(`${antoninoCannavacciuolo.name} è più vecchio di ${brunoBarieri.name}`) 

        }
    }
}
const antoninoCannavacciuolo = new Person("Antonino", 43);
const brunoBarieri = new Person("Bruno",60);

console.log(brunoBarieri.older())
console.log(antoninoCannavacciuolo.older())
