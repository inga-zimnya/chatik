import { io } from 'socket.io-client';

const socket = io(process.env.SERVER_URL);

const messages = document.getElementById('messages');

socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    item.classList.add("list-group-item")
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function (e) {
    console.log("form")
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});
