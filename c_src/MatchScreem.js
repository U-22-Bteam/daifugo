var container = document.getElementById('canvas-container');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//親要素のサイズをCanvasに指定
canvas.width = container.clientWidth;
canvas.height = container.clientHeight; 