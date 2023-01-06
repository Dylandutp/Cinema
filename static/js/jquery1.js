

window.onload = function(){
//隱藏付款選項
    document.getElementById('theater_01').style.display = 'none';


//隱藏電影選項
    document.getElementById('theater_01').style.display = 'none';
    document.getElementById('theater_02').style.display = 'none';
    document.getElementById('theater_03').style.display = 'none';
    document.getElementById('theater_04').style.display = 'none';
    document.getElementById('theater_05').style.display = 'none';
    document.getElementById('theater_06').style.display = 'none';
    document.getElementById('theater_07').style.display = 'none';
    document.getElementById('theater_08').style.display = 'none';
    document.getElementById('theater_09').style.display = 'none';
    document.getElementById('theater_10').style.display = 'none';
    document.getElementById('theater_11').style.display = 'none';
    document.getElementById('theater_12').style.display = 'none';
    document.getElementById('theater_13').style.display = 'none';
    document.getElementById('theater_14').style.display = 'none';
    document.getElementById('theater_15').style.display = 'none';
    document.getElementById('theater_16').style.display = 'none';

// 隱藏時間表
    document.getElementById('t1m1_time_table').style.display = 'none';
    document.getElementById('t1m2_time_table').style.display = 'none';
    document.getElementById('t1m3_time_table').style.display = 'none';
    document.getElementById('t1m4_time_table').style.display = 'none';
    document.getElementById('t2m1_time_table').style.display = 'none';
    document.getElementById('t2m2_time_table').style.display = 'none';
    document.getElementById('t2m3_time_table').style.display = 'none';
    document.getElementById('t2m4_time_table').style.display = 'none';
    document.getElementById('t3m1_time_table').style.display = 'none';
    document.getElementById('t3m2_time_table').style.display = 'none';
    document.getElementById('t3m3_time_table').style.display = 'none';
    document.getElementById('t3m4_time_table').style.display = 'none';
    document.getElementById('t4m1_time_table').style.display = 'none';
    document.getElementById('t4m2_time_table').style.display = 'none';
    document.getElementById('t4m3_time_table').style.display = 'none';
    document.getElementById('t4m4_time_table').style.display = 'none';
    document.getElementById('t5m1_time_table').style.display = 'none';
    document.getElementById('t5m2_time_table').style.display = 'none';
    document.getElementById('t5m3_time_table').style.display = 'none';
    document.getElementById('t5m4_time_table').style.display = 'none';
    document.getElementById('t6m1_time_table').style.display = 'none';
    document.getElementById('t6m2_time_table').style.display = 'none';
    document.getElementById('t6m3_time_table').style.display = 'none';
    document.getElementById('t6m4_time_table').style.display = 'none';
    document.getElementById('t7m1_time_table').style.display = 'none';
    document.getElementById('t7m2_time_table').style.display = 'none';
    document.getElementById('t7m3_time_table').style.display = 'none';
    document.getElementById('t7m4_time_table').style.display = 'none';
    document.getElementById('t8m1_time_table').style.display = 'none';
    document.getElementById('t8m2_time_table').style.display = 'none';
    document.getElementById('t8m3_time_table').style.display = 'none';
    document.getElementById('t8m4_time_table').style.display = 'none';
    document.getElementById('t9m1_time_table').style.display = 'none';
    document.getElementById('t9m2_time_table').style.display = 'none';
    document.getElementById('t9m3_time_table').style.display = 'none';
    document.getElementById('t9m4_time_table').style.display = 'none';
    document.getElementById('t10m1_time_table').style.display = 'none';
    document.getElementById('t10m2_time_table').style.display = 'none';
    document.getElementById('t10m3_time_table').style.display = 'none';
    document.getElementById('t10m4_time_table').style.display = 'none';
    document.getElementById('t11m1_time_table').style.display = 'none';
    document.getElementById('t11m2_time_table').style.display = 'none';
    document.getElementById('t11m3_time_table').style.display = 'none';
    document.getElementById('t11m4_time_table').style.display = 'none';
    document.getElementById('t12m1_time_table').style.display = 'none';
    document.getElementById('t12m2_time_table').style.display = 'none';
    document.getElementById('t12m3_time_table').style.display = 'none';
    document.getElementById('t12m4_time_table').style.display = 'none';
    document.getElementById('t13m1_time_table').style.display = 'none';
    document.getElementById('t13m2_time_table').style.display = 'none';
    document.getElementById('t13m3_time_table').style.display = 'none';
    document.getElementById('t13m4_time_table').style.display = 'none';
    document.getElementById('t14m1_time_table').style.display = 'none';
    document.getElementById('t14m2_time_table').style.display = 'none';
    document.getElementById('t14m3_time_table').style.display = 'none';
    document.getElementById('t14m4_time_table').style.display = 'none';
    document.getElementById('t15m1_time_table').style.display = 'none';
    document.getElementById('t15m2_time_table').style.display = 'none';
    document.getElementById('t15m3_time_table').style.display = 'none';
    document.getElementById('t15m4_time_table').style.display = 'none';
    document.getElementById('t16m1_time_table').style.display = 'none';
    document.getElementById('t16m2_time_table').style.display = 'none';
    document.getElementById('t16m3_time_table').style.display = 'none';
    document.getElementById('t16m4_time_table').style.display = 'none';

    document.getElementById('order-ticket-btn').style.display = 'none';


};



