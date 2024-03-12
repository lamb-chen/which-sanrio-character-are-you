/*Add your JavaScript here*/
var hkScore = 0;
var melodyScore = 0;
var cinnaScore = 0;
var gudeScore = 0;
var kerropiScore = 0;
var kuromiScore = 0;
var qCount = 0;
var finalresult = document.getElementById("result");

var q1a1 =  document.getElementById("q1a1");
var q1a2 =  document.getElementById("q1a2");
var q1a3 =  document.getElementById("q1a3");
var q1a4 =  document.getElementById("q1a4");
var q1a5 =  document.getElementById("q1a5");
var q1a6 =  document.getElementById("q1a6");

var q2a1 =  document.getElementById("q2a1");
var q2a2 =  document.getElementById("q2a2");
var q2a3 =  document.getElementById("q2a3");
var q2a4 =  document.getElementById("q2a4");
var q2a5 =  document.getElementById("q2a5");
var q2a6 =  document.getElementById("q2a6");

var q3a1 =  document.getElementById("q3a1");
var q3a2 =  document.getElementById("q3a2");
var q3a3 =  document.getElementById("q3a3");
var q3a4 =  document.getElementById("q3a4");
var q3a5 =  document.getElementById("q3a5");
var q3a6 =  document.getElementById("q3a6");

var q4a1 =  document.getElementById("q4a1");
var q4a2 =  document.getElementById("q4a2");
var q4a3 =  document.getElementById("q4a3");
var q4a4 =  document.getElementById("q4a4");
var q4a5 =  document.getElementById("q4a5");
var q4a6 =  document.getElementById("q4a6");

var restart = document.getElementById("restart");

restart.addEventListener("click", reset)

q1a1.addEventListener("click", hk)
q1a2.addEventListener("click", cinna)
q1a3.addEventListener("click", kerropi)
q1a4.addEventListener("click", gude)
q1a5.addEventListener("click", melody)
q1a6.addEventListener("click", kuromi)

q2a1.addEventListener("click", hk)
q2a2.addEventListener("click", cinna)
q2a3.addEventListener("click", kerropi)
q2a4.addEventListener("click", gude)
q2a5.addEventListener("click", melody)
q2a6.addEventListener("click", kuromi)

q3a1.addEventListener("click", kerropi)
q3a2.addEventListener("click", melody)
q3a3.addEventListener("click", kuromi)
q3a4.addEventListener("click", cinna)
q3a5.addEventListener("click", gude)
q3a6.addEventListener("click", hk)

q4a1.addEventListener("click", hk)
q4a2.addEventListener("click", cinna)
q4a3.addEventListener("click", kerropi)
q4a4.addEventListener("click", gude)
q4a5.addEventListener("click", melody)
q4a6.addEventListener("click", kuromi)

function hk() {
  hkScore += 1;
  qCount += 1;

  console.log("hkScore =" + hkScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }
}
function melody() {
  melodyScore += 1;
  qCount += 1;

  console.log("melodyScore =" + melodyScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }
}
function cinna() {
  cinnaScore += 1;
  qCount += 1;

  console.log("cinnaScore =" + cinnaScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }
}
function gude() {
  gudeScore += 1;
  qCount += 1;

  console.log("gudeScore =" + gudeScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }

}
function kerropi() {
  kerropiScore += 1;
  qCount += 1;

  console.log("kerropiScore =" + kerropiScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }

}
function kuromi() {
  kuromiScore += 1;
  qCount += 1;

  console.log("kuromiScore =" + kuromiScore + "qCount =" + qCount);

  if (qCount == 4) {
    console.log("Quiz finished")
    result();
  }
}

function result() {
    if (hkScore > cinnaScore && hkScore > kerropiScore && hkScore > kuromiScore && hkScore > gudeScore && hkScore > melodyScore) {
      console.log("Hello Kitty");
      finalresult.innerHTML = "You are most like Hello Kitty!"
      finalresult.appendChild(document.createElement("img")).src ="assets/hellokitty3.JPG" 
    }
    else if (cinnaScore > hkScore && cinnaScore > kerropiScore && cinnaScore > kuromiScore && cinnaScore > gudeScore && cinnaScore > melodyScore){
      console.log("Cinna");
      finalresult.innerHTML = "You are most like Cinnamoroll!"
      finalresult.appendChild(document.createElement("img")).src ="assets/cinnamoroll.JPG" 
    }
    else if (kuromiScore > cinnaScore && kuromiScore > kerropiScore && kuromiScore > hkScore && kuromiScore > gudeScore && kuromiScore > melodyScore) {
      console.log("Kuromi");
      finalresult.innerHTML = "You are most like Kuromi!"
      finalresult.appendChild(document.createElement("img")).src ="assets/kuromi.JPG" 
    }
    else if (kerropiScore > cinnaScore && kerropiScore > hkScore && kerropiScore > kuromiScore && kerropiScore > gudeScore && kerropiScore > melodyScore) {
      console.log("Kerropi");
      finalresult.innerHTML = "You are most like Kerropi!"
      finalresult.appendChild(document.createElement("img")).src ="assets/kerropi.JPG"  

    }
    else if (melodyScore > cinnaScore && melodyScore > kerropiScore && melodyScore > kuromiScore && melodyScore > gudeScore && melodyScore > hkScore) {
      console.log("Melody");
      finalresult.innerHTML = "You are most like My Melody!"
      finalresult.appendChild(document.createElement("img")).src ="assets/mymelody.JPG" 
    }
    else if (gudeScore > cinnaScore && gudeScore > kerropiScore && gudeScore > kuromiScore && gudeScore > hkScore && gudeScore > melodyScore) {
      console.log("Gudetama");
      finalresult.innerHTML = "You are most like Gudetama!"
      finalresult.appendChild(document.createElement("img")).src ="assets/gudetama.JPG" 
    }
    else
    {
      console.log("Mix");
      finalresult.innerHTML = "You are a combination of them!"
      finalresult.appendChild(document.createElement("img")).src ="assets/group.png" 
    }
}

function reset() {
  hkScore = 0;
  melodyScore = 0;
  cinnaScore = 0;
  gudeScore = 0;
  kerropiScore = 0;
  kuromiScore = 0;
  qCount = 0;
  finalresult.innerHTML = "You are most like..."
}