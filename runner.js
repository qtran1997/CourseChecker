$(document).ready(function(){
    $('#start').on('click',start);
    var win2;
    async function start(){
        win2 = window.open("https://qtran1997.github.io/CourseChecker/");
        setTimeout(closewindow, 5000);
    }
    
    function closewindow(){
        win2.close();
        setTimeout(start, 25000);
    }
    
    
    
});