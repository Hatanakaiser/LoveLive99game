// 問題
let question =[[],[],[],[],[],[],[],[],[]];


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
let Liella=['侑','かのん','可可','千砂都','すみれ','恋','きな子','メイ','四季','夏美','マルガレーテ','冬毬'];
let CheckPlace1=[];
let CheckPlace2=['隣にいる','隣にいない','周辺にいる','周辺にいない'];
let CheckPlace3=[];
let CheckPlace4=[];
let CheckPlace5=[[],[],[],[],[],[],[],[],[]];
let place;
let B=[[],[],[],[],[],[],[],[],[]];
let C=[];
let SelectNumber;
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    CheckPlace5[i].push(0);
  }
}
let Anser1;
let Anser2;


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
        if(selected_val.value=="μs"){
          if(Final[i][j]==1){
            B[i][j].style.backgroundImage="url(μs1.png)";
          }
          if(Final[i][j]==2){
            B[i][j].style.backgroundImage="url(μs2.png)";
          }
          if(Final[i][j]==3){
            B[i][j].style.backgroundImage="url(μs3.png)";
          }
          if(Final[i][j]==4){
            B[i][j].style.backgroundImage="url(μs4.png)";
          }
          if(Final[i][j]==5){
            B[i][j].style.backgroundImage="url(μs5.png)";
          }
          if(Final[i][j]==6){
            B[i][j].style.backgroundImage="url(μs6.png)";
          }
          if(Final[i][j]==7){
            B[i][j].style.backgroundImage="url(μs7.png)";
          }
          if(Final[i][j]==8){
            B[i][j].style.backgroundImage="url(μs8.png)";
          }
          if(Final[i][j]==9){
            B[i][j].style.backgroundImage="url(μs9.png)";
          }
        }
        if(selected_val.value=="Aqours"){
          if(Final[i][j]==1){
            B[i][j].style.backgroundImage="url(Aqours1.png)";
          }
          if(Final[i][j]==2){
            B[i][j].style.backgroundImage="url(Aqours2.png)";
          }
          if(Final[i][j]==3){
            B[i][j].style.backgroundImage="url(Aqours3.png)";
          }
          if(Final[i][j]==4){
            B[i][j].style.backgroundImage="url(Aqours4.png)";
          }
          if(Final[i][j]==5){
            B[i][j].style.backgroundImage="url(Aqours5.png)";
          }
          if(Final[i][j]==6){
            B[i][j].style.backgroundImage="url(Aqours6.png)";
          }
          if(Final[i][j]==7){
            B[i][j].style.backgroundImage="url(Aqours7.png)";
          }
          if(Final[i][j]==8){
            B[i][j].style.backgroundImage="url(Aqours8.png)";
          }
          if(Final[i][j]==9){
            B[i][j].style.backgroundImage="url(Aqours9.png)";
          }
        }
        if(selected_val.value=="Nijigasaki"){
          if(character[Final[i][j]-1]==1){
            B[i][j].style.backgroundImage="url(Nijigasaki1.png)";
          }
          if(character[Final[i][j]-1]==2){
            B[i][j].style.backgroundImage="url(Nijigasaki2.png)";
          }
          if(character[Final[i][j]-1]==3){
            B[i][j].style.backgroundImage="url(Nijigasaki3.png)";
          }
          if(character[Final[i][j]-1]==4){
            B[i][j].style.backgroundImage="url(Nijigasaki4.png)";
          }
          if(character[Final[i][j]-1]==5){
            B[i][j].style.backgroundImage="url(Nijigasaki5.png)";
          }
          if(character[Final[i][j]-1]==6){
            B[i][j].style.backgroundImage="url(Nijigasaki6.png)";
          }
          if(character[Final[i][j]-1]==7){
            B[i][j].style.backgroundImage="url(Nijigasaki7.png)";
          }
          if(character[Final[i][j]-1]==8){
            B[i][j].style.backgroundImage="url(Nijigasaki8.png)";
          }
          if(character[Final[i][j]-1]==9){
            B[i][j].style.backgroundImage="url(Nijigasaki9.png)";
          }
          if(character[Final[i][j]-1]==10){
            B[i][j].style.backgroundImage="url(Nijigasaki10.png)";
          }
          if(character[Final[i][j]-1]==11){
            B[i][j].style.backgroundImage="url(Nijigasaki11.png)";
          }
          if(character[Final[i][j]-1]==12){
            B[i][j].style.backgroundImage="url(Nijigasaki12.png)";
          }
        }
        if(selected_val.value=="Liella"){
          if(character[Final[i][j]-1]==1){
            B[i][j].style.backgroundImage="url(Liella1.png)";
          }
          if(character[Final[i][j]-1]==2){
            B[i][j].style.backgroundImage="url(Liella2.png)";
          }
          if(character[Final[i][j]-1]==3){
            B[i][j].style.backgroundImage="url(Liella3.png)";
          }
          if(character[Final[i][j]-1]==4){
            B[i][j].style.backgroundImage="url(Liella4.png)";
          }
          if(character[Final[i][j]-1]==5){
            B[i][j].style.backgroundImage="url(Liella5.png)";
          }
          if(character[Final[i][j]-1]==6){
            B[i][j].style.backgroundImage="url(Liella6.png)";
          }
          if(character[Final[i][j]-1]==7){
            B[i][j].style.backgroundImage="url(Liella7.png)";
          }
          if(character[Final[i][j]-1]==8){
            B[i][j].style.backgroundImage="url(Liella8.png)";
          }
          if(character[Final[i][j]-1]==9){
            B[i][j].style.backgroundImage="url(Liella9.png)";
          }
          if(character[Final[i][j]-1]==10){
            B[i][j].style.backgroundImage="url(Liella10.png)";
          }
          if(character[Final[i][j]-1]==11){
            B[i][j].style.backgroundImage="url(Liella11.png)";
          }
        }
        B[i][j].style.backgroundSize="cover";
        B[i][j].style.backgroundRepeat="no-repeat";
      } else {
        td.textContent = null;
        td.classList.add("clickenable");
      }
    }
    main.appendChild(tr);
  }

  for (let i = 0; i < 9; i++) {
    let td = document.createElement("td");
    C[i]=td;
    td.onclick = selectClick;
    td.value =i+1;
    select.appendChild(td);
    if(selected_val.value=="μs"){
      if(i==0){
        C[i].style.backgroundImage="url(μs1.png)";
      }
      if(i==1){
        C[i].style.backgroundImage="url(μs2.png)";
      }
      if(i==2){
        C[i].style.backgroundImage="url(μs3.png)";
      }
      if(i==3){
        C[i].style.backgroundImage="url(μs4.png)";
      }
      if(i==4){
        C[i].style.backgroundImage="url(μs5.png)";
      }
      if(i==5){
        C[i].style.backgroundImage="url(μs6.png)";
      }
      if(i==6){
        C[i].style.backgroundImage="url(μs7.png)";
      }
      if(i==7){
        C[i].style.backgroundImage="url(μs8.png)";
      }
      if(i==8){
        C[i].style.backgroundImage="url(μs9.png)";
      }
    }
    if(selected_val.value=="Aqours"){
      if(i==0){
        C[i].style.backgroundImage="url(Aqours1.png)";
      }
      if(i==1){
        C[i].style.backgroundImage="url(Aqours2.png)";
      }
      if(i==2){
        C[i].style.backgroundImage="url(Aqours3.png)";
      }
      if(i==3){
        C[i].style.backgroundImage="url(Aqours4.png)";
      }
      if(i==4){
        C[i].style.backgroundImage="url(Aqours5.png)";
      }
      if(i==5){
        C[i].style.backgroundImage="url(Aqours6.png)";
      }
      if(i==6){
        C[i].style.backgroundImage="url(Aqours7.png)";
      }
      if(i==7){
        C[i].style.backgroundImage="url(Aqours8.png)";
      }
      if(i==8){
        C[i].style.backgroundImage="url(Aqours9.png)";
      }
    }
    if(selected_val.value=="Nijigasaki"){
      if(character[i]==1){
        C[i].style.backgroundImage="url(Nijigasaki1.png)";
      }
      if(character[i]==2){
        C[i].style.backgroundImage="url(Nijigasaki2.png)";
      }
      if(character[i]==3){
        C[i].style.backgroundImage="url(Nijigasaki3.png)";
      }
      if(character[i]==4){
        C[i].style.backgroundImage="url(Nijigasaki4.png)";
      }
      if(character[i]==5){
        C[i].style.backgroundImage="url(Nijigasaki5.png)";
      }
      if(character[i]==6){
        C[i].style.backgroundImage="url(Nijigasaki6.png)";
      }
      if(character[i]==7){
        C[i].style.backgroundImage="url(Nijigasaki7.png)";
      }
      if(character[i]==8){
        C[i].style.backgroundImage="url(Nijigasaki8.png)";
      }
      if(character[i]==9){
        C[i].style.backgroundImage="url(Nijigasaki9.png)";
      }
      if(character[i]==10){
        C[i].style.backgroundImage="url(Nijigasaki10.png)";
      }
      if(character[i]==11){
        C[i].style.backgroundImage="url(Nijigasaki11.png)";
      }
      if(character[i]==12){
        C[i].style.backgroundImage="url(Nijigasaki12.png)";
      }
    }
    if(selected_val.value=="Liella"){
      if(character[i]==1){
        C[i].style.backgroundImage="url(Liella1.png)";
      }
      if(character[i]==2){
        C[i].style.backgroundImage="url(Liella2.png)";
      }
      if(character[i]==3){
        C[i].style.backgroundImage="url(Liella3.png)";
      }
      if(character[i]==4){
        C[i].style.backgroundImage="url(Liella4.png)";
      }
      if(character[i]==5){
        C[i].style.backgroundImage="url(Liella5.png)";
      }
      if(character[i]==6){
        C[i].style.backgroundImage="url(Liella6.png)";
      }
      if(character[i]==7){
        C[i].style.backgroundImage="url(Liella7.png)";
      }
      if(character[i]==8){
        C[i].style.backgroundImage="url(Liella8.png)";
      }
      if(character[i]==9){
        C[i].style.backgroundImage="url(Liella9.png)";
      }
      if(character[i]==10){
        C[i].style.backgroundImage="url(Liella10.png)";
      }
      if(character[i]==11){
        C[i].style.backgroundImage="url(Liella11.png)";
      }
    }
    C[i].style.backgroundSize="cover";
    C[i].style.backgroundRepeat="no-repeat";
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
    if(e.target==C[i]){
      SelectNumber=i+1;
      console.log(SelectNumber);
    }
  }
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(place==B[i][j]){
        Final[i][j]=SelectNumber;
        if(selected_val.value=="μs"){
          if(SelectNumber==1){
            B[i][j].style.backgroundImage="url(μs1.png)";
          }
          if(SelectNumber==2){
            B[i][j].style.backgroundImage="url(μs2.png)";
          }
          if(SelectNumber==3){
            B[i][j].style.backgroundImage="url(μs3.png)";
          }
          if(SelectNumber==4){
            B[i][j].style.backgroundImage="url(μs4.png)";
          }
          if(SelectNumber==5){
            B[i][j].style.backgroundImage="url(μs5.png)";
          }
          if(SelectNumber==6){
            B[i][j].style.backgroundImage="url(μs6.png)";
          }
          if(SelectNumber==7){
            B[i][j].style.backgroundImage="url(μs7.png)";
          }
          if(SelectNumber==8){
            B[i][j].style.backgroundImage="url(μs8.png)";
          }
          if(SelectNumber==9){
            B[i][j].style.backgroundImage="url(μs9.png)";
          }
        }
        if(selected_val.value=="Aqours"){
          if(SelectNumber==1){
            B[i][j].style.backgroundImage="url(Aqours1.png)";
          }
          if(SelectNumber==2){
            B[i][j].style.backgroundImage="url(Aqours2.png)";
          }
          if(SelectNumber==3){
            B[i][j].style.backgroundImage="url(Aqours3.png)";
          }
          if(SelectNumber==4){
            B[i][j].style.backgroundImage="url(Aqours4.png)";
          }
          if(SelectNumber==5){
            B[i][j].style.backgroundImage="url(Aqours5.png)";
          }
          if(SelectNumber==6){
            B[i][j].style.backgroundImage="url(Aqours6.png)";
          }
          if(SelectNumber==7){
            B[i][j].style.backgroundImage="url(Aqours7.png)";
          }
          if(SelectNumber==8){
            B[i][j].style.backgroundImage="url(Aqours8.png)";
          }
          if(SelectNumber==9){
            B[i][j].style.backgroundImage="url(Aqours9.png)";
          }
        }
        if(selected_val.value=="Nijigasaki"){
          if(character[SelectNumber-1]==1){
            B[i][j].style.backgroundImage="url(Nijigasaki1.png)";
          }
          if(character[SelectNumber-1]==2){
            B[i][j].style.backgroundImage="url(Nijigasaki2.png)";
          }
          if(character[SelectNumber-1]==3){
            B[i][j].style.backgroundImage="url(Nijigasaki3.png)";
          }
          if(character[SelectNumber-1]==4){
            B[i][j].style.backgroundImage="url(Nijigasaki4.png)";
          }
          if(character[SelectNumber-1]==5){
            B[i][j].style.backgroundImage="url(Nijigasaki5.png)";
          }
          if(character[SelectNumber-1]==6){
            B[i][j].style.backgroundImage="url(Nijigasaki6.png)";
          }
          if(character[SelectNumber-1]==7){
            B[i][j].style.backgroundImage="url(Nijigasaki7.png)";
          }
          if(character[SelectNumber-1]==8){
            B[i][j].style.backgroundImage="url(Nijigasaki8.png)";
          }
          if(character[SelectNumber-1]==9){
            B[i][j].style.backgroundImage="url(Nijigasaki9.png)";
          }
          if(character[SelectNumber-1]==10){
            B[i][j].style.backgroundImage="url(Nijigasaki10.png)";
          }
          if(character[SelectNumber-1]==11){
            B[i][j].style.backgroundImage="url(Nijigasaki11.png)";
          }
          if(character[SelectNumber-1]==12){
            B[i][j].style.backgroundImage="url(Nijigasaki12.png)";
          }
        }
        if(selected_val.value=="Liella"){
          if(character[SelectNumber-1]==1){
            B[i][j].style.backgroundImage="url(Liella1.png)";
          }
          if(character[SelectNumber-1]==2){
            B[i][j].style.backgroundImage="url(Liella2.png)";
          }
          if(character[SelectNumber-1]==3){
            B[i][j].style.backgroundImage="url(Liella3.png)";
          }
          if(character[SelectNumber-1]==4){
            B[i][j].style.backgroundImage="url(Liella4.png)";
          }
          if(character[SelectNumber-1]==5){
            B[i][j].style.backgroundImage="url(Liella5.png)";
          }
          if(character[SelectNumber-1]==6){
            B[i][j].style.backgroundImage="url(Liella6.png)";
          }
          if(character[SelectNumber-1]==7){
            B[i][j].style.backgroundImage="url(Liella7.png)";
          }
          if(character[SelectNumber-1]==8){
            B[i][j].style.backgroundImage="url(Liella8.png)";
          }
          if(character[SelectNumber-1]==9){
            B[i][j].style.backgroundImage="url(Liella9.png)";
          }
          if(character[SelectNumber-1]==10){
            B[i][j].style.backgroundImage="url(Liella10.png)";
          }
          if(character[SelectNumber-1]==11){
            B[i][j].style.backgroundImage="url(Liella11.png)";
          }
        }
        B[i][j].style.backgroundSize="cover";
        B[i][j].style.backgroundRepeat="no-repeat";
      }
    }
  }
}

