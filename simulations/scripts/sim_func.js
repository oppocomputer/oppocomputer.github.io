function showApplet(in_src){
    if (in_src == "data.htm") {document.getElementsByClassName("data")[0].src = in_src; return;}
    
    document.getElementsByClassName("data")[0].src = "applets/".concat(in_src);
}