//點擊時間後出現訂票按鈕
function go_order()
{
    var obj = document.getElementById('order-ticket-btn');

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }
        $("#ticket_time").html($(this).value);



};

//點擊後便出現該間戲院該電影時間資訊
function t1m1()
{
    var obj = document.getElementById('t1m1_time_table');

    if (obj.style.display =='none')
    {
        obj.style.display = 'block';
    }

};

function t1m2()
{
var obj = document.getElementById('t1m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};

function t1m3()
{
var obj = document.getElementById('t1m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};

function t1m4()
{
var obj = document.getElementById('t1m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};

function t2m1()
{
var obj = document.getElementById('t2m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t2m2()
{
var obj = document.getElementById('t2m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t2m3()
{
var obj = document.getElementById('t2m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t2m4()
{
var obj = document.getElementById('t2m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t3m1()
{
var obj = document.getElementById('t3m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t3m2()
{
var obj = document.getElementById('t3m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t3m3()
{
var obj = document.getElementById('t3m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t3m4()
{
var obj = document.getElementById('t3m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t4m1()
{
var obj = document.getElementById('t4m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t4m2()
{
var obj = document.getElementById('t4m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t4m3()
{
var obj = document.getElementById('t4m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t4m4()
{
var obj = document.getElementById('t4m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t5m1()
{
var obj = document.getElementById('t5m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t5m2()
{
var obj = document.getElementById('t5m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t5m3()
{
var obj = document.getElementById('t5m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t5m4()
{
var obj = document.getElementById('t5m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t6m1()
{
var obj = document.getElementById('t6m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t6m2()
{
var obj = document.getElementById('t6m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t6m3()
{
var obj = document.getElementById('t6m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t6m4()
{
var obj = document.getElementById('t6m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t7m1()
{
var obj = document.getElementById('t7m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t7m2()
{
var obj = document.getElementById('t7m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t7m3()
{
var obj = document.getElementById('t7m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t7m4()
{
var obj = document.getElementById('t7m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t8m1()
{
var obj = document.getElementById('t8m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t8m2()
{
var obj = document.getElementById('t8m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t8m3()
{
var obj = document.getElementById('t8m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t8m4()
{
var obj = document.getElementById('t8m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t9m1()
{
var obj = document.getElementById('t9m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t9m2()
{
var obj = document.getElementById('t9m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t9m3()
{
var obj = document.getElementById('t9m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t9m4()
{
var obj = document.getElementById('t9m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t10m1()
{
var obj = document.getElementById('t10m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t10m2()
{
var obj = document.getElementById('t10m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t10m3()
{
var obj = document.getElementById('t10m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t10m4()
{
var obj = document.getElementById('t10m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t11m1()
{
var obj = document.getElementById('t11m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t11m2()
{
var obj = document.getElementById('t11m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t11m3()
{
var obj = document.getElementById('t11m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t11m4()
{
var obj = document.getElementById('t11m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t12m1()
{
var obj = document.getElementById('t12m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t12m2()
{
var obj = document.getElementById('t12m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t12m3()
{
var obj = document.getElementById('t12m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t12m4()
{
var obj = document.getElementById('t12m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t13m1()
{
var obj = document.getElementById('t13m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t13m2()
{
var obj = document.getElementById('t13m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t13m3()
{
var obj = document.getElementById('t13m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t13m4()
{
var obj = document.getElementById('t13m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t14m1()
{
var obj = document.getElementById('t14m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t14m2()
{
var obj = document.getElementById('t14m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t14m3()
{
var obj = document.getElementById('t14m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t14m4()
{
var obj = document.getElementById('t14m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t15m1()
{
var obj = document.getElementById('t15m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t15m2()
{
var obj = document.getElementById('t15m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t15m3()
{
var obj = document.getElementById('t15m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t15m4()
{
var obj = document.getElementById('t15m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t16m1()
{
var obj = document.getElementById('t16m1_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


function t16m2()
{
var obj = document.getElementById('t16m2_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};

function t16m3()
{
var obj = document.getElementById('t16m3_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};

function t16m4()
{
var obj = document.getElementById('t16m4_time_table');
if (obj.style.display =='none')
{
    obj.style.display = 'block';
}
};


//要確認頁面上僅有一個時間表
function m1_time1()
{
var obj1 = document.getElementById('t1m1_time_table');
var obj2 = document.getElementById('t1m2_time_table');
var obj3 = document.getElementById('t1m3_time_table');
var obj4 = document.getElementById('t1m4_time_table');

    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }

};

function m1_time2()
{
    var obj1 = document.getElementById('t1m1_time_table');
    var obj2 = document.getElementById('t1m2_time_table');
    var obj3 = document.getElementById('t1m3_time_table');
    var obj4 = document.getElementById('t1m4_time_table');
if (obj1.style.display !='none')
{
    obj1.style.display = 'none';
}
if (obj3.style.display !='none')
{
    obj3.style.display = 'none';
}
if (obj4.style.display !='none')
{
    obj4.style.display = 'none';
}
};

function m1_time3()
{
    var obj1 = document.getElementById('t1m1_time_table');
    var obj2 = document.getElementById('t1m2_time_table');
    var obj3 = document.getElementById('t1m3_time_table');
    var obj4 = document.getElementById('t1m4_time_table');
if (obj1.style.display !='none')
{
    obj1.style.display = 'none';
}
if (obj2.style.display !='none')
{
    obj2.style.display = 'none';
}
if (obj4.style.display !='none')
{
    obj4.style.display = 'none';
}
};

function m1_time4()
{
    var obj1 = document.getElementById('t1m1_time_table');
    var obj2 = document.getElementById('t1m2_time_table');
    var obj3 = document.getElementById('t1m3_time_table');
    var obj4 = document.getElementById('t1m4_time_table');
if (obj1.style.display !='none')
{
    obj1.style.display = 'none';
}
if (obj2.style.display !='none')
{
    obj2.style.display = 'none';
}
if (obj3.style.display !='none')
{
    obj3.style.display = 'none';
}

};

//點擊後便出現該間戲院電影資訊
function theater_01()
{
    var obj1 = document.getElementById('theater_01');

    if (obj1.style.display =='none')
    {
        obj1.style.display = 'block';
    }
};
//    else{
//        obj.style.display = 'none';
//    }



function theater_02()
{
    var obj2 = document.getElementById('theater_02');

    if (obj2.style.display =='none')
    {
        obj2.style.display = 'block';
    }

};

function theater_03()
{
    var obj3 = document.getElementById('theater_03');

    if (obj3.style.display =='none')
    {
        obj3.style.display = 'block';
    }

};

function theater_04()
{
    var obj4 = document.getElementById('theater_04');
    if (obj4.style.display =='none')
    {
        obj4.style.display = 'block';
    }
};
function theater_05()
{
    var obj5 = document.getElementById('theater_05');
    if (obj5.style.display =='none')
    {
        obj5.style.display = 'block';
    }
};
function theater_06()
{
    var obj6 = document.getElementById('theater_06');
    if (obj6.style.display =='none')
    {
        obj6.style.display = 'block';
    }
};
function theater_07()
{
    var obj7 = document.getElementById('theater_07');
    if (obj7.style.display =='none')
    {
        obj7.style.display = 'block';
    }
};
function theater_08()
{
    var obj8 = document.getElementById('theater_08');
    if (obj8.style.display =='none')
    {
        obj8.style.display = 'block';
    }
};
function theater_09()
{
    var obj9 = document.getElementById('theater_09');
    if (obj9.style.display =='none')
    {
        obj9.style.display = 'block';
    }
};
function theater_10()
{
    var obj10 = document.getElementById('theater_10');
    if (obj10.style.display =='none')
    {
        obj10.style.display = 'block';
    }
};
function theater_11()
{
    var obj11 = document.getElementById('theater_11');
    if (obj11.style.display =='none')
    {
        obj11.style.display = 'block';
    }
};
function theater_12()
{
    var obj12 = document.getElementById('theater_12');
    if (obj12.style.display =='none')
    {
        obj12.style.display = 'block';
    }
};
function theater_13()
{
    var obj13 = document.getElementById('theater_13');
    if (obj13.style.display =='none')
    {
        obj13.style.display = 'block';
    }
};
function theater_14()
{
    var obj14 = document.getElementById('theater_14');
    if (obj14.style.display =='none')
    {
        obj14.style.display = 'block';
    }
};
function theater_15()
{
    var obj15 = document.getElementById('theater_15');
    if (obj15.style.display =='none')
    {
        obj15.style.display = 'block';
    }
};
function theater_16()
{
    var obj16 = document.getElementById('theater_16');
    if (obj16.style.display =='none')
    {
        obj16.style.display = 'block';
    }
};



//要確認頁面上僅有一間戲院
function theater1()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater2()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater3()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater4()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater5()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater6()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater7()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater8()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
};

function theater9()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater10()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater11()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater12()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater13()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater14()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater15()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj16.style.display !='none')
    {
    obj16.style.display = 'none';
    }
}

function theater16()
{
var obj1 = document.getElementById('theater_01');
var obj2 = document.getElementById('theater_02');
var obj3 = document.getElementById('theater_03');
var obj4 = document.getElementById('theater_04');
var obj5 = document.getElementById('theater_05');
var obj6 = document.getElementById('theater_06');
var obj7 = document.getElementById('theater_07');
var obj8 = document.getElementById('theater_08');
var obj9 = document.getElementById('theater_09');
var obj10 = document.getElementById('theater_10');
var obj11 = document.getElementById('theater_11');
var obj12 = document.getElementById('theater_12');
var obj13 = document.getElementById('theater_13');
var obj14 = document.getElementById('theater_14');
var obj15 = document.getElementById('theater_15');
var obj16 = document.getElementById('theater_16');

    if (obj1.style.display !='none')
    {
        obj1.style.display = 'none';
    }
    if (obj2.style.display !='none')
    {
        obj2.style.display = 'none';
    }
    if(obj3.style.display !='none')
    {
        obj3.style.display = 'none';
    }
    if(obj4.style.display !='none')
    {
    obj4.style.display = 'none';
    }
    if(obj5.style.display !='none')
    {
    obj5.style.display = 'none';
    }
    if(obj6.style.display !='none')
    {
    obj6.style.display = 'none';
    }
    if(obj7.style.display !='none')
    {
    obj7.style.display = 'none';
    }
    if(obj8.style.display !='none')
    {
    obj8.style.display = 'none';
    }
    if(obj9.style.display !='none')
    {
    obj9.style.display = 'none';
    }
    if(obj10.style.display !='none')
    {
    obj10.style.display = 'none';
    }
    if(obj11.style.display !='none')
    {
    obj11.style.display = 'none';
    }
    if(obj12.style.display !='none')
    {
    obj12.style.display = 'none';
    }
    if(obj13.style.display !='none')
    {
    obj13.style.display = 'none';
    }
    if(obj14.style.display !='none')
    {
    obj14.style.display = 'none';
    }
    if(obj15.style.display !='none')
    {
    obj15.style.display = 'none';
    }

}









