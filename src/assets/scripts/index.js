console.log(`Hello ECMA Script !`);

// Contenneur de la modal fait maison (via first className)
let Modal = document.getElementById("modal")
// Element de background de la modal
const ModalBackground = document.getElementById("modal-bg")
// Boutton sortie de modal.
const ModalExitBtn = document.getElementById("modal-close-btn")
// Boutton de validation du cookie
const ModalValidateBtn = document.getElementById("modal-validate-btn")
// Appel du body DOM
const Body = document.body

const RickRollSound = new Audio("assets/audio/rick-rolled.mp3");
console.log(RickRollSound);

// Event du boutton de sortie de la modal
ModalExitBtn.addEventListener("click", () => {
  // Vider le contennu de la modal
  const oldContent = Modal.innerHTML;
  console.log(`Ancien contennu de la modal : \n ${oldContent}`);
  Modal.innerHTML = null;
  // Insérer le rickroll
  Modal.innerHTML = `
  <img src="assets/img/roll.gif">
  `
  setTimeout(() => {
    RickRollSound.play();
    console.log(`Lancement de l'audio !`);
  }, 4500)
  // Faire un timeout de reset de la modal
  setTimeout(()=>{
    console.log(`Annonce rechargement de page.`);
    Modal.innerHTML = `<div style="padding: 6px; background-color: brown;">
    <h2>Recharge la page et accepte les cookies !</h2></div>`
  }, 12000)
})

// Event du boutton d'acceptation des cookies
ModalValidateBtn.addEventListener("click", () => {
  // Cacher le background de la modal
  ModalBackground.style.display = "none"
  // Toggle le overflow du body
  Body.classList.toggle("no-scroll");
})