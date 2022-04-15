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
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "4月見積") {
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
                    return previousValue + Number(record.m4_total_0.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "4月外注見積") {
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
                    return previousValue + Number(record.m4_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "4月機材見積") {
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
                    return previousValue + Number(record.m4_total_2.value);
                }, 0).toLocaleString();
            });

            // 5
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "5月外注見積") {
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
                    return previousValue + Number(record.m5_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "5月機材見積") {
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
                    return previousValue + Number(record.m5_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "5月見積") {
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
                    return previousValue + Number(record.m5_total_0.value);
                }, 0).toLocaleString();
            });

            //6
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "6月機材見積") {
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
                    return previousValue + Number(record.m6_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "6月外注見積") {
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
                    return previousValue + Number(record.m6_total_1.value);

                }, 0).toLocaleString();

            });


            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "6月見積") {
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
                    return previousValue + Number(record.m6_total_0.value);
                }, 0).toLocaleString();
            });

            //7
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "7月機材見積") {
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
                    return previousValue + Number(record.m7_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "7月外注見積") {
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
                    return previousValue + Number(record.m7_total_1.value);

                }, 0).toLocaleString();

            });


            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "7月見積") {
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
                    return previousValue + Number(record.m7_total_0.value);
                }, 0).toLocaleString();
            });

            //8
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "8月機材見積") {
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
                    return previousValue + Number(record.m8_total_2.value);

                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "8月外注見積") {
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
                    return previousValue + Number(record.m8_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "8月見積") {
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
                    return previousValue + Number(record.m8_total_0.value);
                }, 0).toLocaleString();
            });

            //9
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "9月機材見積") {
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
                    return previousValue + Number(record.m9_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "9月外注見積") {
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
                    return previousValue + Number(record.m9_total_1.value);
                }, 0).toLocaleString();
            });

            // fix 9

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "9月見積") {
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
                    return previousValue + Number(record.m9_total_0.value);
                }, 0).toLocaleString();
            });

/*
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "9月見積") {
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
                    return previousValue + Number(record.m9_total_0.value);
                }, 0).toLocaleString();
            });

            */


            //10
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {

                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "10月機材見積") {
                                setClass2[i].appendChild(document.createElement('br'));
                                setClass2[i].appendChild(myIndextextB);
                                myIndextextB.style.color = 'red';
                                myIndextextB.style.font = "14px Arial";
                                break;
                            }
                        }

                    }
                }

                // myIndextextB.style.display = 'none';

                myIndextextB.textContent = "合計:  " + records.reduce(function (previousValue, record) {
                    return previousValue + Number(record.m10_total_2.value);

                }, 0).toLocaleString();

            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "10月外注見積") {
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
                    return previousValue + Number(record.m10_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "10月見積") {
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
                    return previousValue + Number(record.m10_total_0.value);
                }, 0).toLocaleString();
            });

            //11
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "11月機材見積") {
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
                    return previousValue + Number(record.m11_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "11月外注見積") {
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
                    return previousValue + Number(record.m11_total_1.value);
                }, 0).toLocaleString();
            });


            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "11月見積") {
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
                    return previousValue + Number(record.m11_total_0.value);

                }, 0).toLocaleString();

            });

            //12
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "12月機材見積") {
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
                    return previousValue + Number(record.m12_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "12月外注見積") {
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
                    return previousValue + Number(record.m12_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "12月見積") {
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
                    return previousValue + Number(record.m12_total_0.value);
                }, 0).toLocaleString();
            });

            //1
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');
                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "1月機材見積") {
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
                    return previousValue + Number(record.m1_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "1月外注見積") {
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
                    return previousValue + Number(record.m1_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "1月見積") {
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
                    return previousValue + Number(record.m1_total_0.value);
                }, 0).toLocaleString();
            });

            //2
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "2月機材見積") {
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
                    return previousValue + Number(record.m2_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "2月外注見積") {
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
                    return previousValue + Number(record.m2_total_1.value);
                }, 0).toLocaleString();
            });
// 20220106 sua 1 thanh 2 2 cho
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "2月見積") {
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
                    return previousValue + Number(record.m2_total_0.value);
                }, 0).toLocaleString();
            });

            //3
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "3月機材見積") {
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
                    return previousValue + Number(record.m3_total_2.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "3月外注見積") {
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
                    return previousValue + Number(record.m3_total_1.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('月')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "3月見積") {
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
                    return previousValue + Number(record.m3_total_0.value);
                }, 0).toLocaleString();
            });

            //gaichuu,kizai,hachuu,hokoku ichiran 発注購入報告
            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('発注購入報告')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "〈機材〉発注費合計") {
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
                    return previousValue + Number(record.発注費機材.value);
                }, 0).toLocaleString();
            });

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var myIndextextB = document.createElement('text');
                var setClass2 = document.getElementsByClassName('listviewer-unfixedcolumn');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent.match('発注購入報告')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            if (setClass2[i].textContent == "〈外注〉発注費合計") {
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
                    return previousValue + Number(record.発注費外注.value);
                }, 0).toLocaleString();
            });

            //check only exists ki

            getRecords(kintone.app.getId()).then(function (records) {

                var fla = document.getElementsByClassName('gaia-argoui-select-label');
                var setClass2 = document.getElementsByClassName('summary');

                for (var i = 0; i < fla.length; i++) {
                    if (fla[i].textContent === ('24期') || fla[i].textContent === ('25期') || fla[i].textContent === ('26期') || fla[i].textContent === ('27期') || fla[i].textContent === ('28期') || fla[i].textContent === ('29期')|| fla[i].textContent === ('1期')|| fla[i].textContent === ('2期')|| fla[i].textContent === ('3期')|| fla[i].textContent === ('4期')|| fla[i].textContent === ('5期')|| fla[i].textContent === ('6期')) {
                        for (var i = 0; i < setClass2.length; i++) {
                            setClass2[i].style.color == 'red';
                            setClass2[i].style.font == "14px Arial";
                            break;
                        }
                    }
                }
            });


        }, 5000);
    });
})();


