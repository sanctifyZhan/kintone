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
                            if (setClass2[i].textContent == "9月見積合計") {
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
                    return previousValue + Number(record.m9_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "10月見積合計") {
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
                    return previousValue + Number(record.m10_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "11月見積合計") {
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
                    return previousValue + Number(record.m11_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "12月見積合計") {
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
                    return previousValue + Number(record.m12_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "1月見積合計") {
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
                    return previousValue + Number(record.m1_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "2月見積合計") {
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
                    return previousValue + Number(record.m2_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "3月見積合計") {
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
                    return previousValue + Number(record.m3_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "4月見積合計") {
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
                    return previousValue + Number(record.m4_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "5月見積合計") {
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
                    return previousValue + Number(record.m5_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "6月見積合計") {
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
                    return previousValue + Number(record.m6_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "7月見積合計") {
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
                    return previousValue + Number(record.m7_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "8月見積合計") {
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
                    return previousValue + Number(record.m8_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "未定見積合計") {
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
                    return previousValue + Number(record.未定_見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "見積合計") {
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
                    return previousValue + Number(record.見積合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "請求合計") {
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
                    return previousValue + Number(record.請求合計.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "残請求") {
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
                    return previousValue + Number(record.残請求.value);
                }, 0).toLocaleString();
            });
        }, 5000);
    });
})();
