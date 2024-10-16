//Les difféentes listes utilisées pour le jeu
const words_list = ["bonjour", "labrador", "abricot"];
const sentences_list = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];
let propositions_list = words_list;

//score
let score = 0;

//Elements html
let player_input = document.getElementById("inputEcriture");
let validation_button = document.getElementById("btnValiderMot");

let shown_word = document.querySelector(".zoneProposition");
let shown_score = document.querySelector(".zoneScore span");

let choice_radio_button = document.querySelectorAll(".optionSource input");

let submit_form = document.querySelector(".popup form");