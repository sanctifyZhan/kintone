/*
(function () {
    "use strict";

    //Create an event handler for the Record List
    kintone.events.on('app.record.index.show', function (event) {
        setTimeout(function () {
            var fla = document.getElementsByClassName('gaia-argoui-select-label');
            var myIndextextB = document.createElement('text');
            var records = event.records;

            for (var i = 0; i < fla.length; i++) {
                if (fla[i].textContent.match('月') && fla[i].textContent.match('期')) {
                    var total = 0;
                    var n = total.toString();

                    records.forEach(function (item, index) {
                        total += Number(item.見積小計.value);
                    });
                    if (n.length == 4) {
                        var n2 = n.slice(0, -3) + "," + n.slice(1);
                        myIndextextB.textContent = "合計:￥" + n2;
                    } else if (n.length == 5) {
                        var n2 = n.slice(0, -3) + "," + n.slice(2);
                        myIndextextB.textContent = "合計:￥" + n2;
                    } else
                        if (n.length == 6) {
                            var n2 = n.slice(0, -3) + "," + n.slice(3);
                            myIndextextB.textContent = "合計:￥" + n2;
                        } else
                            if (n.length == 7) {
                                var n2 = n.slice(0, -3) + "," + n.slice(4);
                                var n3 = n2.slice(0, -7) + "," + n2.slice(1);
                                myIndextextB.textContent = "合計:￥" + n3;
                            }
                            else if (n.length > 6) {
                                var n2 = n.slice(0, -3) + "," + n.slice(5);
                                var n3 = n2.slice(0, -7) + "," + n2.slice(2);
                                myIndextextB.textContent = "合計:￥" + n3;
                            }

                    var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                    for (var i = 0; i < setClass2.length; i++) {
                        if (setClass2[i].textContent == "9月見積") {
                            setClass2[i].appendChild(document.createElement('br'));
                            setClass2[i].appendChild(myIndextextB);
                            myIndextextB.style.color = 'red';
                            myIndextextB.style.font = "bold 14px Arial";
                        }
                    }
                }
                else
                    myIndextextB.style.display = 'none';
            }
        }, 5000);
    })
})();


*/

