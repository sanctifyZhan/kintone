
(function () {
    "use strict";

    var TABLE = '案件';
    var ID = 'id';
    kintone.events.on("app.record.edit.submit", function (event) {
        var record = event.record;
        var table = record[TABLE].value;

        for (var i in table) {
            if (!table.hasOwnProperty(i)) {
                continue;
            }
            var row = table[i].value;
            var num = row[ID].value;
            if ((!num) || (isNaN(num))) {
                row[ID].error = 'ID は必須です、または数値が必要です。';
            }
        }
        return event;
    });
})();


(function () {
    "use strict";

    // 更新時の処理
    kintone.events.on("app.record.edit.submit", function (event) {
        var record = event.record;
        var subTable = record['案件'].value;


        var last_element = subTable[subTable.length - 1];
        var first_element = subTable[0];
        //var elStatus = kintone.app.getFieldElements('id');
        //var fontColorRed = "#ff0000";

        for (var i = 0; i < subTable.length; i++) {
            if (subTable[i].value.id.value != 0) {
                subTable[i].value.id.disabled = true;
            }
            else
                if (subTable[i].value.id.value == 0) {
                    subTable[i].value.id.disabled = false;
                }
        }


        if (first_element.value.id.value != 0) {
            for (var i = 0; i < subTable.length; i++) {
                if (subTable[i].value.id.value == undefined) {
                    alert("[追加カット･編集]\n   IDが空欄のまま保存するとエラーになります！\n   IDは「売上報告アプリ」より、未使用のレコード番号を入力、またはレコードを新規追加して入力してください。\n   確認後にページを再読み込みして保存完了。　");
                }
            }
        }

        if (first_element.value.id.value != 0) {

            if (last_element.value.id.value != 0) {
                console.log(" ");
            }
        }

        return event;

    });
})();


(function () {
    "use strict";
    kintone.events.on("app.record.create.submit.success", function (event) {

        var postApp = 70; // 別アプリのID
        var recId = event.recordId; // テーブルを登録したレコードを更新するためのID
        var subTable = '案件'; //サブテーブルのフィールドコード

        var headers = [ //コピーするサブテーブル外のフィールドのフィールドコード
            '営業担当',
            '期',
            '顧客名',
            'デベロッパー名',
            '案件名',
            '顧客カナ',
            'デベ仮名'
        ];
        var record = event.record;
        // テーブルを更新するための値
        var table = event.record.案件.value;
        var array = [];
        return kintone.api(kintone.api.url('/k/v1/records', true), 'POST', {
            app: postApp,
            records: event.record[subTable].value.map(function (row) {
                headers.forEach(function (header) {
                    row.value[header] = event.record[header];
                });
                return row.value;
            })
        }).then(function (resp) {
            // ↓↓↓↓↓↓↓↓↓↓↓↓登録が成功したレコードID をテーブルに登録するための処理
            console.log(resp);
            for (var i = 0; i < table.length; i++) {
                array.push({
                    "id": table[i].id,
                    "value": {
                        "id": {
                            "value": resp.ids[i]
                        }
                    }
                });
            }

            var body = {
                "app": kintone.app.getId(),
                "id": recId,
                "record": {
                    "案件": {
                        "value": array
                    }
                }
            }

            return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body).then(function (resp) {
                // success
                console.log(resp);
            }, function (error) {
                // error
                console.log(error);
            });
        });

    });
})();

(function () {
    "use strict";

    // 更新時の処理
    kintone.events.on("app.record.edit.submit.success", function (event) {
        var postApp = 70; // 別アプリのID
        var recId = event.recordId; // テーブルを登録したレコードを更新するためのID
        var subTable = '案件'; //サブテーブルのフィールドコード
        var headers = [ //コピーするサブテーブル外のフィールドのフィールドコード
            '営業担当',
            '期',
            '顧客名',
            'デベロッパー名',
            '案件名',
            '顧客カナ',
            'デベ仮名'
        ];
        var record = event.record;
        console.log(event.record[subTable].value.map(function (row) {
            headers.forEach(function (header) {
                row.value[header] = event.record[header];
            });
            return row.value;
        }))

        return kintone.api(kintone.api.url('/k/v1/records', true), 'PUT', {
            app: postApp,
            records:
                event.record[subTable].value.map(function (row) {
                    headers.forEach(function (header) {
                        row.value[header] = event.record[header];
                    });
                    return {
                        id: row.value.id.value,
                        record: row.value
                    };
                })
        });
    });
})();

(function () {
    "use strict";

    kintone.events.on('app.record.edit.show', function (event) {
        var record = event.record;
        var subTable = record['案件'].value;

        for (var i = 0; i < subTable.length; i++) {
            if (subTable[i].value.id.value != 0) {
                subTable[i].value.id.disabled = true;
            }
            else
                if (subTable[i].value.id.value == 0) {
                    subTable[i].value.id.disabled = false;
                }
        }

        return event;
    });
})();

