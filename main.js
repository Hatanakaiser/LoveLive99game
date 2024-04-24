// 問題
const question = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ];

  let character=[1,2,3,4,5,6,7,8,9];
  let select_charcter=0;
  let selected_val = document.getElementById("school");

  function buttonclick(){
    selected_val = document.getElementById("school");
    console.log(selected_val.value);
    if(selected_val.value=="Nijigasaki"){
      const checkboxes=document.querySelectorAll('input[name="checkItem"]:checked');

      for(let i=0;i<9;i++){
        character[i]=checkboxes[i].value;
      }
    }
  
  // クリックされた要素を保持
  let place;
  
  init();
  // ゲーム画面生成
  function init() {
    
    const main = document.querySelector(".main");
    const select = document.querySelector(".select");
    
    for (let i = 0; i < 9; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < 9; j++) {
        let td = document.createElement("td");
        td.onclick = mainClick;
        tr.appendChild(td);
        if (question[i][j] != 0) {
            td.classList.add("clickdisable");
            td.textContent = question[i][j];
            let img=document.createElement("img");
            img.src=(selected_val.value+character[question[i][j]-1]+".png");
            td.appendChild(img);
        } else {
          td.textContent = null;
          td.classList.add("clickenable");
        }
      }
      main.appendChild(tr);
    }
  
    for (let i = 0; i < 9; i++) {
      let td = document.createElement("td");
      td.onclick = selectClick;
      td.value = i + 1;
      select.appendChild(td);
      td.textContent = i + 1;
      let img=document.createElement("img");
      img.src=(selected_val.value+character[i]+".png");
      td.appendChild(img);
    }
  }
  
  // 問題パネルのマスが押された時の処理
  function mainClick(e) {
    if (place != undefined) {
      place.classList.remove("mainClick");
    }
  
    place = e.target;
    place.classList.add("mainClick");
  }
  
  // 数字選択のマスが押された時の処理
  function selectClick(e) {
    place.textContent = e.currentTarget.value;
    let img=document.createElement("img");
    img.src=(selected_val.value+character[e.target.value-1]+".png");
    place.appendChild(img);
  }
}
  // 正解判定
  function check() {
    const h2 = document.querySelector("h2");
    const tr = document.querySelectorAll(".main tr");
    let checkFlag = true;
    // 横計算
    for (let i = 0; i < 9; i++) {
      let sum = 0;
      let td = tr[i].querySelectorAll("td");
      for (let j = 0; j < 9; j++) {
        sum += Number(td[j].textContent);
      }
      if (sum != 45) {
        checkFlag = false;
        break;
      }
    }
    // 縦計算
    for (let i = 0; i < 9; i++) {
      let sum = 0;
      for (let j = 0; j < 9; j++) {
        let td = tr[j].querySelectorAll("td");
        sum += Number(td[i].textContent);
      }
      if (sum != 45) {
        checkFlag = false;
        break;
      }
    }
    let sum=[[0,0,0],[0,0,0],[0,0,0]];
    for(let i=0;i<3;i++){      
      for(let j=0;j<3;j++){
        for(let k=3*i;k<3*(i+1);k++){
          for(let l=3*j;l<3*(j+1);l++){
            let td=tr[l].querySelectorAll("td");
            sum[i][j]+=Number(td[k].textContent);
          }
        }
      }
    }
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){ 
      if (sum[i][j] != 45) {
        checkFlag = false;
        break;
        }
      }
    }
    if (checkFlag) {
      h2.textContent = "正解です!!";
    } else {
      h2.textContent = "間違いがあります";
    }
  }
