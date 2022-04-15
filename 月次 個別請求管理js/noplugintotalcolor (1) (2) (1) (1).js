
(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on('app.record.index.show', function (event) {
        setTimeout(function () {

            var fla = document.getElementsByClassName('recordlist-header-cell-gaia label-5527709 recordlist-header-sortable-gaia')[0]; 
            var fla2 = document.getElementsByClassName('recordlist-header-cell-gaia label-5527815 recordlist-header-sortable-gaia')[0]; 
            var fla3 = document.getElementsByClassName('recordlist-header-cell-gaia label-5527819 recordlist-header-sortable-gaia')[0]; 
            var fla4 = document.getElementsByClassName('recordlist-header-cell-gaia label-5527814 recordlist-header-sortable-gaia')[0]; 
            var fla5 = document.getElementsByClassName('recordlist-header-cell-gaia label-5527818 recordlist-header-sortable-gaia')[0]; 
            var fla6 = document.getElementsByClassName('recordlist-header-cell-gaia label-5527770 recordlist-header-sortable-gaia')[0]; 

           //var fla19 = document.getElementsByClassName('recordlist-header-cell-inner-gaia')[0]; 
           // var fla20 = document.getElementsByClassName('recordlist-header-label-gaia')[0]; 


            fla2.style.color = "#ff0000";
            fla.style.color = "#ff0000";
            fla3.style.color = "#ff0000";
            fla4.style.color = "#ff0000";
            fla5.style.color = "#ff0000";
            fla6.style.color = "#ff0000";

          //  $("recordlist-header-cell-inner-gaia").find("span").color="#000";

          //  var mauden = document.querySelectorAll(".span");
          //  mauden.style.color="#000";

            return event;
        }, 3000);
    });
})();



/*

(function () {
    "use strict";
    kintone.events.on('app.record.index.show', function (event) {
        setTimeout(function () {

            var fla = document.getElementsByClassName('gaia-argoui-select-label');

            for (var i = 0; i < fla.length; i++) {
                if (fla[i].textContent.match('期')) {

                 
                }
                else   {
                var setClass = document.getElementsByClassName('recordlist-header-cell-gaia');
                var setClass4 = document.querySelectorAll('table.recordlist-gaia th span')
             setClass[8].style.color = "red";
             setClass[8].style.font = "14px Arial";
             setClass4[14].style.color = "#333";
             setClass4[14].style.font = "14px Arial";
            
             setClass[12].style.color = "red";
             setClass[12].style.font = "14px Arial";
             setClass4[20].style.color = "#333";
             setClass4[20].style.font = "14px Arial";

             setClass[13].style.color = "red";
             setClass[13].style.font = "14px Arial";
             setClass4[22].style.color = "#333";
             setClass4[22].style.font = "14px Arial";

             setClass[14].style.color = "red";
             setClass[14].style.font = "14px Arial";
             setClass4[24].style.color = "#333";
             setClass4[24].style.font = "14px Arial";

             setClass[15].style.color = "red";
             setClass[15].style.font = "14px Arial";
             setClass4[26].style.color = "#333";
             setClass4[26].style.font = "14px Arial";

             setClass4[30].style.color = "#333";
             setClass4[30].style.font = "14px Arial";
             setClass4[28].style.color = "#333";
             setClass4[28].style.font = "14px Arial";

                setClass[16].style.color = "red";
                setClass[16].style.font = "14px Arial";
                setClass4[30].style.color = "#333";
               setClass4[30].style.font = "14px Arial";
            }
            }
        }, 0).toLocaleString();
    }, 5000);
})();

*/

(function () {
    "use strict";
    var getRecords = function (app, tmpRecords) {
        var limit = 500;
        var tmpRecords = tmpRecords || [];
        return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
            app: app,
            query: kintone.app.getQueryCondition() + 'limit ' + limit + ' offset ' + tmpRecords.length
        }).then(function (response) {
            tmpRecords = tmpRecords.concat(response.records);
            return response.records.length === limit ? getRecords(app, tmpRecords) : tmpRecords;
        });
    }

    kintone.events.on('app.record.index.show', function (event) {
        setTimeout(function () {

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                   // if (fla[i].textContent.match('月') || fla[i].textContent.match('期')) {
     //               if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "制作割合") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
       //             }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.制作割合.value);
                }, 0).toLocaleString();
            });
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                   // if (fla[i].textContent.match('月') || fla[i].textContent.match('期')) {
         //           if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "モデル割合") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
          //          }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.モデル割合.value);
                }, 0).toLocaleString();
            });

             getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                   // if (fla[i].textContent.match('月') || fla[i].textContent.match('期')) {
         //           if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "全体割合･制") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
         //           }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.制作割合全体.value);
                }, 0).toLocaleString();
            });

             getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                   // if (fla[i].textContent.match('月') || fla[i].textContent.match('期')) {
         //           if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "全体割合･モ") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
          //          }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.モデル割合全体.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                   // if (fla[i].textContent.match('月') || fla[i].textContent.match('期')) {
        //            if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求合計") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
         //           }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.請求合計.value);
                }, 0).toLocaleString();
            });
        }, 5000);
    });
})();
