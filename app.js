let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];     // Ttes les cases + poubelle



for(i = 0; i < boxs.length; i++){
    allCases.push(boxs[i]);
}
// console.log(allCases)


let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;


for (const vide of allCases) {                         // Pour toutes les cases dans allCases
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
}




function dragDrop() {

    console.log("ici")
    this.appendChild(document.querySelector('.base'));                 // this => élément que l'on survole dans lequel on veut mettre image 
}



function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}








/*
NOTES

for of => boucle pour les tableaux
for in => boucle pour les objets 

dragover : quand on survole un élément avec un élément sélectionné à glisser
dragenter : quand on va entrer dans l'espace de l'élément en question
dragdrop : quand on lache l'élément dedans


dragover et dragenter ont été selectionnés pour pouvoir mettre un prevendDefault() qui va autoriser le drop

*/