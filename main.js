// 問題
let question = [
  [8, 7, 1, 0, 0, 0, 5, 6, 4],
  [0, 9, 5, 0, 1, 7, 2, 3, 8],
  [2, 0, 3, 4, 5, 8, 0, 7, 1],
  [0, 2, 0, 1, 0, 3, 7, 9, 5],
  [0, 1, 9, 2, 7, 0, 8, 4, 3],
  [7, 0, 4, 0, 8, 5, 0, 0, 2],
  [1, 5, 0, 0, 0, 4, 3, 8, 0],
  [0, 8, 7, 5, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 3, 2, 1, 0, 7],
];

let A=[
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]]
];
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    if(question[i][j]==0){
      for(let k=1;k<10;k++){
        A[i][j].push(k);
      }
    }
  }
}

let Final=[[],[],[],[],[],[],[],[],[]];
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    question[i][j]=0;
    Final[i][j]=question[i][j];
  }
}
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
let place;
let B=[[],[],[],[],[],[],[],[],[]];
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    CheckPlace5[i].push(0);
  }
}
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
  console.log(question);

  init();
}

// ゲーム画面生成
function init() {
  let main = document.querySelector(".main");
  let select = document.querySelector(".select");
  for (let i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 9; j++) {
      let td = document.createElement("td");
      td.onclick = mainClick;
      B[i][j]=td;
      tr.appendChild(td);
      if (question[i][j] != 0) {
        td.classList.add("clickdisable");
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
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(place==B[i][j]){
        Final[i][j]=e.target.value;
        let img=document.createElement("img");
        img.src=(selected_val.value+character[e.target.value-1]+".png");
        place.appendChild(img);
      }
    }
  }
}

function who1(){
  var select = document.getElementById('who1');
  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<9;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace1[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function who2(){
  var select = document.getElementById('who2');
  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<9;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace1[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function who3()
{
  var select = document.getElementById('who3');
  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<9;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace1[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function who4()
{
  var select = document.getElementById('who4');

  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<9;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace1[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function place1()
{
  var select = document.getElementById('place1');

  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<4;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace2[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function place2()
{
  var select = document.getElementById('place2');

  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<4;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace2[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
}
function place3()
{
  var select = document.getElementById('place3');

  while (0 < select.childNodes.length) {
    select.removeChild(select.childNodes[0]);
  }
  
  for(i=0;i<4;i++){
    var option = document.createElement('option');
    var text = document.createTextNode(CheckPlace2[i]);
    option.appendChild(text);
    select.appendChild(option);
  }
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
}


// 正解判定
function check() {
  const h2 = document.querySelector("h2");
  const tr = document.querySelectorAll(".main tr");
  let checkFlag = true;
  // 横計算
  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 9; j++) {
      sum +=Final[i][j];
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
      sum +=Final[j][i];
    }
    if (sum != 45) {
      checkFlag = false;
      break;
    }
  }
  //Box計算
  let sum=[[0,0,0],[0,0,0],[0,0,0]];
  for(let i=0;i<3;i++){      
    for(let j=0;j<3;j++){
      for(let k=3*i;k<3*(i+1);k++){
        let td=tr[k].querySelectorAll("td");
        for(let l=3*j;l<3*(j+1);l++){
          sum[i][j]+=Final[k][l];
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
    h2.textContent = "正解です!!"+Anser1+Anser2;
  } else {
    h2.textContent = "間違いがあります";
  }
}

function Anser(){
  let clear=1;
  let count=0;
  while(clear==1){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        for(let k=0;k<9;k++){
          for(let l=0;l<A[i][k].length;l++){
            if(A[i][k][l]==Final[i][j]){
              A[i][k].splice(l,1);
              if(A[i][k].length==1){
                Final[i][k]=A[i][k][0];
              }
            }
          }
          for(let l=0;l<A[k][i].length;l++){
            if(A[k][i][l]==Final[j][i]){
              A[k][i].splice(l,1);
              if(A[k][i].length==1){
                Final[k][i]=A[k][i][0];
              }
            }
          }
        }
      }
    }
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        for(let k=3*i;k<3*(i+1);k++){
          for(let l=3*j;l<3*(j+1);l++){
            for(let m=3*j;m<3*(j+1);m++){
              for(let n=0;n<A[k][m].length;n++){
                if(A[k][m][n]==Final[k][l]){
                  A[k][m].splice(n,1);
                  if(A[k][m].length==1){
                    Final[k][m]=A[k][m][0];
                  }
                }
              }
            }
          }
        }
      }
    }
    let sum=0;
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        sum+=Final[i][j];
      }
    }
    if(sum==405){
      clear=0;
    }
    count++;
  }
  console.log(Final);
  console.log(count);
}

function change(){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if(question[i][j]==0){
        let img=document.createElement("img");
        img.src=(selected_val.value+character[Final[i][j]-1]+".png");
        B[i][j].appendChild(img);
      }
    }
  }
}

function Copy(){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      question[i][j]=Final[i][j];
    }
  }
}