(function () {
    "use strict";

    var fields = ['請求月', '見積金額', '案件'];
    var kamokuInfos = {
        '09月': 'm9_total_0',
        '10月': 'm10_total_0',
        '11月': 'm11_total_0',
        '12月': 'm12_total_0',
        '01月': 'm1_total_0',
        '02月': 'm2_total_0',
        '03月': 'm3_total_0',
        '04月': 'm4_total_0',
        '05月': 'm5_total_0',
        '06月': 'm6_total_0',
        '07月': 'm7_total_0',
        '08月': 'm8_total_0',
        '': 'mikaku_anken',
        '未定': 'mikaku_anken',
    }
    var kamokuInfos2 = {
        '09月': 'm9_total_1',
        '10月': 'm10_total_1',
        '11月': 'm11_total_1',
        '12月': 'm12_total_1',
        '01月': 'm1_total_1',
        '02月': 'm2_total_1',
        '03月': 'm3_total_1',
        '04月': 'm4_total_1',
        '05月': 'm5_total_1',
        '06月': 'm6_total_1',
        '07月': 'm7_total_1',
        '08月': 'm8_total_1',
        '': 'mikaku_gaichuhi',
        '未定': 'mikaku_gaichuhi',
    }
    var kamokuInfos3 = {
        '09月': 'm9_total_2',
        '10月': 'm10_total_2',
        '11月': 'm11_total_2',
        '12月': 'm12_total_2',
        '01月': 'm1_total_2',
        '02月': 'm2_total_2',
        '03月': 'm3_total_2',
        '04月': 'm4_total_2',
        '05月': 'm5_total_2',
        '06月': 'm6_total_2',
        '07月': 'm7_total_2',
        '08月': 'm8_total_2',
        '': 'mikaku_kisaihi',
        '未定': 'mikaku_kisaihi',
    }
    var events = ["app.record.edit.show", "app.record.create.show"];

    fields.forEach(function (field) {
        events.push("app.record.edit.change." + field);
        events.push("app.record.create.change." + field);
    })

    var totalFields = [];
    var totalFields2 = [];
    var totalFields3 = [];
    Object.keys(kamokuInfos).forEach(function (kamoku) {
        var tcode = kamokuInfos[kamoku];
        if (totalFields.indexOf(tcode) < 0) {
            totalFields.push(tcode);
        }
    });

    Object.keys(kamokuInfos2).forEach(function (kamoku2) {
        var tcode = kamokuInfos2[kamoku2];
        if (totalFields2.indexOf(tcode) < 0) {
            totalFields2.push(tcode);
        }
    });

    Object.keys(kamokuInfos3).forEach(function (kamoku3) {
        var tcode = kamokuInfos3[kamoku3];
        if (totalFields3.indexOf(tcode) < 0) {
            totalFields3.push(tcode);
        }
    });

    kintone.events.on(events, function (event) {
        var record = event.record;
        var record2 = event.record;
        var record3 = event.record;
        var subTable = record['案件'].value;

        totalFields.forEach(function (tcode) {
            record[tcode].value = "";
            record[tcode].disabled = true;
        });

        totalFields2.forEach(function (tcode2) {
            record[tcode2].value = "";
            record[tcode2].disabled = true;
        });

        totalFields3.forEach(function (tcode3) {
            record[tcode3].value = "";
            record[tcode3].disabled = true;
        });

        subTable.forEach(function (rows) {
            var kamoku = rows.value['請求月'].value;
            
                if ((rows.value['bunruianken'].value) == '外注費') {
                    if (Object.keys(kamokuInfos2).indexOf(kamoku) >= 0) {
                        var tcode2 = kamokuInfos2[kamoku];
                        if (rows.value['見積金額'].value) {
                            record2[tcode2].value -= -1 * Number(rows.value['見積金額'].value);
                        }
                    }
                }
                else
                    if ((rows.value['bunruianken'].value) == '機材費') {
                        if (Object.keys(kamokuInfos3).indexOf(kamoku) >= 0) {
                            var tcode3 = kamokuInfos3[kamoku];

                            if (rows.value['見積金額'].value) {
                                record3[tcode3].value -= -1 * Number(rows.value['見積金額'].value);
                            }
                        }
                    }
                    else
                    
                        if (Object.keys(kamokuInfos).indexOf(kamoku) >= 0) {
                            var tcode = kamokuInfos[kamoku];
        
                            if (rows.value['見積金額'].value) {
                                record[tcode].value -= -1 * Number(rows.value['見積金額'].value);
                            }
                        }
                    
        });
        return event;
    });
})();

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on('app.record.detail.show', function (event) {
        setTimeout(function () {
            var setClass = document.getElementsByClassName('control-value-gaia value-5521523');
            // var elStatus1 = kintone.app.getFieldElements('行番号');
            // var elStatus2 = kintone.app.getFieldElements('カット名');
            // var elStatus3 = kintone.app.getFieldElements('モデル');
            // var elStatus4 = kintone.app.getFieldElements('制作');
            // var elStatus5 = kintone.app.getFieldElements('部署');
            // var elStatus6 = kintone.app.getFieldElements('種別');
            // var elStatus7 = kintone.app.getFieldElements('期_0');

            for (var i = 0; i < setClass.length; i++) {
                if (setClass[i].textContent == "完了") {
                    setClass[i].style.color = "#ff0000";
                }
            }
        }, 5000);
    });
})();

// shokeiRED
(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on('app.record.detail.show', function (event) {
        setTimeout(function () {

            kintone.app.record.getFieldElement('見積小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('請求小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('外注見積小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('外注請求小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('機材見積小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('機材請求小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('見積合計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('請求合計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('残請求').style.color = "#ff0000";

            // kintone.app.record.getFieldElement('案件名').style.color = "#ff0000";
            // kintone.app.record.getFieldElement('案件名').style.fontWeight = "bold";

        }, 5000);
    });
})();

// (function () {
//     "use strict";
//     //Create an event handler for the Record List
//     kintone.events.on('app.record.detail.show', function (event) {
//         var setClass = document.getElementsByClassName('control-value-content-gaia'); 
//         if (setClass.textContent == "0") {
//             setClass.textContent = " ";
//             console.log("log 1" +setClass.textContent  );
//         }
//     });
// })();