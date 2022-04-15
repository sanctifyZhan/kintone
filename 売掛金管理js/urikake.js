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
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求金額(税抜)") {
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
                    return previousValue + Number(record.請求金額_税抜.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
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
                    return previousValue + Number(record.請求金額_税込.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "入金額") {
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
                    return previousValue + Number(record.入金額.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "振込料") {
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
                    return previousValue + Number(record.振込料.value);
                }, 0).toLocaleString();
            });

            // 税抜
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('税抜')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求金額(税抜)") {
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
                    return previousValue + Number(record.請求金額_税抜.value);
                }, 0).toLocaleString();
            });

            // all

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('一覧')) {
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
                    return previousValue + Number(record.請求金額_税込.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('一覧')) {
                    for (var i = 0; i < setClass2.length; i++) {
                        if (setClass2[i].textContent == "入金額") {
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
                    return previousValue + Number(record.入金額.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('一覧')) {
                    for (var i = 0; i < setClass2.length; i++) {
                        if (setClass2[i].textContent == "請求金額(税抜)") {
                            setClass2[i].appendChild(document.createElement('br'));
                            setClass2[i].appendChild(myIndextextB);
                            myIndextextB.style.color = 'red';
                            myIndextextB.style.font = "14px Arial";
                            break;
                        }}
                    }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.請求金額_税抜.value);
                }, 0).toLocaleString();
            });

            //振込料
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('一覧')) {
                    for (var i = 0; i < setClass2.length; i++) {
                        if (setClass2[i].textContent == "振込料") {
                            setClass2[i].appendChild(document.createElement('br'));
                            setClass2[i].appendChild(myIndextextB);
                            myIndextextB.style.color = 'red';
                            myIndextextB.style.font = "14px Arial";
                            break;
                        }}
                    }
                }
                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.振込料.value);
                }, 0).toLocaleString();
            });

            //not equal hokoku
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent!=="請求報告") {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "入金額") {
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
                    return previousValue + Number(record.入金額.value);
                }, 0).toLocaleString();
            });
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent!=="請求報告") {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "振込料") {
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
                    return previousValue + Number(record.振込料.value);
                }, 0).toLocaleString();
            });
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent!=="請求報告") {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求金額(税抜)") {
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
                    return previousValue + Number(record.請求金額_税抜.value);
                }, 0).toLocaleString();
            });
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent!=="請求報告") {
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
                    return previousValue + Number(record.請求金額_税込.value);
                }, 0).toLocaleString();
            });

            
        }, 5000);

        
    });
})();
