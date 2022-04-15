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
                    if (fla[i].textContent.match('進行なし') || fla[i].textContent.match('納品済') || fla[i].textContent.match('制作中') || fla[i].textContent.match('モデリング中') || fla[i].textContent.match('総合') || fla[i].textContent.match('外注費') || fla[i].textContent.match('機材費') || fla[i].textContent.match('請求') || fla[i].textContent.match('請求月未確') || fla[i].textContent.match('制作部') || fla[i].textContent.match('CS部')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "見積金額") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
                    }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.見積金額.value);
                }, 0).toLocaleString();
            });
        }, 5000);
    });
})();

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
                    if (fla[i].textContent.match('総合') || fla[i].textContent.match('外注費') || fla[i].textContent.match('機材費') || fla[i].textContent.match('請求') || fla[i].textContent.match('請求月未確') || fla[i].textContent.match('制作部') || fla[i].textContent.match('CS部')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求金額") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
                    }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.請求金額.value);
                }, 0).toLocaleString();
            });
        }, 5000);
    });
})();


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
                    if (fla[i].textContent.match('総合') || fla[i].textContent.match('外注費') || fla[i].textContent.match('機材費') || fla[i].textContent.match('請求') || fla[i].textContent.match('請求月未確') || fla[i].textContent.match('制作部') || fla[i].textContent.match('CS部')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求額(売掛)") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }
                    }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.ルックアップ_請求額_売掛.value);
                }, 0).toLocaleString();
            });
        }, 5000);
    });
})();

(function () {
    "use strict";
    kintone.events.on('app.record.index.show', function (event) {
        setTimeout(function () {

            var fla = document.getElementsByClassName('gaia-argoui-select-label');

            for (var i = 0; i < fla.length; i++) {
                if (fla[i].textContent.match('平均')) {

                    var setClass = document.getElementsByClassName('recordlist-header-cell-gaia');
                    var setClass4 = document.querySelectorAll('table.recordlist-gaia th span')
                    setClass[17].style.color = "red";
                    setClass[17].style.font = "14px Arial";
                    setClass4[32].style.color = "#333";
                    setClass4[32].style.font = "14px Arial";
                    setClass[16].style.color = "red";
                    setClass[16].style.font = "14px Arial";
                    setClass4[30].style.color = "#333";
                    setClass4[30].style.font = "14px Arial";
                }
            }
        }, 0).toLocaleString();
    }, 5000);
})();

/*
(function () {
    "use strict";

    kintone.events.on("app.record.edit.submit", function (event) {

        var text = event.record['sss'].value;
        var drop = event.record['getdr'].value;

        if (text == drop) {
           // drop.error = 'not same';
            event.record['getdr'].error = '!';
        }
        else
            event.record['getdr'].error = '特別料金を入力してください!';
        return event;
    });
})();

*/
/*

(function () {
    "use strict";

    kintone.events.on("app.record.edit.submit", function (event) {

        var text = event.record['請求月'].value;
        var drop = event.record['請求月報告'].value;
        //event.record['請求月報告'].error
        if (text == drop) {
            // drop.error = 'same';
        }
        else
            event.record['請求月報告'].error = '請求月と同じ値を入力してください';
        return event;
    });
})();

*/