(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on('app.record.detail.show', function (event) {
        setTimeout(function () {

            kintone.app.record.getFieldElement('動画_見積小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('動画_請求小計').style.color = "#ff0000";
            kintone.app.record.getFieldElement('発注費外注').style.color = "#ff0000";
            kintone.app.record.getFieldElement('発注費機材').style.color = "#ff0000";

            // kintone.app.record.getFieldElement('案件名').style.color = "#ff0000";
            // kintone.app.record.getFieldElement('案件名').style.fontWeight = "bold";
        }, 5000);
    });
})();

// kizai,gaichuu, shosai
(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on('app.record.detail.show', function (event) {
        setTimeout(function () {
            var setClass = document.getElementsByClassName('control-value-gaia value-5527016');
            // var elStatus1 = kintone.app.getFieldElements('行番号');

            //  var subTable = record['案件'].value;
            for (var i = 0; i < setClass.length; i++) {
                if (setClass[i].textContent == "機材費") {
                    setClass[i].style.color = "#4b0082";
                }
                else
                    if (setClass[i].textContent == "外注費") {
                        setClass[i].style.color = "#ff4500";
                    }
                    else
                        setClass[i].style.color = "#000000";
            }
        }, 5000);
    });
})();


// check checkbox zumi akai
(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on(['app.record.detail.show', "app.record.edit.submit", "app.record.edit.show"], function (event) {
        setTimeout(function () {

            var setClassColorAll = document.getElementsByClassName('control-value-gaia value-5527038');
            var gaito = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5527017 control-show-gaia');
            var gaichuukizai = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5527016 control-show-gaia');
            var year = document.getElementsByClassName('control-gaia control-date-field-gaia field-5527032 control-show-gaia');
            var saki = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5527014 control-show-gaia');
            var naiyo = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5527015 control-show-gaia');
            var kinkaku = document.getElementsByClassName('control-gaia control-decimal-field-gaia field-5527018 control-show-gaia');
            var day = document.getElementsByClassName('control-gaia control-date-field-gaia field-5527036 control-show-gaia');
            var pay = document.getElementsByClassName('control-gaia control-date-field-gaia field-5527037 control-show-gaia');
            var check = document.getElementsByClassName('control-gaia control-multiple_check-field-gaia field-5527038 control-show-gaia');
            var tr = $(kintone.app.record.getFieldElement('外注費機材費内容')).find('tr');

            for (var i = 0; i < tr.length; i++) {
                if (setClassColorAll[i].textContent == "済") {
                    // $(tr[i + 1]).css('background-color', '#B6B3B2');
                    setClassColorAll[i].style.color = "#ff0000";
                    gaito[i].style.backgroundColor = "#CCCCCC";
                    gaichuukizai[i].style.backgroundColor = "#CCCCCC";
                    year[i].style.backgroundColor = "#CCCCCC";
                    saki[i].style.backgroundColor = "#CCCCCC";
                    naiyo[i].style.backgroundColor = "#CCCCCC";
                    kinkaku[i].style.backgroundColor = "#CCCCCC";
                    day[i].style.backgroundColor = "#CCCCCC";
                    pay[i].style.backgroundColor = "#CCCCCC";
                    check[i].style.backgroundColor = "#CCCCCC";
                }
            }
            return event;
        }, 5000);
    });
})();

// check kanren
(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on(['app.record.detail.show', "app.record.edit.submit", "app.record.edit.show"], function (event) {
        setTimeout(function () {

            var setClassColorAll = document.getElementsByClassName('control-value-gaia value-5525662');
            var sttTable3 = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5525659 control-show-gaia');
            var dayTable3 = document.getElementsByClassName('control-gaia control-date-field-gaia field-5525660 control-show-gaia');
            var codeTable3 = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5525661 control-show-gaia');
            var hassoTable3 = document.getElementsByClassName('control-gaia control-multiple_check-field-gaia field-5525662 control-show-gaia');
            var tr = $(kintone.app.record.getFieldElement('請求関連')).find('tr');

            for (var i = 0; i < tr.length; i++) {
                if (setClassColorAll[i].textContent == "済") {
                    // $(tr[i + 1]).css('background-color', '#B6B3B2');
                    setClassColorAll[i].style.color = "#ff0000";
                    sttTable3[i].style.backgroundColor = "#CCCCCC";
                    dayTable3[i].style.backgroundColor = "#CCCCCC";
                    codeTable3[i].style.backgroundColor = "#CCCCCC";
                    hassoTable3[i].style.backgroundColor = "#CCCCCC";
                }
            }
            return event;
        }, 5000);
    });
})();



//gaichuu,kizai,table shukei
(function () {
    'use strict';

    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {
        var record = event.record;
        var sum_bara = 0;
        var sum_barb = 0;
        var tableRecords = record.外注費機材費内容.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value.分類.value;
            var price = parseInt(tableRecords[i].value.発注購入金額.value);

            if (category === "外注費") {
                sum_bara += price;
            } else if (category === "機材費") {
                sum_barb += price;
            }
        }

        record.発注費外注.value = sum_bara;
        record.発注費機材.value = sum_barb;
        return event;
    });
})();
