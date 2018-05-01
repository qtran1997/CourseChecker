$(document).ready(takeSnap);

console.log('v.04');

function takeSnap(){
    var htmlCode = "not working";
    $.getJSON('https://anyorigin.com/go?url=https%3A//sunspot.sdsu.edu/schedule/search%3Fmode%3Dsearch%26period%3D20184%26admin_unit%3DR%26abbrev%3DCS%26number%3D%26suffix%3D%26courseTitle%3D%26scheduleNumber%3D%26units%3D%26instructor%3D%26facility%3D%26space%3D%26meetingType%3D%26startHours%3D%26startMins%3D%26endHours%3D%26endMins%3D%26remaining_seats_at_least%3D%26ge%3D&callback=?', function(data){

        var body=data.contents.replace(/^.*?<body>(.*?)<\/body>.*?$/s,"$1");
        $('#test').html(body);
        var count = 0;
        var courseName = document.getElementsByClassName('sectionFieldCourse');
        for(var i=1;i<courseName.length;i++)
        {

            var courseNumber = courseName[i].getElementsByTagName('a')[0].innerText;
            if(courseNumber == "CS-583")
            {
                count++;
                if(count>2)
                {
                    console.log(courseNumber);
                    console.log(document.getElementsByClassName('sectionFieldSched')[i].innerText);
                    alert("COURSE OPEN");
                }
                else
                {
                    console.log(courseNumber);
                    console.log(document.getElementsByClassName('sectionFieldSched')[i].innerText);
                    //                    alert(count);
                }
            }


        }
        //        var num = 0;
        //        var courseName = document.getElementsByClassName('sectionFieldCourse');
        //        for(var i=1;i<courseName.length;i++)
        //        {
        //
        //            var courseNumber = courseName[i].getElementsByTagName('a')[0].innerText;
        //            if(courseNumber == "CS-490")
        //            {
        //                num = i;
        //                break;
        //            }
        //
        //
        //        }
        //
        //        //        console.log(document.getElementsByClassName('sectionFieldSeats')[num].innerText);
        //        var seatcount = document.getElementsByClassName('sectionFieldSeats')[num].innerText;
        //        if(parseInt(seatcount.substr(0,1)) < 2 )
        //        {
        //            console.log(document.getElementsByClassName('sectionFieldSeats')[num].innerText);
        //
        //        }

        //        sleepy();
    });
    //    window.location.reload(true);

}
async function sleepy(){
    await sleep (5000);
    window.location.close();
}