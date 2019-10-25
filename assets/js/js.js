function persoData(){
  let nom = document.getElementById("lastname").value;
  let prenom = document.getElementById("firstname").value;
  let ville = document.getElementById("city").value;
  alert("Votre nom : " + nom + "\nVotre prénom : " + prenom + "\nVotre ville : " + ville);
}
//document.getElementById("submit").onclick = function() {persoData()};
document.querySelector('button').addEventListener('click',persoData);
//dom0:on ne peut pas coller plus d'un evenement
//dom1: qui permet d'apliquer plus
//l'evenement declenche la fonction
//document.getElementById = recuperer l'element de ce document par son ID/name ou class*
//querySelector= permet de ne pas rajouter d'attribut suplementaire dans le HTML
//camelCase= ex: add"E"ventListener / les mots sont collé et et les majiscules 
//[suite]sont obligatoire dés le second mots.



