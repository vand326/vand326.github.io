let img;

var scoreArr = [8.37, 8.74, 8.99, 8.54];
var scoreArr1 = [8.56, 7.23, 7.44, 7.63];
var scoreArr2 = [7.20, 7.24, 7.91, 6.71];
var scoreArr3 = [7.54, 6.81, 7.70, 6.45];
var scoreArr4 = [7.09, 6.38, 6.15, 6.20];
var scoreArr5 = [7.57, 6.99, 7.30, 6.92];
var scoreArr6 = [5.78, 7.12, 7.74, 5.21];
var scoreArr7 = [6.09, 5.99, 5.57, 5.44];
var scoreArr8 = [6.03, 6.73, 4.93, 5.63];
var scoreArr9 = [5.52, 6.13, 7.28, 6.03];
var scoreArr10 = [8.53, 6.99, 8.24, 7.79];
var scoreArr11 = [6.75, 8.25, 8.23, 8.79];
var scoreArr12 = [6.84, 8.55, 6.86, 7.16];

function preload() {


  //tate no yuusha
  img = loadImage('https://cdn.myanimelist.net/images/anime/1068/97169.jpg?s=6833caf0a97e94cca3d59fd5ea44c2ac');
  img1= loadImage('https://cdn.myanimelist.net/images/anime/1125/96929.jpg?s=9a6c5cf17e71fd8a6da796ee670610a6');
  img2= loadImage('https://cdn.myanimelist.net/images/anime/1918/96303.jpg?s=2c35fd30b95cf4df4d59faa1c7779359');
  img3= loadImage('https://cdn.myanimelist.net/images/anime/1291/97023.jpg?s=d2f8b8d654831b657fb0e5e1aec1ed5d');
//-----------

  //dororo
  img4= loadImage('https://cdn.myanimelist.net/images/anime/1933/97061.jpg?s=a78d6c4373ae407364066e833801c4d0');
  img5= loadImage('https://cdn.myanimelist.net/images/anime/1021/95670.jpg?s=db451de2a2ce1cad4428d36c35da5b9f');
  img6= loadImage('https://cdn.myanimelist.net/images/anime/1496/96519.jpg?s=6b9bf585e58085b37da35c16a47fa974');
  img7= loadImage('https://cdn.myanimelist.net/images/anime/1819/97947.jpg?s=dbb942d91aa9f1bbe4596e3068fae1b3');
//-----------------

  //boogiepop
  img8= loadImage('https://cdn.myanimelist.net/images/anime/1135/95454.jpg?s=75ab71f7f6604979d42935a77ab1abfc');
  img9 = loadImage('https://cdn.myanimelist.net/images/anime/1295/97615.jpg?s=185439b5c4c3fdb7b93eb94d05948a01');
  img10= loadImage('https://cdn.myanimelist.net/images/anime/1634/97368.jpg?s=87f1006c99a8b00553df9180254511aa');
  img11= loadImage('https://cdn.myanimelist.net/images/anime/1580/95199.jpg?s=7118fa62ceabc0123e9f85e09c42063c');

//---------------------

  //watashi ni tenshi
  img12= loadImage('https://cdn.myanimelist.net/images/anime/1030/96183.jpg?s=328140c0c0ac8cfe7e2080ac5dcbd2e1');
  img13= loadImage('https://cdn.myanimelist.net/images/anime/1276/96178.jpg?s=fb096ce75c054fce49c55316117263be');
  img14= loadImage('https://cdn.myanimelist.net/images/anime/1941/97219.jpg?s=84e0035dd6af6255d6a58b98801eea36');
  img15= loadImage('https://cdn.myanimelist.net/images/anime/1993/96614.jpg?s=31b66d368b10bd49d624e9f0c6b176e2');

//-----------------------------

  //endro
  img16= loadImage('https://cdn.myanimelist.net/images/anime/1475/96180.jpg?s=28f8b3d34c7606f94beacb595c8939c6');
  img17= loadImage('https://cdn.myanimelist.net/images/anime/1046/97025.jpg?s=5697b00c26cf3a293a56ccc21a2f19ca');
  img18 = loadImage('https://cdn.myanimelist.net/images/anime/1708/96962.jpg?s=798b13b199ed218df42eecd0a7cb08c3');
  img19= loadImage('https://cdn.myanimelist.net/images/anime/1935/96963.jpg?s=f2b6e87c406fac5afe292d46e417d7d8');

//--------------------------------------

  //fukigen
  img20= loadImage('https://cdn.myanimelist.net/images/anime/1030/99067.jpg?s=4ea2cdff07ab5795aabf95d0274de2c9');
  img21= loadImage('https://cdn.myanimelist.net/images/anime/1252/96179.jpg?s=fa8b977a320d0246a09c6ed3a5262d64');
  img22= loadImage('https://cdn.myanimelist.net/images/anime/1670/93176.jpg?s=1974a070f2fd4138590fcc20fb038101');
  img23= loadImage('https://cdn.myanimelist.net/images/anime/1205/96175.jpg?s=8fd5f406a315b9ee883f71d266a2c6cc');

//-----------------------------------------

  //w'z
  img24= loadImage('https://cdn.myanimelist.net/images/anime/1770/99001.jpg?s=13be4e889641beae9470241232b88b2f');
  img25= loadImage('https://cdn.myanimelist.net/images/anime/1741/94887.jpg?s=9a2c0e7d0783877970cdb8469a9d9356');
  img26= loadImage('https://cdn.myanimelist.net/images/anime/1106/98131.jpg?s=cf36022b9ebf8a568c7cd8724b4b5660');
  img27= loadImage('https://cdn.myanimelist.net/images/anime/1563/95294.jpg?s=38e9240fc326c407062986730d6ecc35');

//-----------------------------------------

//circlet princess
  img28= loadImage('https://cdn.myanimelist.net/images/anime/1760/97712.jpg?s=0d5b1313e818d3d62a707ba18b46d536');
  img29= loadImage('https://cdn.myanimelist.net/images/anime/1895/95994.jpg?s=765153677dbfc66d0243a0600cd12ccd');
  img30= loadImage('https://cdn.myanimelist.net/images/anime/1953/95142.jpg?s=f106ebd983240da13798b1f481c19ec1');
  img31= loadImage('https://cdn.myanimelist.net/images/anime/1399/97349.jpg?s=3e7c73db6ab2245daedb41569caf6510');

//-----------------------------------------

  //papa datte
  img32= loadImage('https://cdn.myanimelist.net/images/anime/1273/97100.jpg?s=200230513b456efd04a0edec2ed5ba5e');
  img33= loadImage('https://cdn.myanimelist.net/images/anime/1083/95613.jpg?s=9eb656dbb23d013370e65d2eb472e0c4');
  img34= loadImage('https://cdn.myanimelist.net/images/anime/1463/97361.jpg?s=b0979b22285272ece0f52329eefd70a1');
  img35= loadImage('https://cdn.myanimelist.net/images/anime/1449/93947.jpg?s=31e011f0669ba4490d236a535689b5d1');

//-----------------------------------------

  //virtual-san
  img36= loadImage('https://cdn.myanimelist.net/images/anime/1429/98554.jpg?s=74a80f829eddf45d4aa4eb9781f6def2');
  img37= loadImage('https://cdn.myanimelist.net/images/anime/1781/98227.jpg?s=d1d8a0fb15ea614109bd0971127ced4f');
  img38= loadImage('https://cdn.myanimelist.net/images/anime/1585/97907.jpg?s=4f36f86ef80220125ed179686a3ce0b7');
  img39= loadImage('https://cdn.myanimelist.net/images/anime/1679/97708.jpg?s=f601b34f95d476bce46ceea2785b7560');

//-----------------------------------------

  //kawauso
  img46= loadImage('https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=9e722fa5cb98491ab41aed2c14d8d137');
  img47= loadImage('https://cdn.myanimelist.net/images/anime/2/88336.jpg?s=c4290d1b8f2947f6efe8496cff7d07ed');
  img48= loadImage('https://cdn.myanimelist.net/images/anime/1694/93337.jpg?s=d4ec8ec24d61106b47fa3fb3947873a2');
  img49= loadImage('https://cdn.myanimelist.net/images/anime/1993/93837.jpg?s=7c1cb2c0c220d99af5a13e21842ddd00');

//-----------------------------------------

  //lalalala
  img50= loadImage('https://cdn.myanimelist.net/images/anime/9/84460.jpg?s=f60b689eb4593f0a22a337619b5665ea');
  img51= loadImage('https://cdn.myanimelist.net/images/anime/7/75199.jpg?s=184fd7c0c1010ef9e1c90d56780b6066');
  img52= loadImage('https://cdn.myanimelist.net/images/anime/1536/93863.jpg?s=cec2b59e7b489af7a46db44b1fc180b4');
  img53= loadImage('https://cdn.myanimelist.net/images/anime/1572/95010.jpg?s=96e6947769f8abd32e9fee2cb734ba9a');

//-----------------------------------------

 //tensei shitara
  img54= loadImage('https://cdn.myanimelist.net/images/anime/1583/93857.jpg?s=5854c89541186da72ac97384c697a975');
  img55= loadImage('https://cdn.myanimelist.net/images/anime/1692/93918.jpg?s=f3a79434026514eef568071055563476');
  img56= loadImage('https://cdn.myanimelist.net/images/anime/1318/95345.jpg?s=9f009137a9c8bbb11c53c837504561df');
  img57= loadImage('https://cdn.myanimelist.net/images/anime/1287/100389.jpg?s=bd86d6984abb750a09f1f54af0b1f9f2');
}




