
//Initializing Global Variables

var teacherGrade9= [];
var teacherGrade10= [];
var teacherGrade11= [];
var teacherGrade12= [];
var teacherGradeAll= [];

var teacherDetails= [];
var teacherGender= [];
var teacherClub= [];

var counter = 0;

function getTeacherInput(){

    /* "getElementById()" returns an element object representing 
    the element whose id property matches the specified string*/
    
    teacherGrade9[counter] = document.getElementById("htmlTGrade9").checked;
    teacherGrade10[counter] = document.getElementById("htmlTGrade10").checked;
    teacherGrade11[counter] = document.getElementById("htmlTGrade11").checked;
    teacherGrade12[counter] = document.getElementById("htmlTGrade12").checked;
    teacherGradeAll[counter] = document.getElementById("htmlTGradeAll").checked;
    
    teacherDetails[counter] = document.getElementById("htmlTDetails").value;
    teacherGender[counter] = document.getElementById("htmlTGender").value;
    teacherClub[counter] = document.getElementById("htmlTClub").value;

    // Counter

    counter++;
    /* "localStorage.setItem" used to save teacher 
    variables in the local storage*/

    localStorage.setItem("teacherDetailsKey", JSON.stringify(teacherDetails));

    localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
    localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
    localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
    localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));
    localStorage.setItem("teacherGradeAllKey", JSON.stringify(teacherGradeAll));

    localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
    localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
}

//Gets Existing Announcemenets
function getExistingAnnouncement(){

    //Saves the localStorage Values using JSON.parse
    if(JSON.parse(localStorage.getItem("teacherGrade9Key"))!=null){
        teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
        teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
        teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
        teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
        teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"));

        teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
        teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
        teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));

    //Sets counter to actual length
    counter = teacherGrade9.length

    }

}
// Reloads page when "start over" is clickes
function restartPage(){
    location.reload(true);
}

//jQuery
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


