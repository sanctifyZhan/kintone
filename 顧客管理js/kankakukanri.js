(function () {
    "use　strict";
    kintone.events.on(['app.record.create.change.zipcode', 'app.record.edit.change.zipcode'], function (event) {
        var zipcode = event.record.zipcode.value;
        kintone.proxy(
            'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode,
            'GET',
            {},
            {},
            function (body) {
                var response = JSON.parse(body);
                var record = kintone.app.record.get();
                if (response.status == 200) {
                    if (response.results != null) {
                        if (response.results.length > 0) {
                            var tmp = '';
                            tmp = tmp + (response.results[0].address1 != null ? response.results[0].address1 : '');
                            tmp = tmp + (response.results[0].address2 != null ? response.results[0].address2 : '');
                            tmp = tmp + (response.results[0].address3 != null ? response.results[0].address3 : '');
                            record.record.address.value = tmp;
                            kintone.app.record.set(record);
                        } else {
                            record.record.address.value = '←　郵便番号を修正してください。_01(' + response.message + ')';
                            kintone.app.record.set(record);
                        }
                    } else {
                        record.record.address.value = '←　郵便番号を修正してください。_02(' + response.message + ')';
                        kintone.app.record.set(record);
                    }
                } else if (response.message) {
                    record.record.address.value = '←　郵便番号を修正してください。_03(' + response.message + ')';
                    kintone.app.record.set(record);
                } else {
                    alert('郵便番号から住所を検索しましたが、失敗しました_04');
                }
            },
            function (body) {
                alert('郵便番号から住所の検索に失敗しました_05');
            }
        );
        return event;
    });
})();