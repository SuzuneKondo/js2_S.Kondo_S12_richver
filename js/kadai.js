//繋がっているかかくにん
// alert(1111);


//ライフの数０から
let winCount=0;
let loseCount=0;
//試合数
let gameCount=0;


// 自分がグー（防御）を出したとき

$(".action__btn_gu").on("click",function(){

    //乱数---kが自分の手（グー）、rが相手の技（ランダム）
    const k=1;
    const r=Math.ceil(Math.random()*3);

    //if分岐処理--相手の手が何になるか
    let view="";
    if(r===1){
        console.log("防御");
        view='中段防御';
        img=$('.player-image-cp').attr("src","img/uke.png");
    }else if(r===2){
        console.log("中段突き");
        view='中段突き';
        img=$('.player-image-cp').attr("src","img/tuki.png");
    }else if(r===3){
        console.log("上段回し蹴り");
        view='上段回し蹴り';
        img=$('.player-image-cp').attr("src","img/keri.png");
    }

    //表示処理---相手の手rが決まった→自分のグーkとの組み合わせで結果表示
    $(".hantei-text-cp").html(view);
    
    let kekka="";
    if(k===1&&r===1){
        console.log("引き分け");
        kekka='引分け！続けてはじめ！';
    }else if(k===1&&r===2){
        console.log("勝ち");
        kekka='赤『防御』有効！';
        winCount = winCount + 1;
            if(winCount===1){
                $(".meter-cp1").remove();
            }else if(winCount===2){
                $(".meter-cp2").remove();
            }else if(winCount===3){
                $(".meter-cp3").remove();
                $('.pic-me').fadeIn(1000);
                $('.pic-me').fadeOut(1000);
            }
        console.log('CPライフ-'+winCount);
        $(".player-image-me").animate({"marginRight":"100px"});
    }else if(k===1&&r===3){
        console.log("負け");
        kekka='青『回し蹴り』一本！';
        loseCount = loseCount + 1;
            if(loseCount===1){
                $(".meter-me3").remove();
            }else if(loseCount===2){
                $(".meter-me2").remove();
            }else if(loseCount===3){
                $(".meter-me1").remove();
                $('.pic-cp').fadeIn(1000);
                $('.pic-cp').fadeOut(1000);
            }
        console.log('MEライフ-'+loseCount);
        $(".player-image-cp").animate({"marginLeft":"100px"});
    }

    gameCount = gameCount + 1;
    console.log('試合数'+gameCount)
    $(".judgement").html(kekka);

//試合結果の表示を変える
let fightResult="";
if(loseCount===3){
    fightResult='敗戦…';
}else if(winCount===3){
    fightResult='勝利！';
}else if(winCount<=2 || loseCount<=2){
    fightResult='Round'+gameCount;
}
$(".hantei-title").html(fightResult);

});


// 自分がチョキ（中段突き）を出したとき

$(".action__btn_cho").on("click",function(){
    //乱数
    const k=2;
    const r=Math.ceil(Math.random()*3);

    //if分岐処理
    let view="";
    if(r===1){
        console.log("防御");
        view='中段防御';
        img=$('.player-image-cp').attr("src","img/uke.png");
    }else if(r===2){
        console.log("中段突き");
        view='中段突き';
        img=$('.player-image-cp').attr("src","img/tuki.png");
    }else if(r===3){
        console.log("上段回し蹴り");
        view='上段回し蹴り';
        img=$('.player-image-cp').attr("src","img/keri.png");
    }

    //表示処理
    $(".hantei-text-cp").html(view);

    let kekka="";
    if(r===1&&k===2){
        console.log("負け");
        kekka='青『防御』有効！';
        loseCount = loseCount + 1;
            if(loseCount===1){
                $(".meter-me3").remove();
            }else if(loseCount===2){
                $(".meter-me2").remove();
            }else if(loseCount===3){
                $(".meter-me1").remove();
                $('.pic-cp').fadeIn(1000);
                $('.pic-cp').fadeOut(1000);
            }
        console.log('MEライフ-'+loseCount);
        $(".player-image-cp").animate({"marginLeft":"100px"});
    }else if(r===2&&k===2){
        console.log("あいこ");
        kekka='引分け！続けてはじめ！';
    }else if(r===3&&k===2){
        console.log("勝ち");
        kekka='赤『中段突き』有効！';
        winCount = winCount + 1;
            if(winCount===1){
                $(".meter-cp1").remove();
            }else if(winCount===2){
                $(".meter-cp2").remove();
            }else if(winCount===3){
                $(".meter-cp3").remove();
                $('.pic-me').fadeIn(1000);
                $('.pic-me').fadeOut(1000);
            }
        console.log('CPライフ-'+winCount);
        $(".player-image-me").animate({"marginRight":"100px"});
    }

    gameCount = gameCount + 1;
    console.log('試合数'+gameCount)
    $(".judgement").html(kekka);

//試合結果の表示を変える
let fightResult="";
if(loseCount===3){
    fightResult='敗戦…';
}else if(winCount===3){
    fightResult='勝利！';
}else if(winCount<=2 || loseCount<=2){
    fightResult='Round'+gameCount;
}
$(".hantei-title").html(fightResult);

});

