//initialize global variables

var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;

var studentGender;
var studentClub;

var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];

var teacherDetails = [];
var teacherGender = [];
var teacherClub = [];

var announcementTextHolder = "";

function displayResults() {

  // saves the selected student IDs into local storage

  studentGrade9 = localStorage.getItem("studentGrade9Key");
  studentGrade10 = localStorage.getItem("studentGrade10Key");
  studentGrade11 = localStorage.getItem("studentGrade11Key");
  studentGrade12 = localStorage.getItem("studentGrade12Key");
  studentGradeAll = localStorage.getItem("studentGradeAllKey")
  studentGender = localStorage.getItem("studentGenderKey");
  studentClub = localStorage.getItem("studentClubKey");

  // saves the selected teacher IDs into local storage

  teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
  teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
  teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
  teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
  teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"));

  teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
  teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
  teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));

  console.log("teacherGrade9", teacherGrade9);
  console.log("teacherGrade10", teacherGrade10);
  console.log("teacherGrade11", teacherGrade11);
  console.log("teacherGrade12", teacherGrade12);
  console.log("teacherGradeAll" , teacherGradeAll);
  console.log("teacherGender" , teacherGender);
  console.log("teacherClub" , teacherClub)

  console.log("studentGradeAll" , studentGradeAll);



  /* if statements used to check for matches between
  teacher saved announcements and student search */
  for(var i = 0; i < teacherGender.length; i++) {
    if (((teacherGrade9[i]!= null && teacherGrade9[i] == true && teacherGrade9[i] == JSON.parse(studentGrade9)) || 
        (teacherGrade9[i]!= null && teacherGrade9[i] == true && teacherGrade9[i] == JSON.parse(studentGradeAll)) || 
        (teacherGrade10[i]!= null && teacherGrade10[i] == true && teacherGrade10[i] == JSON.parse(studentGrade10)) || 
        (teacherGrade10[i]!= null && teacherGrade10[i] == true && teacherGrade10[i] == JSON.parse(studentGradeAll)) || 
        (teacherGrade11[i]!= null && teacherGrade11[i] == true && teacherGrade11[i] == JSON.parse(studentGrade11)) || 
        (teacherGrade11[i]!= null && teacherGrade11[i] == true && teacherGrade11[i] == JSON.parse(studentGradeAll)) || 
        (teacherGrade12[i]!= null && teacherGrade12[i] == true && teacherGrade12[i] == JSON.parse(studentGrade12)) || 
        (teacherGrade12[i]!= null && teacherGrade12[i] == true && teacherGrade12[i] == JSON.parse(studentGradeAll)) || 
        (teacherGradeAll[i]!= null && teacherGradeAll[i] == true && teacherGradeAll[i] == JSON.parse(studentGradeAll)))
        && ((teacherGender[i] == studentGender) || (teacherGender[i] == 'All') || (studentGender == 'All')) 
        && ((teacherClub[i] == studentClub) || (teacherClub[i] == 'All') || (studentClub == 'All'))) {
        alert("You have a match!");
    announcementTextHolder += teacherDetails[i] + "\n";
    }
  }  document.getElementById("htmlSDetails").innerHTML = announcementTextHolder; 

  if(announcementTextHolder==""){
    document.getElementById("htmlSDetails").innerHTML = "Sorry, no announcements";
    alert("You have no matches!");}else{
        document.getElementById("htmlSDetails").innerHTML = announcementTextHolder;
    }




  
}


