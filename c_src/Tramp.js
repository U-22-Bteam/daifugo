/**
 * Created by yoshida katsumi on 2017/07/21.
 */
function action() {
    var canvas = document.getElementById('e_click');
    var context = canvas.getContext('2d');

    function eventHandler() {
        draw();
    }

    function draw() {
        // 描画処理
        context.fillRect(images/png/c01.png);
    }

    /* canvas要素に対してイベントを設定 */
    canvas.addEventListener('event', eventHandler, false);
}
action();