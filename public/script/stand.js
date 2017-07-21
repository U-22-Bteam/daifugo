var socket = io();
var codes = [];

function onReady() {
    var id = window.sessionStorage.getItem('user-id');
    socket.emit('user.ready', id);
}

socket.on('player.card.draw', (code) => {
    codes.push(code);
    console.log(code);
});
socket.on('player.get.cards', codes => console.log(codes));

$(() => {
    $('#ready').click(() => onReady());
});