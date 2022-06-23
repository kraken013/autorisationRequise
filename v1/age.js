
function securite(){    
    let age = prompt('Quel âge avez vous?'); 
    if(age < 18){//si age inferieur à 18 alors quitter le site
       
        window.location.assign("https://www.youtube.com/watch?v=TiHHBPl8iZg");
        console.log("vous êtes mineur");
    }else{
        //sinon entrer dans le site
        
        
        console.log("vous êtes majeur");
    }
}

securite();
