/*
 1. プログラムがプレイヤー全員に均等にカードを配る ok
 2. プログラムは配られたカードを各プレイヤーの画面に表示する
 3. 前回大富豪だったプレイヤーは配られたカードから不要なカードを2枚選ぶ
 4. プログラムは前回大貧民だったプレイヤーから最も強いカードを2枚選ぶ ok
 5. プログラムは3と4で選ばれたカードを交換する ok?
 6. 前回富豪だったプレイヤーは配られたカードから不要なカードを1枚ずつ選ぶ
 7. 前回貧民だったプレイヤーは配られたカードから最も強いカードを1枚ずつ選ぶ ok
 8. プログラムは6と7で選ばれたカードを交換する
 9. プログラムは交換が完了したカードを各プレイヤーに表示する
 10. プログラムは前回大貧民だったプレイヤーを親とする
 */

let player:any[] =[3];
let democard:any[] = [53];
player.push({job:"", name:""});

//シャッフルする関数
function Shuffle(array:any) {
    var n = array.length, t, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }
    return array;
}

//カードを配る処理
function Give() {
    let count:number =0;
    democard.forEach(function() {
        if(count%3 ==0) {
            player[0].push({card:democard[count]});
        }else if(count%3 == 1) {
            player[1].push({card:democard[count]});
        }else if(count%3 == 2) {
            player[2].push({card:democard[count]});
        }else if(count%3 == 3){
            player[3].push({card:democard[count]});
        }
        count++;
    })
}

function Exchange(card1:any, card2:any, card3:any, card4:any) {
    let count:number = 0;
    let Primarycard:any, Primarycard2:any;
    Primarycard = card1;
    Primarycard2 = card2;
    card1 = card3;
    card2 = card4;
    card3 = Primarycard;
    card4 = Primarycard2;

    player.forEach(function () {
        if (player[count].job == "greatmillionaire") {
            let playercard:any = player[count].card.democard;
            playercard.forEach(function() {
                if(playercard == null) {
                    playercard = card3;
                if(card3 == null) {
                    playercard = card4;
                }
                card3 = null;
                }
            })
        }

        if(player[count].job=="greatpoor") {
            let playercard:any = player[count].card.democard;
            playercard.forEach(function() {
                if(playercard == null) {
                    playercard = card1;
                    if(card1 == null) {
                        playercard = card2;
                    }
                    card1 = null;
                }
            })
        }
    })
    count++;
}

function Exchange2(card1:any, card2:any) {
    let count:number = 0;
    let Primarycard:any;
    Primarycard = card1;
    card1 = card2;
    card2 = Primarycard;
    player.forEach(function () {
        let playercard:any = player[count].card.democard;
        playercard.forEach(function() {
            if (player[count].job = "poor") {
                if (playercard == null) {
                    playercard = card1;
                }
            }
        })
    })
}


//3の処理
function Change() {
    let count:number = 0;
    let card:any, card1:any, card2:any, card3:any, card4:any;
    let primaricard:any;
    player.forEach(function () {
        if (player[count].job == "greatmillionaire") {

        }

        if(player[count].job=="greatpoor") {
            let playercard:any = player[count].card.democard;
            playercard.forEach(function() {
                if(card2 ==null || card2.rank < playercard.rank && card2.type!="J") {
                    if(card2 != null) {
                        primaricard = card2;
                    }
                    card2=playercard;
                    playercard = null;
                    playercard = primaricard;
                    if(card1 == null || card1 < playercard.rank && card1.type !="J") {
                        card =card1;
                        card1=card2;
                        card2=card;
                    }
                }
                if(playercard.type=="J") {
                    primaricard = card2;
                    card2=card1;
                    card1=playercard;
                    playercard = null;
                    if(card2 == !null) {
                        playercard = primaricard;
                    }
                }
            })
        }

        Exchange(card1,card2, card3, card4);

        if(player[count].job="millionaire") {

        }

        if(player[count].job="poor") {
            let playercard:any = player[count].card.democard;
            playercard.forEach(function() {
                if (card1 == null || card1 < playercard.rank && card1.type != "J") {
                    if(card1 != null) {
                        primaricard = card1;
                    }
                    card1 = playercard;
                    playercard = null;
                    if(card1 != null) {
                        playercard = primaricard;
                    }
                }
                if (playercard.type == "J") {
                    if(card1 != null) {
                        primaricard = card1;
                    }
                    card1 = playercard;
                    playercard = null;
                    if(card1 != null) {
                        playercard = primaricard;
                    }

                }
            })
        }

        count++;
    })
    Exchange2(card1,card2);
}










