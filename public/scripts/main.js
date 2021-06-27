import Modal from './modal.js'

const modal = Modal()

function handleClick(event, check = true) {
	event.preventDefault()
	const form = document.querySelector('.modal form')
	const roomId = document.querySelector('#room-id').dataset.id
	const slug = check ? 'check' : 'delete'
	const questionId = event.target.dataset.id
	form.setAttribute('action', '/question/'+roomId+'/'+questionId+'/'+slug)


	if (check) {
		modalTitle.innerHTML = 'Marcar como lida está pergunta'
		modalDescription.innerHTML = 'Tem certeza que deseja marcar como lida está pergunta?'
		modalButton.innerHTML = 'Sim, marcar como lida'
		modalButton.classList.remove('red')
	} else {
		modalTitle.innerHTML = 'Excluir está pergunta'
		modalDescription.innerHTML = 'Tem certeza que deseja excluir está pergunta?'
		modalButton.innerHTML = 'Sim, excluir'
		modalButton.classList.add('red')
	}
	modal.open()
}

const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

checkButtons.forEach(button => {
	button.addEventListener('click', handleClick)
})

deleteButtons.forEach(button => {
	button.addEventListener('click', (event) => handleClick(event, false))
})