(function () {
    "use strict";

    kintone.events.on("app.record.edit.submit", function (event) {

        var year = new Date().getFullYear();
        var text = event.record['見積日'].value;
        var drop = event.record['請求月'].value;
        var dropyear = event.record['期'].value;
        var a = year + 1;
        var x = "";
        var record = event.record;

        if (drop == '01月' && dropyear == '23期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2019-01-10";
        }

        if (drop == '02月' && dropyear == '23期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2019-02-10";
        }
        if (drop == '03月' && dropyear == '23期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2019-03-10";
        }
        if (drop == '04月' && dropyear == '23期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2019-04-10";
        }
        if (drop == '05月' && dropyear == '23期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2019-05-10";
        }
        if (drop == '06月' && dropyear == '23期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2019-06-10";
        }
        if (drop == '07月' && dropyear == '23期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2019-07-10";
        }
        if (drop == '08月' && dropyear == '23期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2019-08-10";
        }

        if (drop == '09月' && dropyear == '23期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2018-09-10";
        }
        if (drop == '10月' && dropyear == '23期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2018-10-10";
        }

        if (drop == '11月' && dropyear == '23期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2018-11-10";
        }
        if (drop == '12月' && dropyear == '23期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2018-12-10";
        }
        /*  if ((drop === '') || (drop === '0') || (drop === 'undefined') || (drop === '-----') || (drop === ' ') || (drop == '') || (drop == '0') || (drop == 'undefined') || (drop == '-----') || (drop == ' ')) {
              console.log("asdsadasd");
              alert("choose getDr field");
              //aria-posinset
  
          }
         var dropauto = event.record['請求月'];
         var getTwoOfMonth = drop.substr(0, 2);
         if ((text.substr(5, 2)) != getTwoOfMonth) {
             event.record['見積日'].error = 'required same month value of 請求月!';
         }
        */
        if (drop == '01月' && dropyear == '24期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2020-01-10";
        }

        if (drop == '02月' && dropyear == '24期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2020-02-10";
        }
        if (drop == '03月' && dropyear == '24期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2020-03-10";
        }
        if (drop == '04月' && dropyear == '24期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2020-04-10";
        }
        if (drop == '05月' && dropyear == '24期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2020-05-10";
        }
        if (drop == '06月' && dropyear == '24期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2020-06-10";
        }
        if (drop == '07月' && dropyear == '24期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2020-07-10";
        }
        if (drop == '08月' && dropyear == '24期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2020-08-10";
        }

        if (drop == '09月' && dropyear == '24期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2019-09-10";
        }
        if (drop == '10月' && dropyear == '24期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2019-10-10";
        }

        if (drop == '11月' && dropyear == '24期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2019-11-10";
        }
        if (drop == '12月' && dropyear == '24期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2019-12-10";
        }

        if (drop == '01月' && dropyear == '25期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2021-01-10";
        }

        if (drop == '02月' && dropyear == '25期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2021-02-10";
        }
        if (drop == '03月' && dropyear == '25期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2021-03-10";
        }
        if (drop == '04月' && dropyear == '25期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2021-04-10";
        }
        if (drop == '05月' && dropyear == '25期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2021-05-10";
        }
        if (drop == '06月' && dropyear == '25期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2021-06-10";
        }
        if (drop == '07月' && dropyear == '25期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2021-07-10";
        }
        if (drop == '08月' && dropyear == '25期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2021-08-10";
        }

        if (drop == '09月' && dropyear == '25期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2020-09-10";
        }
        if (drop == '10月' && dropyear == '25期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2020-10-10";
        }

        if (drop == '11月' && dropyear == '25期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2020-11-10";
        }
        if (drop == '12月' && dropyear == '25期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2020-12-10";
        }
        if (drop == '01月' && dropyear == '26期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2022-01-10";
        }

        if (drop == '02月' && dropyear == '26期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2022-02-10";
        }
        if (drop == '03月' && dropyear == '26期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2022-03-10";
        }
        if (drop == '04月' && dropyear == '26期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2022-04-10";
        }
        if (drop == '05月' && dropyear == '26期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2022-05-10";
        }
        if (drop == '06月' && dropyear == '26期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2022-06-10";
        }
        if (drop == '07月' && dropyear == '26期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2022-07-10";
        }
        if (drop == '08月' && dropyear == '26期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2022-08-10";
        }

        if (drop == '09月' && dropyear == '26期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2021-09-10";
        }
        if (drop == '10月' && dropyear == '26期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2021-10-10";
        }

        if (drop == '11月' && dropyear == '26期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2021-11-10";
        }
        if (drop == '12月' && dropyear == '26期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2021-12-10";

        }
        if (drop == '01月' && dropyear == '1期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2022-01-10";
        }

        if (drop == '02月' && dropyear == '1期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2022-02-10";
        }
        if (drop == '03月' && dropyear == '1期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2022-03-10";
        }
        if (drop == '04月' && dropyear == '1期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2022-04-10";
        }
        if (drop == '05月' && dropyear == '1期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2022-05-10";
        }
        if (drop == '06月' && dropyear == '1期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2022-06-10";
        }
        if (drop == '07月' && dropyear == '1期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2022-07-10";
        }
        if (drop == '08月' && dropyear == '1期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2022-08-10";
        }

        if (drop == '09月' && dropyear == '1期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2022-09-10";
        }
        if (drop == '10月' && dropyear == '1期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2021-10-10";
        }

        if (drop == '11月' && dropyear == '1期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2021-11-10";
        }
        if (drop == '12月' && dropyear == '1期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2021-12-10";
        }
        if (drop == '01月' && dropyear == '2期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2023-01-10";
        }

        if (drop == '02月' && dropyear == '2期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2023-02-10";
        }
        if (drop == '03月' && dropyear == '2期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2023-03-10";
        }
        if (drop == '04月' && dropyear == '2期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2023-04-10";
        }
        if (drop == '05月' && dropyear == '2期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2023-05-10";
        }
        if (drop == '06月' && dropyear == '2期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2023-06-10";
        }
        if (drop == '07月' && dropyear == '2期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2023-07-10";

        }
        if (drop == '08月' && dropyear == '2期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2023-08-10";
        }

        if (drop == '09月' && dropyear == '2期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2023-09-10";
        }
        if (drop == '10月' && dropyear == '2期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2022-10-10";
        }

        if (drop == '11月' && dropyear == '2期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2022-11-10";
        }
        if (drop == '12月' && dropyear == '2期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2022-12-10";
        }
        if (drop == '01月' && dropyear == '3期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2024-01-10";
        }
        if (drop == '02月' && dropyear == '3期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2024-02-10";
        }
        if (drop == '03月' && dropyear == '3期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2024-03-10";
        }
        if (drop == '04月' && dropyear == '3期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2024-04-10";
        }
        if (drop == '05月' && dropyear == '3期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2024-05-10";
        }
        if (drop == '06月' && dropyear == '3期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2024-06-10";
        }
        if (drop == '07月' && dropyear == '3期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2024-07-10";
        }
        if (drop == '08月' && dropyear == '3期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2024-08-10";
        }

        if (drop == '09月' && dropyear == '3期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2024-09-10";
        }
        if (drop == '10月' && dropyear == '3期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2023-10-10";
        }

        if (drop == '11月' && dropyear == '3期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2023-11-10";
        }
        if (drop == '12月' && dropyear == '3期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2023-12-10";
        }
        if (drop == '01月' && dropyear == '4期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2025-01-10";
        }

        if (drop == '02月' && dropyear == '4期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2025-02-10";
        }
        if (drop == '03月' && dropyear == '4期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2025-03-10";
        }
        if (drop == '04月' && dropyear == '4期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2025-04-10";
        }
        if (drop == '05月' && dropyear == '4期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2025-05-10";
        }
        if (drop == '06月' && dropyear == '4期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2025-06-10";
        }
        if (drop == '07月' && dropyear == '4期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2025-07-10";

        }
        if (drop == '08月' && dropyear == '4期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2025-08-10";
        }

        if (drop == '09月' && dropyear == '4期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2025-09-10";
        }
        if (drop == '10月' && dropyear == '4期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2024-10-10";
        }

        if (drop == '11月' && dropyear == '4期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2024-11-10";
        }
        if (drop == '12月' && dropyear == '4期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2024-12-10";
        }
        if (drop == '01月' && dropyear == '4期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2025-01-10";
        }

        if (drop == '02月' && dropyear == '4期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2025-02-10";
        }
        if (drop == '03月' && dropyear == '4期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2025-03-10";
        }
        if (drop == '04月' && dropyear == '4期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2025-04-10";
        }
        if (drop == '05月' && dropyear == '4期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2025-05-10";
        }
        if (drop == '06月' && dropyear == '4期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2025-06-10";
        }
        if (drop == '07月' && dropyear == '4期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2025-07-10";

        }
        if (drop == '08月' && dropyear == '4期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2025-08-10";
        }

        if (drop == '09月' && dropyear == '4期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2025-09-10";
        }
        if (drop == '10月' && dropyear == '4期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2024-10-10";
        }

        if (drop == '11月' && dropyear == '4期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2024-11-10";
        }
        if (drop == '12月' && dropyear == '4期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2024-12-10";
        }
        //
        if (drop == '01月' && dropyear == '5期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2026-01-10";
        }

        if (drop == '02月' && dropyear == '5期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2026-02-10";
        }
        if (drop == '03月' && dropyear == '5期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2026-03-10";
        }
        if (drop == '04月' && dropyear == '5期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2026-04-10";
        }
        if (drop == '05月' && dropyear == '5期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2026-05-10";
        }
        if (drop == '06月' && dropyear == '5期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2026-06-10";
        }
        if (drop == '07月' && dropyear == '5期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2026-07-10";

        }
        if (drop == '08月' && dropyear == '5期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2026-08-10";
        }

        if (drop == '09月' && dropyear == '5期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2026-09-10";
        }
        if (drop == '10月' && dropyear == '5期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2025-10-10";
        }

        if (drop == '11月' && dropyear == '5期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2025-11-10";
        }
        if (drop == '12月' && dropyear == '5期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2025-12-10";
        }
        //
        if (drop == '01月' && dropyear == '6期') {
            //x = a + "1997-01-10";
            //  text = x;
            event.record['見積日'].value = "2027-01-10";
        }

        if (drop == '02月' && dropyear == '6期') {
            //  x = a + "-02-10";
            // text = x;
            event.record['見積日'].value = "2027-02-10";
        }
        if (drop == '03月' && dropyear == '6期') {
            //   x = a + "-03-10";
            // text = x;
            event.record['見積日'].value = "2027-03-10";
        }
        if (drop == '04月' && dropyear == '6期') {
            //    x = a + "-04-10";
            // text = x;
            event.record['見積日'].value = "2027-04-10";
        }
        if (drop == '05月' && dropyear == '6期') {
            //   x = a + "-05-10";
            //   text = x;
            event.record['見積日'].value = "2027-05-10";
        }
        if (drop == '06月' && dropyear == '6期') {
            //  x = a + "-06-10";
            //   text = x;
            event.record['見積日'].value = "2027-06-10";
        }
        if (drop == '07月' && dropyear == '6期') {
            //  x = a + "-07-10";
            //  text = x;
            event.record['見積日'].value = "2027-07-10";

        }
        if (drop == '08月' && dropyear == '6期') {
            // x = a + "-08-10";
            //   text = x;
            event.record['見積日'].value = "2027-08-10";
        }

        if (drop == '09月' && dropyear == '6期') {
            //    x = year + "-09-10";
            //   text = x;
            event.record['見積日'].value = "2027-09-10";
        }
        if (drop == '10月' && dropyear == '6期') {
            //   x = year + "-10-10";
            //   text = x;
            event.record['見積日'].value = "2026-10-10";
        }

        if (drop == '11月' && dropyear == '6期') {
            //  x = year + "-11-10";
            //  text = x;
            event.record['見積日'].value = "2026-11-10";
        }
        if (drop == '12月' && dropyear == '6期') {
            //  x = year + "-12-10";
            // text = x;
            event.record['見積日'].value = "2026-12-10";
        }
        return event;
    });
})();


