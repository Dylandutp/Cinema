window.onload = function(){hide_all(); };

function theater_01()
{
    var obj = document.getElementById('theater_01');

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }
    else{
        obj.style.display = 'none';
    }
}

function theater_02()
{
    var obj = document.getElementById('theater_02');

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }
    else{
        obj.style.display = 'none';
    }
}

function theater_03()
{
    var obj = document.getElementById('theater_03');

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }
    else{
        obj.style.display = 'none';
    }
}

function hide_all()
{
    document.getElementById('child1').style.display = 'none';
    document.getElementById('child2').style.display = 'none';
    document.getElementById('child3').style.display = 'none';
}



//function change_color_1(){
//    document.getElementById("theater_01").style.background='#B09FDC';
//}
//function change_color_2(){
//    document.getElementById("theater_02").style.background='#B09FDC';
//}
//function change_color_3(){
//    document.getElementById("theater_03").style.background='#B09FDC';
//}