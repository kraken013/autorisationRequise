function datee(){
    let age= prompt('jj/mm/aaaa'); // affiche sur ton ecran une zone <input> (ou tu peux écrire dedans)
    var jj= age.substring(0,2); // substring est utilisé dans cette exemple pour récupéré le jour le mois et l'annee
    var mm= age.substring(3,5);
    var aa= age.substring(6,10)


    function getAge(date) { 
        var diff = Date.now() - date.getTime(); // soustrait la date actuel avec la date prompt -- Date.now (avec maj) equivaut à la date d'ajourdhui et date.gettime est la valeur de votre input
        var agee = new Date(diff); // créer une variable agee qui affichera le resultat de la soustration Date.now - date.getTime
        return Math.abs(agee.getUTCFullYear() - 1970);
    }

let agereel=(getAge(new Date(aa, mm, jj))); // appelez la fonctions getAge avec les paramèters aa/mm/jj

    if(getAge < 18){//si agereel inferieur à 18 alors quitter le site
    window.alert("vous êtes mineur");  
    document.location.href="https://www.youtube.com/watch?v=TiHHBPl8iZg";
    console.log("vous êtes mineur");
    }else{
    //sinon entrer dans le site
    
    window.alert("vous êtes mineur");
    console.log("vous êtes majeur");
    }
    
}

datee();