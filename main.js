// config du jeux

var gameConfig = {
    min: 13,
    max: 13,
};

// j'initialise la liste des scores obtenus

var scores = [];


function getRandomNumber(min, max) {
    // je genere un nombre alétoire entre 0 et 1
    var randomNumber = Math.random();
    // je vais étendre la plage de solution pour lui donner la taille voulue (de 10 à 30 on a une taille de 20)
    randomNumber = randomNumber * (max - min);
    // je decale mon interval
    randomNumber = randomNumber + min;
    // j'arrondi a l'entier inferieur
    randomNumber = Math.round(randomNumber);

    return randomNumber;
}    

function play() {

    // on va stocker dans un objet l'état actuel du jeu
    // on pourra a la fin de la partie afficher un message qui nous donnera l'état du jeu à la fin
    // on va faire évoluer cet état au cours du jeu
    // a chaque éssai on ajoutera +1 à la propriété attempts

    var gameState = {
        attempts: 1,
        searchedNumber: getRandomNumber(gameConfig.min, gameConfig.max)
    }

    // je triche
    console.log(gameState);

    // Le nombre saisi
    var enteredNumber = parseInt(prompt('Bonjour Esek, si t\'es prête appuie sur OK ?'));

    var enteredNumber = parseInt(prompt('Je veux que tu trouve la bonne date, celle ou tu es venu la 1ère fois chez moi (juste le chiffre du jour suffira) ?'));

    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== gameState.searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < gameState.searchedNumber) {
            enteredNumber = parseInt(prompt('LOL je t\'ai dit de réfléchir c\'est  (+) '));
        }
        else {
            enteredNumber = parseInt(prompt('Bon on est pas sortis de l\'auberge c\'est (-)'));
        }
        // on incrémente le nombre d'essais
        gameState.attempts++;
    }

    // j'ai gagné
    scores.push(gameState.attempts);

    // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
    // on affiche un message de victoire
    alert('Esek tu me surprend, fais un screenshot STP pour que je puisse voir combien d\'essaie tu as fais mdr  ' + gameState.searchedNumber + ' - Nombre d\'essais : ' + gameState.attempts);

}

do {
    play();
    
    // affiche des scores dans la console
    for(var compteur = 0 ; compteur < scores.length ; compteur ++) {

        // j'utilise le compteur qui va a chaque tour de boucle augmenter
        // pour lire une valeur du tableau
        // je comence par la valeur qui est à la position 0 puis au prochain tour de boucle les compteur va passer à 1 donc je pourrais lire la valeur à l'index 1 etc ...
        var score = scores[compteur];
        console.log("Pour la partie n°" + ( compteur + 1) + " vous avez fait " + score + " essais");
    }

} while(confirm("Merci de pas tricher et de refaire; appuie sur ANNULER cette fois Esek pour la suite ?"));