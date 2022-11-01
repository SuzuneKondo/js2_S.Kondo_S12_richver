//繋がっているかかくにん
// alert(1111);

// 自分がグー（防御）を出したとき

$(".action__btn_gu").on("click",function(){
    //乱数
    const k=1;
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
    if(r===1&&k===1){
        console.log("引き分け");
        kekka='引分け！続けてはじめ！';
    }else if(r===2&&k===1){
        console.log("勝ち");
        kekka='赤『防御』有効！';
        $(".player-image-me").animate({"marginRight":"100px"});
        count += 1;
            if(count===1){
                $(".cplife1").remove();
            }else if(count===2){
                $(".cplife2").remove();
            }else if(count===3){
                $(".cplife3").remove();
            }
    }else if(r===3&&k===1){
        console.log("負け");
        kekka='青『回し蹴り』一本！';
        $(".player-image-cp").animate({"marginLeft":"100px"});
        count += 1;    
            if(count===1){
                $(".melife1").remove();
            }else if(count===2){
                $(".melife2").remove();
            }else if(count===3){
                $(".melife3").remove();
            }
    }

    $(".judgement").html(kekka);
    $(".hantei-title").text('【 試合結果 】');

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
        $(".player-image-cp").animate({"marginLeft":"100px"});
    }else if(r===2&&k===2){
        console.log("あいこ");
        kekka='引分け！続けてはじめ！';
    }else if(r===3&&k===2){
        console.log("勝ち");
        kekka='赤『中段突き』有効！';
        $(".player-image-me").animate({"marginRight":"100px"});
    }

    $(".judgement").html(kekka);
    $(".hantei-title").text('【 試合結果 】');

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
        $(".player-image-me").animate({"marginRight":"100px"});
    }else if(r===2&&k===3){
        console.log("負け");
        kekka='青『中段突き』有効！';
        $(".player-image-cp").animate({"marginLeft":"100px"});
    }else if(r===3&&k===3){
        console.log("あいこ");
        kekka='引分け！続けてはじめ！';
    }

    $(".judgement").html(kekka);
    $(".hantei-title").text('【 試合結果 】');
});


//自分の技を出す＋画像を変える

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