function setup() {
    createCanvas(1600,2630);
    background(255);
   noLoop();
   var url = 'https://api.jikan.moe/v3/season/2019/winter'
    // loadJSON(url,drawAnime);
    loadJSON(url,drawText);

    image(img, 0, 30, 110, 150);
    image(img1, 400, 30, 110, 150);
    image(img2, 800, 30, 110, 150);
    image(img3, 1200, 30, 110, 150);

 //-------------------------------------------

    image(img4, 0, 230, 110, 150);
    image(img5, 400, 230, 110, 150);
    image(img6, 800, 230, 110, 150);
    image(img7, 1200, 230, 110, 150);

//--------------------------------------------

image(img8, 0, 430, 110, 150);
image(img9, 400, 430, 110, 150);
image(img10, 800, 430, 110, 150);
image(img11, 1200, 430, 110, 150);

//--------------------------------------------
image(img12, 0, 630, 110, 150);
image(img13, 400, 630, 110, 150);
image(img14, 800, 630, 110, 150);
image(img15, 1200, 630, 110, 150);

//--------------------------------------------
image(img16, 0, 830, 110, 150);
image(img17, 400, 830, 110, 150);
image(img18, 800, 830, 110, 150);
image(img19, 1200, 830, 110, 150);

//--------------------------------------------
image(img20, 0, 1030, 110, 150);
image(img21, 400, 1030, 110, 150);
image(img22, 800, 1030, 110, 150);
image(img23, 1200, 1030, 110, 150);

//--------------------------------------------

image(img24, 0, 1230, 110, 150);
image(img25, 400, 1230, 110, 150);
image(img26, 800, 1230, 110, 150);
image(img27, 1200, 1230, 110, 150);

//--------------------------------------------

image(img28, 0, 1430, 110, 150);
image(img29, 400, 1430, 110, 150);
image(img30, 800, 1430, 110, 150);
image(img31, 1200, 1430, 110, 150);

//--------------------------------------------

image(img32, 0, 1630, 110, 150);
image(img33, 400, 1630, 110, 150);
image(img34, 800, 1630, 110, 150);
image(img35, 1200, 1630, 110, 150);

//--------------------------------------------


image(img36, 0, 1830, 110, 150);
image(img37, 400, 1830, 110, 150);
image(img38, 800, 1830, 110, 150);
image(img39, 1200, 1830, 110, 150);

//--------------------------------------------

image(img46, 0, 2030, 110, 150);
image(img47, 400, 2030, 110, 150);
image(img48, 800, 2030, 110, 150);
image(img49, 1200, 2030, 110, 150);

//--------------------------------------------

image(img50, 0, 2230, 110, 150);
image(img51, 400, 2230, 110, 150);
image(img52, 800, 2230, 110, 150);
image(img53, 1200, 2230, 110, 150);

//--------------------------------------------

image(img54, 0, 2430, 110, 150);
image(img55, 400, 2430, 110, 150);
image(img56, 800, 2430, 110, 150);
image(img57, 1200, 2430, 110, 150);


push();
translate(130,170);
sdlineGraph(scoreArr);
line(-20,45,665,45);
pop();



push();
translate(130,370);
sdlineGraph(scoreArr1);
line(-20,45,665,45);
pop();



push();
translate(130,570);
sdlineGraph(scoreArr2);
line(-20,45,665,45);
pop();



push();
translate(130,770);
sdlineGraph(scoreArr3);
line(-20,45,665,45);
pop();



push();
translate(130,970);
sdlineGraph(scoreArr4);
line(-20,45,665,45);
pop();



push();
translate(130,1170);
sdlineGraph(scoreArr5);
line(-20,45,665,45);
pop();



push();
translate(130,1370);
sdlineGraph(scoreArr6);
line(-20,45,665,45);
pop();



push();
translate(130,1570);
sdlineGraph(scoreArr7);
line(-20,45,665,45);
pop();


push();
translate(130,1770);
sdlineGraph(scoreArr8);
line(-20,45,665,45);
pop();


push();
translate(130,1970);
sdlineGraph(scoreArr9);
line(-20,45,665,45);
pop();


push();
translate(130,2170);
sdlineGraph(scoreArr10);
line(-20,45,665,45);
pop();


push();
translate(130,2370);
sdlineGraph(scoreArr11);
line(-20,45,665,45);
pop();


push();
translate(130,2570);
sdlineGraph(scoreArr12);
line(-20,45,665,45);
pop();

}