//以下STARTを押したときに動く関数
function buttonclick(){
  selected_val = document.getElementById("school");
  console.log(selected_val.value);
  if(selected_val.value=="Nijigasaki"){
    const checkboxes=document.querySelectorAll('input[name="NijiCheck"]:checked');
    for(let i=0;i<9;i++){
      character[i]=checkboxes[i].value;
      CheckPlace1.push(Niji[checkboxes[i].value]);
    }
  }
  if(selected_val.value=="Liella"){
    const checkboxes=document.querySelectorAll('input[name="LiellaCheck"]:checked');
    for(let i=0;i<9;i++){
      character[i]=checkboxes[i].value;
      CheckPlace1.push(Liella[checkboxes[i].value]);
    }
  }
  if(selected_val.value=="μs"){
    for(let i=0;i<9;i++){
      CheckPlace1.push(μ[i])
    }
  }
  if(selected_val.value=="Aqours"){
    for(let i=0;i<9;i++){
      CheckPlace1.push(Aq[i]);
    }
  }

  init();
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

//以下Checkを押したときに動く関数
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
        Anser1=String.fromCharCode(65+j);
        Anser2=i+1;
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
    h2.textContent = "間違いがあります"+Anser1+Anser2;
  }
}

//以下GO!を押したときに動く関数
function Copy(){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      question[i][j]=Final[i][j];
      if(question[i][j]==0){
        for(let k=1;k<10;k++){
          A[i][j].push(k);
        }
      }
    }
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
            for(let m=3*i;m<3*(i+1);m++){
              for(let n=3*j;n<3*(j+1);n++){
                for(let o=0;o<A[m][n].length;o++){
                  if(A[m][n][o]==Final[k][l]){
                    A[m][n].splice(o,1);
                    if(A[m][n].length==1){
                      Final[m][n]=A[m][n][0];
                    }
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
    if(count==10){
      break;
    }
  }
}

function change(){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if(question[i][j]==0){
        if(selected_val.value=="μs"){
          if(Final[i][j]==1){
            B[i][j].style.backgroundImage="url(μs1.png)";
          }
          if(Final[i][j]==2){
            B[i][j].style.backgroundImage="url(μs2.png)";
          }
          if(Final[i][j]==3){
            B[i][j].style.backgroundImage="url(μs3.png)";
          }
          if(Final[i][j]==4){
            B[i][j].style.backgroundImage="url(μs4.png)";
          }
          if(Final[i][j]==5){
            B[i][j].style.backgroundImage="url(μs5.png)";
          }
          if(Final[i][j]==6){
            B[i][j].style.backgroundImage="url(μs6.png)";
          }
          if(Final[i][j]==7){
            B[i][j].style.backgroundImage="url(μs7.png)";
          }
          if(Final[i][j]==8){
            B[i][j].style.backgroundImage="url(μs8.png)";
          }
          if(Final[i][j]==9){
            B[i][j].style.backgroundImage="url(μs9.png)";
          }
        }
        if(selected_val.value=="Aqours"){
          if(Final[i][j]==1){
            B[i][j].style.backgroundImage="url(Aqours1.png)";
          }
          if(Final[i][j]==2){
            B[i][j].style.backgroundImage="url(Aqours2.png)";
          }
          if(Final[i][j]==3){
            B[i][j].style.backgroundImage="url(Aqours3.png)";
          }
          if(Final[i][j]==4){
            B[i][j].style.backgroundImage="url(Aqours4.png)";
          }
          if(Final[i][j]==5){
            B[i][j].style.backgroundImage="url(Aqours5.png)";
          }
          if(Final[i][j]==6){
            B[i][j].style.backgroundImage="url(Aqours6.png)";
          }
          if(Final[i][j]==7){
            B[i][j].style.backgroundImage="url(Aqours7.png)";
          }
          if(Final[i][j]==8){
            B[i][j].style.backgroundImage="url(Aqours8.png)";
          }
          if(Final[i][j]==9){
            B[i][j].style.backgroundImage="url(Aqours9.png)";
          }
        }
        if(selected_val.value=="Nijigasaki"){
          if(character[Final[i][j]-1]==1){
            B[i][j].style.backgroundImage="url(Nijigasaki1.png)";
          }
          if(character[Final[i][j]-1]==2){
            B[i][j].style.backgroundImage="url(Nijigasaki2.png)";
          }
          if(character[Final[i][j]-1]==3){
            B[i][j].style.backgroundImage="url(Nijigasaki3.png)";
          }
          if(character[Final[i][j]-1]==4){
            B[i][j].style.backgroundImage="url(Nijigasaki4.png)";
          }
          if(character[Final[i][j]-1]==5){
            B[i][j].style.backgroundImage="url(Nijigasaki5.png)";
          }
          if(character[Final[i][j]-1]==6){
            B[i][j].style.backgroundImage="url(Nijigasaki6.png)";
          }
          if(character[Final[i][j]-1]==7){
            B[i][j].style.backgroundImage="url(Nijigasaki7.png)";
          }
          if(character[Final[i][j]-1]==8){
            B[i][j].style.backgroundImage="url(Nijigasaki8.png)";
          }
          if(character[Final[i][j]-1]==9){
            B[i][j].style.backgroundImage="url(Nijigasaki9.png)";
          }
          if(character[Final[i][j]-1]==10){
            B[i][j].style.backgroundImage="url(Nijigasaki10.png)";
          }
          if(character[Final[i][j]-1]==11){
            B[i][j].style.backgroundImage="url(Nijigasaki11.png)";
          }
          if(character[Final[i][j]-1]==12){
            B[i][j].style.backgroundImage="url(Nijigasaki12.png)";
          }
        }
        if(selected_val.value=="Liella"){
          if(character[Final[i][j]-1]==1){
            B[i][j].style.backgroundImage="url(Liella1.png)";
          }
          if(character[Final[i][j]-1]==2){
            B[i][j].style.backgroundImage="url(Liella2.png)";
          }
          if(character[Final[i][j]-1]==3){
            B[i][j].style.backgroundImage="url(Liella3.png)";
          }
          if(character[Final[i][j]-1]==4){
            B[i][j].style.backgroundImage="url(Liella4.png)";
          }
          if(character[Final[i][j]-1]==5){
            B[i][j].style.backgroundImage="url(Liella5.png)";
          }
          if(character[Final[i][j]-1]==6){
            B[i][j].style.backgroundImage="url(Liella6.png)";
          }
          if(character[Final[i][j]-1]==7){
            B[i][j].style.backgroundImage="url(Liella7.png)";
          }
          if(character[Final[i][j]-1]==8){
            B[i][j].style.backgroundImage="url(Liella8.png)";
          }
          if(character[Final[i][j]-1]==9){
            B[i][j].style.backgroundImage="url(Liella9.png)";
          }
          if(character[Final[i][j]-1]==10){
            B[i][j].style.backgroundImage="url(Liella10.png)";
          }
          if(character[Final[i][j]-1]==11){
            B[i][j].style.backgroundImage="url(Liella11.png)";
          }
        }
        B[i][j].style.backgroundSize="cover";
        B[i][j].style.backgroundRepeat="no-repeat";
      }
    }
  }
}

//以下Deleteを押したときに動く関数
function Delete(){
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(place==B[i][j]){
        B[i][j].style.backgroundImage="none";
        Final[i][j]=0;
      }
    }
  }
}