let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];     // Toutes les cases + poubelle
const choix = [];
let photoEnCours;


for (i = 0; i < boxs.length; i++) {    // push chaque image dans le tableau AllCases
    allCases.push(boxs[i]);
}
    // console.log(allCases)
    allCases.push(destroy);            // permet d'ajouter event (dragover, dragenter, drop) sur notre case destroy
    // console.log(allCases)


let indexPhoto = 1;
base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;



for (const vide of allCases) {                         // Pour toutes les cases dans allCases
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
}



function dragDrop() {

    // RETURN si on pose sur la case id (premiere-case)
    if (this.id === "premiere-case") {     // this = endroit où on va lacher notre élément
        return;
    }

    // console.log(this.id === "destroy");
    // DESTROY si on pose sur la case id (destroy)
    if (this.id === "destroy") {  
        base.remove();
        nouvelleBase();
        return;
    }


    // VERROUILLAGE (enlever eventListener)
    this.removeEventListener('drop', dragDrop);
    this.removeEventListener('dragenter', dragEnter);
    this.removeEventListener('dragover', dragOver);

    this.appendChild(document.querySelector('.base'));          // this => élément que l'on survole dans lequel on veut mettre image 
    this.childNodes[0].setAttribute('draggable', false);        // div que l'on vient de poser avec img, on lui change l'attr
    nouvelleBase();

    choix.push(photoEnCours);

    if (choix.length === 3) {
        setTimeout(() => {
            alert("Sélection terminée");
        }, 200)
    }

}



function dragOver(e) {
    e.preventDefault();
}



function dragEnter(e) {
    e.preventDefault();
}


// FONCTION QUI REMPLACE BASE PAR NEWBASE 

function nouvelleBase() {

    const newBase = document.createElement('div');
    newBase.setAttribute('class', 'base');
    newBase.setAttribute('draggable', 'true');
    indexPhoto ++;
    newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    premiereCase.appendChild(newBase);
    base = newBase;
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