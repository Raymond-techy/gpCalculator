const duplicateBtn = document.querySelector(".duplicate");
const subBtn = document.querySelector(".subCourse");
const subTotal = document.querySelector(".subTotal");
const courseUnitvalue = document.querySelectorAll(".gpBox .courseUnit");
const courseBox = document.querySelector(".inputBox");
const noOfCourseBox = document.querySelector(".noOfCourse");
var resInput = document.querySelectorAll(".courseBox input");
var gpResult = document.querySelector(".gpResult");
var gpResPar = document.querySelector(".gpResult p");
var gpResValue = document.querySelector(".gpResult h3");
var reloadPage = document.querySelector(".relPage");
reloadPage.addEventListener("click", goBackHome);
var gp;
courseBox.style.display = "none";
duplicateBtn.addEventListener("click", subCourseNo);
subBtn.addEventListener("click", SubmitForm);
function subCourseNo() {
  DuplicateForm();
  var counter = document.querySelector(".noOfCour").value;
  if (counter != "") {
    courseBox.style.display = "flex";
    noOfCourseBox.style.display = "none";
  } else {
    var msgAlert = document.querySelector(".msgAlert");
    msgAlert.textContent += "please input something";
    msgAlert.style.color = "red";
    setTimeout(() => {
      msgAlert.style.display = "none";
    }, 1000);
    // alert("input box is empty");
  }
}
function DuplicateForm() {
  var counter = document.querySelector(".noOfCour").value;
  while (counter > 1) {
    const node = document.querySelector(".gpBox");
    const clone = node.cloneNode(true);
    clone.classList.add(`${"counter" + counter}`);
    clone.classList.remove("counter1");
    clone.children[2].classList.add(`${"courseGrade" + counter}`);
    clone.children[2].classList.remove("courseGrade1");
    clone.children[3].classList.add(`${"courseunit" + counter}`);
    document.querySelector(".courseBox").appendChild(clone);
    console.log(clone);
    counter--;
    // console.log(clone.Children[1]);
    // console.log(clone.Children[2]);
  }
}
function SubmitForm(e) {
  e.preventDefault();
  var courseGradeArray = [];
  var courseGradeNo;
  var courseGrade = document.querySelectorAll(".courseGrade");
  courseGrade.forEach((courseGrade) => {
    var coursegrade = courseGrade.value.toLowerCase();
    if (coursegrade == "a") {
      courseGradeNo = 5;
    } else if (coursegrade == "b") {
      courseGradeNo = 4;
    } else if (coursegrade == "c") {
      courseGradeNo = 3;
    } else if (coursegrade == "d") {
      courseGradeNo = 2;
    } else if (coursegrade == "e") {
      courseGradeNo = 1;
    } else if (coursegrade == "f") {
      courseGradeNo = 0;
    }
    courseGradeArray.push(courseGradeNo);
    console.log(courseGradeNo);
  });
  var totalCourseGrade = courseGradeArray.reduce((a, b) => a + b);
  var counter = document.querySelector(".noOfCour").value;
  var courseUnitArray = [];
  var multipliedResultArray = [];
  for (let i = 1; i <= counter; i++) {
    var write = document.querySelectorAll(`.courseunit${[i]}`);
    write.forEach((courseUnit) => {
      courseUnitArray.push(parseInt(courseUnit.value));
    });
    courseUnitArray.length = counter;
  }
  for (let i = 0; i < courseGradeArray.length && courseUnitArray.length; i++) {
    var multipliedResult = courseGradeArray[i] * courseUnitArray[i];
    multipliedResultArray.push(multipliedResult);
    console.log(multipliedResult);
  }
  var totalmultipliedResultArray = multipliedResultArray.reduce(
    (a, b) => a + b
  );
  console.log(multipliedResultArray);
  console.log(totalmultipliedResultArray);
  // console.log((totalmultipliedResultArray / totalCourseGrade).toFixed(2));
  gp = (totalmultipliedResultArray / totalCourseGrade).toFixed(2);
  gp = parseFloat(gp);
  console.log(gp);
  console.log(typeof gp);
  loadResult();
}
function loadResult() {
  console.log(gp);
  if (isNaN(gp)) {
    console.log("not a number");
  } else {
    gpResValue.textContent += `${gp}"/5"`;
    courseBox.style.display = "none";
    gpResult.style.visibility = "visible";
    console.log("it's a number");
  }
  if (gp >= 4.5) {
    gpResPar.textContent = "welldone you still dey first class dey enjoy";
  } else if (gp >= 4 && gp < 4.5) {
    gpResPar.textContent = "First class no bad you can get it";
  } else if (gp >= 4 && gp < 4.5) {
    gpResPar.textContent = "First class no bad you can get it";
  }
}
function goBackHome() {
  console.log("clicked");
  window.location.reload();
}
