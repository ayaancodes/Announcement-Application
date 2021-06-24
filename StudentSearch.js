//Instantiate Variables
//Student Grade Checkbox

var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;

var studentGender;
var studentClub;

function getStudentInput(){

    /* "getElementById()" returns an element object representing 
    the element whose id property matches the specified string*/

    studentGrade9 = document.getElementById("htmlSGrade9").checked;
    studentGrade10 = document.getElementById("htmlSGrade10").checked;
    studentGrade11 = document.getElementById("htmlSGrade11").checked;
    studentGrade12 = document.getElementById("htmlSGrade12").checked;
    studentGradeAll = document.getElementById("htmlSGradeAll").checked;

    studentGender = document.getElementById("htmlSGender").value;
    studentClub = document.getElementById("htmlSClub").value;

    /* "localStorage.setItem" used to save 
    student variables in the local storage*/

    localStorage.setItem("studentGrade9Key", studentGrade9);
    localStorage.setItem("studentGrade10Key", studentGrade10);
    localStorage.setItem("studentGrade11Key", studentGrade11);
    localStorage.setItem("studentGrade12Key", studentGrade12);
    localStorage.setItem("studentGradeAllKey", studentGradeAll);

    localStorage.setItem("studentGenderKey", studentGender);
    localStorage.setItem("studentClubKey", studentClub);


    /* window.open() used to open the Student Result.js page 
    onclick of submit button on Student Search.html */

    window.open("schoolAnnouncementResult.html")
}
$('.btn').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('btn-hover',)
    }).on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('btn-hover');
      }); 

$('h2').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('h2-change',)
    }).on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('h2-change');
}); 