// 自分がパー（上段回し蹴り）を出したとき

$(".action__btn_pa").on("click",function(){
    //乱数
    const k=3;
    const r=Math.ceil(Math.random()*3);

    //if分岐処理
    let view="";
    if(r===1){
        console.log("防御");
        view='中段防御';
        img=$('.player-image-cp').attr("src","img/uke.png");
    }else if(r===2){
        console.log("中段突き");
        view='中段突き';
        img=$('.player-image-cp').attr("src","img/tuki.png");
    }else if(r===3){
        console.log("上段回し蹴り");
        view='上段回し蹴り';
        img=$('.player-image-cp').attr("src","img/keri.png");
    }

    //表示処理
    $(".hantei-text-cp").html(view);

    let kekka="";
    if(r===1&&k===3){
        console.log("勝ち");
        kekka='赤『回し蹴り』一本！';
        winCount = winCount + 1;
            if(winCount===1){
                $(".meter-cp1").remove();
            }else if(winCount===2){
                $(".meter-cp2").remove();
            }else if(winCount===3){
                $(".meter-cp3").remove();
                $('.pic-me').fadeIn(1000);
                $('.pic-me').fadeOut(1000);
            }
        console.log('CPライフ-'+winCount);
        $(".player-image-me").animate({"marginRight":"100px"});
    }else if(r===2&&k===3){
        console.log("負け");
        kekka='青『中段突き』有効！';
        loseCount = loseCount + 1;
            if(loseCount===1){
                $(".meter-me3").remove();
            }else if(loseCount===2){
                $(".meter-me2").remove();
            }else if(loseCount===3){
                $(".meter-me1").remove();
                $('.pic-cp').fadeIn(1000);
                $('.pic-cp').fadeOut(1000);
            }
        console.log('MEライフ-'+loseCount);
        $(".player-image-cp").animate({"marginLeft":"100px"});
    }else if(r===3&&k===3){
        console.log("あいこ");
        kekka='引分け！続けてはじめ！';
    }

    gameCount = gameCount + 1;
    console.log('試合数'+gameCount)
    $(".judgement").html(kekka);

//試合結果の表示を変える
let fightResult="";
if(loseCount===3){
    fightResult='敗戦…';
}else if(winCount===3){
    fightResult='勝利！';
}else if(winCount<=2 || loseCount<=2){
    fightResult='Round'+gameCount;
}
$(".hantei-title").html(fightResult);

});


//-----自分の技を出す＋画像を変える-----//


$(".action__btn_gu").on("click",function(){
    console.log("防御");
    const me='中段防御';
    //技の表示処理
    $(".hantei-text-me").html(me);
    //画像の表示処理
    $(".player-image-me").attr("src","img/uke.png");
    return false;
});

$(".action__btn_cho").on("click",function(){
    console.log("中段突き");
    const me='中段突き';
    //表示処理
    $(".hantei-text-me").html(me);
    //画像の表示処理
    $(".player-image-me").attr("src","img/tuki.png");
    return false;
});

$(".action__btn_pa").on("click",function(){
    console.log("上段回し蹴り");
    const me='上段回し蹴り';
    //表示処理
    $(".hantei-text-me").html(me);
    //画像の表示処理
    $(".player-image-me").attr("src","img/keri.png");
    return false;
});



//試しに入れてみたゲージ

// const frontGauge = document.getElementById("front-gauge");
// const backGauge = document.getElementById("back-gauge");
// const comboLimit = 1000;
// let life = 100;
// let backGaugeIsAnimation = false;
// let gaugeMode = "full";
// let damagedTime  = new Date().getTime();

// // fadeoutアニメーション開始時
// backGauge.addEventListener("animationstart", () => {
//     backGaugeIsAnimation = true;
// });

// // fadeoutアニメーション終了時
// backGauge.addEventListener("animationend", () => {
//     backGauge.style.width = life + "%";
//     backGauge.classList.remove("fadeout");
//     backGaugeIsAnimation = false;
// });

// // *** 攻撃ボタン *** //
// function attack(damage){
//     // ゲージ状態更新
//     if ( gaugeMode === "full" ){
//         frontGauge.classList.remove("full");
//         backGauge.classList.remove("full");
//         frontGauge.classList.add("normal");
//         gaugeMode = "normal";
//     }
    
//     // ダメージ処理
//     life < damage ? life = 0 : life -= damage;
//     frontGauge.style.width = life + "%";
//     damagedTime = new Date().getTime();
    
//     // 進行中のfadeoutアニメーションを終了
//     if ( backGaugeIsAnimation ){
//         backGauge.classList.remove("fadeout");
//         void backGauge.offsetWidth;
//     }
//     // fadeoutアニメーション開始
//     backGauge.classList.add("fadeout");
// }