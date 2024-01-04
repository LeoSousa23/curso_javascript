const btnAddNote = document.getElementById('btn-add') // botao de adicionar nota
const btnInsertNote = document.getElementById('btn-insert') // botao de inserir nota
const btnCloseModal = document.getElementById('btn-close') // botao de fechar modal
const modalWrapper = document.getElementById('modal-wrapper') // modal
const listCards = document.getElementById('list-cards') // area que ira ter as notas
let inputNote = document.getElementById('input-note') //input que recebe a nota

btnAddNote.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)
btnInsertNote.addEventListener('click', insertNote)

function insertNote() {
  let noteContent = inputNote.value

  let card = document.createElement('div')
  card.setAttribute('class', 'card')
  card.innerHTML = `
  <p>${noteContent}</p>
  <button class="btn-remove">
    <i class="ph ph-x"></i>
  </button>
  `

  listCards.appendChild(card)

  closeModal()
  
  inputNote.value = ''
}

function openModal() {
  modalWrapper.classList.add('open')
}

function closeModal() {
  modalWrapper.classList.remove('open')
}