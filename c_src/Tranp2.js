/**
 * Created by yoshida katsumi on 2017/07/21.
 */
var targetFlag = false; // trueでマウスが要素に乗っているとみなす
var rect = null;

/* Canvas上にマウスが乗った時 */
function onMouseOver(e) {
    rect = e.target.getBoundingClientRect();
    canvas.addEventListener('mousemove', onMouseMove, false);
}
/* Canvasからマウスが離れた時 */
function onMouseOut() {
    canvas.removeEventListener('mousemove', onMouseMove, false);
}
/* Canvas上でマウスが動いている時 */
function onMouseMove(e) {
    /* マウスが動く度に要素上に乗っているかかどうかをチェック */
    moveActions.updateTargetFlag(e);

    /* 実行する関数には、間引きを噛ませる */
    if (targetFlag) {
        moveActions.throttle(moveActions.over, 50);
    } else {
        moveActions.throttle(moveActions.out, 50);
    }
}

/* mouseMoveで実行する関数 */
var moveActions = {
    timer: null,
    /* targetFlagの更新 */
    updateTargetFlag: function(e) {
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        /* 最後の50は、該当する要素の半サイズを想定 */
        var a = (x > w / 2 - 50);
        var b = (x < w / 2 + 50);
        var c = (y > h / 2 - 50);
        var d = (y < h / 2 + 50);

        targetFlag = (a && b && c && d); // booleanを代入
    },
    /* 連続イベントの間引き */
    throttle: function(targetFunc, time) {
        var _time = time || 100;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            targetFunc();
        }, _time);
    },
    out: function() {
        drawRect();
    },
    over: function() {
        drawRectIsHover();
    }
};

function drawRect(color) {
    // デフォルトもしくはマウスが要素から離れた時の描画処理
}
function drawRectIsHover() {
    // マウスが要素に乗った時の描画処理
}

canvas.addEventListener('mouseover', onMouseOver, false);
canvas.addEventListener('mouseout', onMouseOut, false);

drawRect();