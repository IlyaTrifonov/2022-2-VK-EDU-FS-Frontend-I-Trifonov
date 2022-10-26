import './styles/index.css';


const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
// const message = document.querySelector('.old-message');

// const senders = ['Дженифер', 'Я']
let isMyMessage = true;

const start_messages = [
    {
        "text":
            "Есть над чем задуматься: явные признаки победы институционализации и по сей день остаются уделом " +
            "либералов, которые жаждут быть смешаны с не уникальными данными до степени совершенной неузнаваемости, " +
            "из-за чего возрастает их статус бесполезности!",
        "date": "12:34",
        "sender_name": "Дженифер",
        "isMyMessage": false
    },
    {
        "text":
            "Разнообразный и богатый опыт говорит нам, что высокотехнологичная концепция общественного уклада " +
            "обеспечивает широкому кругу (специалистов) участие в формировании как самодостаточных, так и внешне " +
            "зависимых концептуальных решений.",
        "date": "12:35",
        "sender_name": "Я",
        "isMyMessage": true
    }
];

const chat = document.querySelector('.chat-flow');

form.addEventListener('submit', handleSubmit.bind());
// form.addEventListener('keypress', handleKeyPress.bind());

document.addEventListener('DOMContentLoaded', getMessagesFromLocalStorage.bind())

function getMessagesFromLocalStorage() {
    let messages = localStorage.getItem('messages');

    if (!messages) {
        localStorage.setItem('messages', JSON.stringify({'all': start_messages}));
        messages = localStorage.getItem('messages');
    }

    messages = JSON.parse(messages);
    for (let message of messages.all) {
        createMessageBlock(message, false);
    }
}

function saveMessageToLocalStorage(message) {
    // console.log('save')
    let messages = localStorage.getItem('messages');
    if (!messages) {
        localStorage.setItem('messages', JSON.stringify({'all': []}));
    }
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    messages.all.push(message);
    // console.log('Щя засунем в локал сторадж' + message.isMyMessage + message.sender_name);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function createMessageBlock(message, save = true) {

    let bubble_body = document.createElement('div');
    bubble_body.className = 'bubble-body';

    let name = document.createElement('span');
    name.className = 'name';
    name.innerText = message.sender_name;
    bubble_body.append(name);

    let message_text = document.createElement('span');
    message_text.className = 'message-text';
    message_text.innerText = message.text;
    bubble_body.append(message_text);

    let metadata = document.createElement('div');
    metadata.className = 'metadata';

    let time = document.createElement('span');
    time.className = 'time';
    time.innerText = message.date;
    metadata.append(time);

    let status = document.createElement('div');
    status.className = 'status';
    status.innerHTML = '<span class="material-symbols-outlined">done_all</span>';
    metadata.append(status);

    bubble_body.append(metadata);

    // Bubble
    let bubble = document.createElement('div');
    bubble.className = 'outgoing-message';
    bubble.append(bubble_body);

    // Bubble tail
    let bubble_tail = document.createElement('div');
    bubble_tail.className = 'bubble-tail';
    if (message.isMyMessage) {
        bubble_tail.innerHTML =
            '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.93969 7.84853C3.41987 7.3457 0.654304 4.58013 0.151472 1.06031L0 0V8H8L6.93969 7.84853Z" fill="#fadeff"/></svg>'
        bubble.append(bubble_tail);
    } else {
        bubble.className = 'incoming-message';
        bubble_tail.innerHTML =
            '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.06031 7.84853C4.58013 7.3457 7.3457 4.58013 7.84853 1.06031L8 0V8H0L1.06031 7.84853Z" fill="#ffffff"/></svg>'
        bubble.prepend(bubble_tail)
    }

    /*
        let message_block = document.createElement('div');
        message_block.className = 'message right';
        //message_block.innerText = message.text;

    /!*
        let message_text = document.createElement('div');
        message_text.className = "message-text";
        message_text.innerText = message.text;
        message_block.append(message_text);
    *!/

        let message_meta = document.createElement('div');
        let message_date = document.createElement('div');
        let message_state = document.createElement('div');
        message_meta.className = "message-meta";

        message_date.className = "message-date";
        message_date.innerText = message.date;

        message_state.className = "message-state";
        message_state.innerHTML = "<span class='material-icons'>done_all</span>";

        message_meta.append(message_date);
        message_meta.append(message_state);

        message_block.append(message_meta)
    */

    chat.prepend(bubble);
    // console.log('Cохраняем: ' + save)
    if (save) {
        saveMessageToLocalStorage(message);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if (!input.value) return

    const sender = isMyMessage ? 'Я' : 'Дженифер';

    let time = new Date();
    let message = {
        'text': input.value,
        'date': `${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""}${time.getMinutes()}`,
        'sender_name': sender,
        'isMyMessage': isMyMessage
    };
    createMessageBlock(message);
    input.value = '';

    isMyMessage = !isMyMessage;
}

/*
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}
*/

/*
function handleSubmit(event) {
    event.preventDefault();
    message.innerText = input.value;
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}
*/
