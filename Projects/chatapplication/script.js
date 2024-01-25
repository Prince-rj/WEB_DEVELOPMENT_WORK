const socket = io('http://localhost:8000');

const container = document.querySelector('.container')
const form = document.querySelector('.form')
const input = document.querySelector('.input')

const addMessage = (message,position)=>{
    const newdiv = document.createElement('div')
    newdiv.innerText=message
    newdiv.classList.add('box')
    newdiv.classList.add(position)
    container.append(newdiv)
}

const Name = prompt('君の名前');
socket.emit('new-user-joined',Name)
socket.on('user-joined',name=>{
    addMessage(`${name} joined the chat`,'left')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const text = input.value
    console.log(text)
    addMessage(`you: ${text}`, 'right')
    socket.emit('send', text)
    input.value=''
})
socket.on('recive',hh=>{
    addMessage(`${hh.name}: ${hh.message}`,'left')
})
socket.on('left',name=>{
    addMessage(`${name} left the chat`,'left')
})