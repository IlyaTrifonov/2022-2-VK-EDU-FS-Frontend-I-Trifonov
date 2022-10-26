import './styles/index.css';


const form = document.querySelector('.form');
const input = document.querySelector('.form-input');

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
    let messages = localStorage.getItem('messages');
    if (!messages) {
        localStorage.setItem('messages', JSON.stringify({'all': []}));
    }
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    messages.all.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function createMessageBlock(message, save = true) {

    // Bubble body
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

    // Metadata
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
    chat.prepend(bubble);

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
