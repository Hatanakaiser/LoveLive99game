// 問題
let question = [
    [1,2,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [3,1,2,6,4,5,9,7,8],
    [6,4,5,9,7,8,3,1,2],
    [9,7,8,3,1,2,6,4,5],
    [2,3,1,5,6,4,8,9,7],
    [5,6,4,8,9,7,2,3,1],
    [8,9,7,2,3,1,5,6,4]
  ];

  let character=[1,2,3,4,5,6,7,8,9];
  let select_charcter=0;
  let selected_val = document.getElementById("school");
  let μ=['穂乃果','絵里','ことり','海未','凛','真姫','希','花陽','にこ'];
  let Aq=['千歌','梨子','果南','ダイヤ','曜','善子','花丸','鞠莉','ルビィ'];
  let Niji=['侑','歩夢','かすみ','しずく','果林','愛','彼方','せつ菜','エマ','璃奈','栞子','ミア','嵐珠'];
  let CheckPlace1=[];
  let CheckPlace2=['隣にいる','隣にいない','周辺にいる','周辺にいない'];
  let CheckPlace3=[];
  let CheckPlace4=[];
  let CheckPlace5=[[],[],[],[],[],[],[],[],[]];
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        question[i][j]=0;
      CheckPlace5[i].push(0);
    }
  }
  let Final=[[],[],[],[],[],[],[],[],[]];
  let Anser1;
  let Anser2;
  function buttonclick(){
    selected_val = document.getElementById("school");
    console.log(selected_val.value);
    if(selected_val.value=="Nijigasaki"){
      const checkboxes=document.querySelectorAll('input[name="checkItem"]:checked');
      for(let i=0;i<9;i++){
        character[i]=checkboxes[i].value;
        CheckPlace1.push(Niji[checkboxes[i].value]);
      }
    }
    if(selected_val.value=="μ's"){
      for(let i=0;i<9;i++){
        CheckPlace1.push(μ[i])
      }
    }
    if(selected_val.value=="Aqours"){
      for(let i=0;i<9;i++){
        CheckPlace1.push(Aq[i]);
      }
    }
    console.log(CheckPlace1);
  
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
    console.log(e.target.value);
  }
}
  

  function who1()
  {
    var select = document.getElementById('who1');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<9;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace1[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function who2()
  {
    var select = document.getElementById('who2');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<9;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace1[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function who3()
  {
    var select = document.getElementById('who3');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<9;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace1[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function who4()
  {
    var select = document.getElementById('who4');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<9;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace1[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function place1()
  {
    var select = document.getElementById('place1');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<4;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace2[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function place2()
  {
    var select = document.getElementById('place2');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<4;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace2[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }
  function place3()
  {
    var select = document.getElementById('place3');
  
    // option要素を削除（方法はいろいろありますが）
    while (0 < select.childNodes.length) {
      select.removeChild(select.childNodes[0]);
    }
    
    for(i=0;i<4;i++){
      // option要素を生成
      var option = document.createElement('option');
      var text = document.createTextNode(CheckPlace2[i]);
      option.appendChild(text);
    
      // option要素を追加
      select.appendChild(option);
    }
  
    // 必要な分だけoption生成と追加を繰り返す
  }

  function setting(){
    CheckPlace3.splice(0);
    CheckPlace4.splice(0);
    for(let i=0;i<4;i++){
    let PlaceCharacter = document.getElementById("who"+(i+1));
      for(let j=0;j<9;j++){
        if(PlaceCharacter.value==CheckPlace1[j]){
          CheckPlace3.push(j);
        }
      }
      if(i==3){
        break;
      }
      let WherePlace = document.getElementById("place"+(i+1));
      for(let j=0;j<4;j++){
        if(WherePlace.value==CheckPlace2[j]){
          CheckPlace4.push(j);
        }
      }
    }
    console.log(CheckPlace3,CheckPlace4);
    console.log(Final);
  }

  function Check1(){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        if(Final[i][j]==(CheckPlace3[0]+1)){
          CheckPlace5[i][j]=1;
        }
      }
    }
  }
  function Check2(){
    let flag;
    for(let k=0;k<3;k++){
      for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
          flag=0;
          if(CheckPlace5[i][j]==1){
            if(CheckPlace4[k]>1){
              if(i!=0&&j!=0){
                if(Final[i-1][j-1]==CheckPlace3[k+1]+1){
                  flag++;
                }
              }
              if(i!=8&&j!=0){
                if(Final[i+1][j-1]==CheckPlace3[k+1]+1){
                  flag++;
                }
              }
              if(i!=0&&j!=8){
                if(Final[i-1][j+1]==CheckPlace3[k+1]+1){
                  flag++;
                }
              }
              if(i!=8&&j!=8){
                if(Final[i+1][j+1]==CheckPlace3[k+1]+1){
                  flag++;
                }
              }
            }
            if(i!=0){
              if(Final[i-1][j]==CheckPlace3[k+1]+1){
                flag++;
              }
            }
            if(i!=8){
              if(Final[i+1][j]==CheckPlace3[k+1]+1){
                flag++;
              }
            }
            if(j!=0){
              if(Final[i][j-1]==CheckPlace3[k+1]+1){
                flag++;
              }
            }
            if(j!=8){
              if(Final[i][j+1]==CheckPlace3[k+1]+1){
                flag++;
              }
            }
            if(CheckPlace4[k]%2==0){
              if(flag==0){
                CheckPlace5[i][j]=0;
              }
            }else{
              if(flag!=0){
                CheckPlace5[i][j]=0;
              }
            }
          }
        }
      }
    }
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        if(CheckPlace5[i][j]==1){
          Anser1=i+1;
          Anser2=String.fromCharCode(65+j);
        }
      }
    }
    console.log(CheckPlace5);
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
            let td=tr[k].querySelectorAll("td");
            for(let l=3*j;l<3*(j+1);l++){
              sum[i][j]+=Number(td[l].textContent);
              Final[k][l]=Number(td[l].textContent);
            }
          }
        }
      }
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          console.log(sum[i][j]);
        if (sum[i][j] != 45) {
          checkFlag = false;
          break;
          }
        }
      }
      if (checkFlag) {
        h2.textContent = "正解です!!"+Anser1+Anser2;
      } else {
        h2.textContent = "間違いがあります";
      }
    }
