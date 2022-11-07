
var m_noteWin = null;
var m_testWin = null;



function playSound(in_Name) {
}

function showNotes(in_url) {
    var s_param = 
        "width = 370, height = 200, left = 20, top = 20, resizable = yes, copyhistory = no, directories = no, location = no, menubar = no, scrollbars = yes, status = no, toolbar = no;";
    m_noteWin = window.open(in_url,"Notes", s_param);
}

function showTest(in_url) {
    var s_param = 
        "width = 370, height = 200, left = 30, top = 30, resizable = yes, copyhistory = no, directories = no, location = no, menubar = no, scrollbars = yes, status = no, toolbar = no;";
    m_testWin = window.open(in_url, "Test", s_param);
}
