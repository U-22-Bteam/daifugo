var container = document.getElementById('canvas-container');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//親要素のサイズをCanvasに指定
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

var image = new Image();
image.src = '..\images\png\C01.png';
// canvas.addEventListener('load', function () {
image.addEventListener('load', function () {
    context.drawImage(image, 0, 0);
}, false);
// });