function draw() {

}


function sdlineGraph(score) {
    noStroke();
    colorMode(HSB, 17);
    console.log(score);

    for (var i = 0; i < score.length; i++) {
      console.log(score[i]);


      fill(score[i],200,255);
      rect(i*400,10 ,100,-score[i]*15);

    }


}
function drawText(data) {

  fill(0);

//tate no yuusha no nariagari
text(data.anime[0].title,0,200);
// text(data.anime[0].score,0,215);

//yakusoku no neverland
text(data.anime[1].title,400,200);
// text(data.anime[1].score,400,215);

//mob psycho 2
text(data.anime[2].title,800,200);
// text(data.anime[2].score,800,215);

//kaguya sama
text(data.anime[3].title,1200,200);
// text(data.anime[3].score,1200,215);

//---------------------------------

//dororo
text(data.anime[4].title,0,400);
// text(data.anime[4].score,0,415);

//domestic no kanojo
text(data.anime[5].title,400,400);
// text(data.anime[5].score,400,415);

//kakegurui xx
text(data.anime[6].title,800,400);
// text(data.anime[6].score,800,415);

//5-toubon no hanayome
text(data.anime[7].title,1200,400);
// text(data.anime[7].score,1200,415);


//------------------------------------------------

//boogiepop
text(data.anime[8].title,0,600);
// text(data.anime[8].score,0,615);


//date a live 3
text(data.anime[9].title,400,600);
// text(data.anime[9].score,400,615);

//doukyonin
text(data.anime[10].title,800,600);
// text(data.anime[10].score,800,615);

//manaria friends
text(data.anime[11].title,1200,600);
// text(data.anime[11].score,1200,615);

//------------------------------------------------


//watashi ni tenshi
text(data.anime[12].title,0,800);
// text(data.anime[12].score,0,815);

//ueno
text(data.anime[13].title,400,800);
// text(data.anime[13].score,400,815);

//3d kanojo
text(data.anime[14].title,800,800);
// text(data.anime[14].score,800,815);

//mahou shoujo asuka
text(data.anime[15].title,1200,800);
// text(data.anime[15].score,1200,815);

//----------------------------------------------

//endro
text(data.anime[16].title,0,1000);
// text(data.anime[16].score,0,1015);

//girl air force
text(data.anime[17].title,400,1000);
// text(data.anime[17].score,400,1015);

//grimms notes
text(data.anime[18].title,800,1000);
// text(data.anime[18].score,800,1015);

//egao no daika
text(data.anime[19].title,1200,1000);
// text(data.anime[19].score,1200,1015);

//---------------------------------------------

//fukigen
text(data.anime[20].title,0,1200);
// text(data.anime[20].score,0,1215);

//kouya no kotobuki
text(data.anime[21].title,400,1200);
// text(data.anime[21].score,400,1215);

//piano no mori
text(data.anime[22].title,800,1200);
// text(data.anime[22].score,800,1215);

//meiji tokyo
text(data.anime[23].title,1200,1200);
// text(data.anime[23].score,1200,1215);
//---------------------------------------------

//w'z
text(data.anime[24].title,0,1400);
// text(data.anime[24].score,0,1415);

//kemurikusa
text(data.anime[25].title,400,1400);
// text(data.anime[25].score,400,1415);

//bang dream s2
text(data.anime[26].title,800,1400);
// text(data.anime[26].score,800,1415);

//pastel memories
text(data.anime[27].title,1200,1400);
// text(data.anime[27].score,1200,1415);
//---------------------------------------------

//circlet princess
text(data.anime[28].title,0,1600);
// text(data.anime[28].score,0,1615);

//kemono friends 2
text(data.anime[29].title,400,1600);
// text(data.anime[29].score,400,1615);

//rinshi ekoda-chan
text(data.anime[30].title,800,1600);
// text(data.anime[30].score,800,1615);

//dimension high school
text(data.anime[31].title,1200,1600);
// text(data.anime[31].score,1200,1615);
//---------------------------------------------

//papa datte, shitai
text(data.anime[32].title,0,1800);
// text(data.anime[32].score,0,1815);

//b- project zecchou
text(data.anime[33].title,400,1800);
// text(data.anime[33].score,400,1815);

//ame-iro cocoa: side g
text(data.anime[34].title,800,1800);
// text(data.anime[34].score,800,1815);

//bermuda triangle
text(data.anime[35].title,1200,1800);
// text(data.anime[35].score,1200,1815);
//---------------------------------------------

//virtual-san
text(data.anime[36].title,0,2000);
// text(data.anime[36].score,0,2015);

//mini toji
text(data.anime[37].title,400,2000);
// text(data.anime[37].score,400,2015);

//star twinkle
text(data.anime[38].title,800,2000);
// text(data.anime[38].score,800,2015);

//hulaing babies
text(data.anime[39].title,1200,2000);
// text(data.anime[39].score,1200,2015);
//---------------------------------------------

//kawauoso labo
text(data.anime[46].title,0,2200);
// text(data.anime[46].score,0,2215);

//mannaka no rikkun
text(data.anime[47].title,400,2200);
// text(data.anime[47].score,400,2215);

//kyou mo tsuno ga aru
text(data.anime[48].title,800,2200);
// text(data.anime[48].score,800,2215);

//mr shadow
text(data.anime[49].title,1200,2200);
// text(data.anime[49].score,1200,2215);
//---------------------------------------------

//lala chan
text(data.anime[50].title,0,2400);
// text(data.anime[50].score,0,2415);

//Capsule boy 2
text(data.anime[51].title,400,2400);
// text(data.anime[51].score,400,2415);

//one piece
text(data.anime[52].title,800,2400);
// text(data.anime[52].score,800,2415);

//black clover
text(data.anime[53].title,1200,2400);
// text(data.anime[53].score,1200,2415);
//---------------------------------------------

//tensei shitara
text(data.anime[54].title,0,2600);
// text(data.anime[54].score,0,2615);

//sao
text(data.anime[55].title,400,2600);
// text(data.anime[55].score,400,2615);

//boruto
text(data.anime[56].title,800,2600);
// text(data.anime[56].score,800,2615);

//detective conan
text(data.anime[57].title,1200,2600);
// text(data.anime[57].score,1200,2615);
//---------------------------------------------


}



// }
