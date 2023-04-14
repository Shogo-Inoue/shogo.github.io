'use strict';
// please do not delete the 'use strict' line above

//変数の初期設定
let action = false;
let colorButton = document.getElementById("color-button")

//写真の初期設定
const photo_FND15 = [];
for (let i = 0; i < 31; i++) {

  //ローカルファイルに写真を保存したのを使用
  //failFalder :FND_photo
  photo_FND15.push(`FND15_photo/photo_${i}.png`);
}

//関数の初期設定
const changeButton = outerfunc();

//クリックイベントで背景色の変更
console.log(1, action);
document.getElementById('color-button').addEventListener('click', changeColor)
console.log(2, action);


//背景色の変更
function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line

  //背景色のRGBの数値をランダムで取得
  let randomColorRed = Math.floor(Math.random() * 256);
  let randomColorGreen = Math.floor(Math.random() * 256);
  let randomColorBlue = Math.floor(Math.random() * 256);

  //背景色にrgbの色コードの文字列を代入
  document.body.style.backgroundColor = `rgb(${randomColorRed},${randomColorGreen},${randomColorBlue})`;


  //以下に追加機能のコードを入力

  //ボタンの形状・背景色を変更
  action = changeButton();

  //ボタンの形状変更の後に、スライドショーを実行
  if (action) {
    const photoSlideshow = outerfunc1();
    photoSlideshow();
  }

}


//ボタンの形状・背景色を変更
function outerfunc() {
  let buttonHeight = 40;
  let buttonWidth = 200;
  let buttonRadius = 10;

  function changeButtonStyle() {
    // let colorButton = document.getElementById("color-button")

    //ボタン色の色コードの数値をランダムで取得し。１６進数へ変換
    let randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
    colorButton.style.backgroundColor = `#${randomColor}`;

    //ボタンの形状の縦横をそろえるまで変更
    if (buttonHeight !== buttonWidth) {
      buttonHeight += 10;
      buttonWidth -= 10;
    }
    //ボタンの形状が真円になるまで変更
    if (buttonHeight / 2 !== buttonRadius) {
      buttonRadius += 5;
    } else if (buttonHeight <= 500) {
      //真円になったら一定に大きくなるように変更
      buttonHeight += 50;
      buttonWidth += 50;
      buttonRadius += 25;
    } else {
      alert("スライドショーが始まります");
      return true;
    }
    colorButton.style.height = `${buttonHeight}px`;
    colorButton.style.width = `${buttonWidth}px`;
    colorButton.style.borderRadius = `${buttonRadius}px`
  }
  console.log(4, action);
  return changeButtonStyle;
}


//ボタンにスライドショーで写真を表示
let counter = 0;

function outerfunc1() {
  colorButton.style.height = "500px";
  colorButton.style.width = "500px";
  colorButton.style.borderRadius = "10px";
  colorButton.style.backgroundPosition = "center";
  colorButton.style.backgroundRepeat = "no-repeat";

  colorButton.innerHTML = "";

  let timerID = "";

  //最後の集合写真を表示
  function slideshow() {
    const photo = document.getElementById("color-button")
    photo.addEventListener("mouseleave", () => timerID = setInterval(showPic, 500));
    photo.addEventListener("mouseover", returnPic);

    function showPic() {
      if (counter === photo_FND15.length) {
        counter = 0;
      }
      colorButton.style.backgroundImage = `url(${photo_FND15[counter]})`;
      colorButton.style.backgroundSize = "contain";
      counter++
    }

    function returnPic() {
      clearInterval(timerID);
    }
  }
  return slideshow;
}
