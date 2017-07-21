var socket = io();

function onSubmit() {
    var username = $('#name').val();
    if (!username) { return false; }
    
    socket.emit('user.join', username);
}

function registerId(id) {
    window.sessionStorage.setItem('user-id', id);
}

socket.on('accept.join', id => registerId(id));

$(() => {
    $('#join').click(() => onSubmit());
    $('form').submit(() => onSubmit());
});