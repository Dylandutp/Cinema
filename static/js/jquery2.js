
window.onload = function(){

    document.getElementsByClassName('ticket')[0].style.display = 'none';
    document.getElementsByClassName('food')[0].style.display = 'none';
//    document.getElementsByClassName('drink')[0].style.display = 'none';
//    document.getElementsByClassName('snake')[0].style.display = 'none';
//    document.getElementsByClassName('popcorn')[0].style.display = 'none';
    document.getElementsByClassName('continue')[0].style.display = 'none';


    document.getElementsByClassName('counters')[0].style.display = 'none';
    document.getElementsByClassName('ticket-type')[0].style.display = 'none';




};
//點擊時間後出現選擇食物種類
function food()
{
    var obj1 = document.getElementsByClassName('food')[0];
    var obj2 = document.getElementsByClassName('continue')[0];


    if (obj1.style.display =='none' && obj1.style.display =='none')
    {
        obj1.style.display = 'block';
        obj2.style.display = 'block';

    }

};

//點擊後出現選擇飲料項目
function drink()
{
    var obj = document.getElementsByClassName('drink')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};

//點擊後出現選擇點心項目
function snake()
{
    var obj = document.getElementsByClassName('snake')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};

//點擊後出現選擇爆米花項目
function popcorn()
{
    var obj = document.getElementsByClassName('popcorn')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};


//點擊後出現票種選擇欄位
function ticket()
{
    var obj = document.getElementsByClassName('ticket')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};

//點擊時間後出現信用卡資料輸入欄位
function credit_card()
{
    var obj = document.getElementsByClassName('credit_card')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};
//點擊時間後出現臨櫃購票資料選擇欄
function counters()
{
    var obj = document.getElementsByClassName('counters')[0];

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};

function only_credit_card()
{
var obj1 = document.getElementsByClassName('counters')[0];

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }

};

function only_counters()
{
var obj1 = document.getElementsByClassName('credit_card')[0];

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }

};