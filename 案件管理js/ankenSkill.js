(function () {
    'use strict';

    var TABLEFIELD = '請求関連'; // Field code of the table
    var NUMBERFIELD = '請求回数'; // Field code of number field in the table
    // Disable number fields in table at these events
    var disableEvents = [
        'app.record.edit.show',
        'app.record.create.show',
        'app.record.edit.change.' + TABLEFIELD,
        'app.record.create.change.' + TABLEFIELD
    ];

    kintone.events.on(disableEvents, function (event) {

        var record = event.record;
        // Disable number fields in table rows
        var count = record[TABLEFIELD].value.length;

        for (var i = 0; i < count; i++) {
            record[TABLEFIELD].value[i].value[NUMBERFIELD]['disabled'] = true;
        };
        return event;
    });

    // Number table rows at these events
    var numberEvents = [
        'app.record.create.submit',
        'app.record.edit.submit'
    ];

    kintone.events.on(numberEvents, function (event) {
        var record = event.record;
        // Auto-number the table rows
        var count = record[TABLEFIELD].value.length;
        for (var i = 0; i < count; i++) {
            record[TABLEFIELD].value[i].value[NUMBERFIELD].value = i + 1;
            record[TABLEFIELD].value[i].value[NUMBERFIELD]['disabled'] = true;
        }
        return event;
    });
})();

(function () {
    'use strict';

    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {

        var record = event.record;
        var sum_bara = 0;
        var sum_barb = 0;
        var sum_barc = 0;
        var tableRecords = record.案件.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value.bunruianken.value;
            var price = parseInt(tableRecords[i].value.見積金額.value);

            if (category === "外注費") {
                sum_bara += price;
            } else if (category === "機材費") {
                sum_barb += price;
            } else {
                sum_barc += price;
            }
        }

        record.見積小計.value = sum_barc;
        record.外注見積小計.value = sum_bara;
        record.機材見積小計.value = sum_barb;
        return event;
    });
})();

(function () {
    'use strict';

    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {

        var record = event.record;
        var sum_bara = 0;
        var sum_barb = 0;
        var sum_barc = 0;
        var tableRecords = record.案件.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value.bunruianken.value;
            var price = parseInt(tableRecords[i].value.請求金額.value);

            if (category === "外注費") {
                sum_bara += price;
            } else if (category === "機材費") {
                sum_barb += price;
            } else {
                sum_barc += price;
            }
        }

        record.請求小計.value = sum_barc;
        record.外注請求小計.value = sum_bara;
        record.機材請求小計.value = sum_barb;
        return event;
    });
})();

//movie
(function () {
    'use strict';

    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {

        var record = event.record;
        var sum_bara = 0;
        var sum_barb = 0;
        var tableRecords = record.案件.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value.種別.value;
            var price = parseInt(tableRecords[i].value.見積金額.value);
            var price請求 = parseInt(tableRecords[i].value.請求金額.value);

            if (category === "動画") {
                sum_bara += price;
                sum_barb += price請求;
            }
        }
        record.動画_見積小計.value = sum_bara;
        record.動画_請求小計.value = sum_barb;
        return event;
    });
})();



/*(function () {
    'use strict';

    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {

        var record = event.record;

        var sum_bara = 0;
        var sum_barb = 0;
        var sum_barc = 0;

        var tableRecords = record.案件.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value.bunruianken.value;
            var price = parseInt(tableRecords[i].value.請求金額.value);

            if (category === "外注費") {
                sum_bara += price;

            } else if (category === "機材費") {
                sum_barb += price;

            } else {
                sum_barc += price;

            }
        }

        record.請求小計.value = sum_barc;
        record.外注請求小計.value = sum_bara;
        record.機材請求小計.value = sum_barb;

        return event;
    });
})();*/

/*
// sum gaichuu,kizai from dropdown　RUN
(function () {
    "use strict";
    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {
        var record = event.record;

        var subTotals = new Array();
        var tableRecords = event.record.案件.value;

        for (var i = 0; i < tableRecords.length; i++) {
            var category = tableRecords[i].value['bunruianken'].value;
            if (!subTotals[category]) {
                subTotals[category] = 0;
            }
            var price = tableRecords[i].value['見積金額'].value;
            subTotals[category] -= -1 * price;
        }
        var sum_bara = 0;

        var sum_baraa = 0;
   //     var sum_baraaa = 0;


         event.record.見積小計.disabled = true;

    //    sum_bara += subTotals['案件'];
        sum_baraa += subTotals['undefined'];
     //   sum_baraaa = sum_bara + sum_baraa;


         if (event.type === 'app.record.create.submit' || event.type === 'app.record.edit.submit') {


           record.見積小計.value = sum_baraa;


         }

        return event;
    });
})();*/



// // sum gaichuu, from dropdown　RUN
// (function () {
//     "use strict";
//     kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {
//         var record = event.record;

//         var subTotals = new Array();
//         var tableRecords = event.record.案件.value;

//         for (var i = 0; i < tableRecords.length; i++) {
//             var category = tableRecords[i].value['bunruianken'].value;
//             if (!subTotals[category]) {
//                 subTotals[category] = 0;
//             }
//             var price = tableRecords[i].value['見積金額'].value;
//             subTotals[category] -= -1 * price;
//         }

//         var sum_barb = 0;
//         sum_barb += subTotals['外注費'];
//         if(sum_barb= 'NaN'){
//            return event;
//          }

//          if (event.type === 'app.record.create.submit' || event.type === 'app.record.edit.submit') {

//             record.外注見積小計.value = sum_barb;
//          }

//         return event;
//     });
// })();
// // sum gaichuu, from dropdown　RUN
// (function () {
//     "use strict";
//     kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', "app.record.edit.show", 'app.record.detail.show'], function (event) {
//         var record = event.record;

//         var subTotals = new Array();
//         var tableRecords = event.record.案件.value;

//         for (var i = 0; i < tableRecords.length; i++) {
//             var category = tableRecords[i].value['bunruianken'].value;
//             if (!subTotals[category]) {
//                 subTotals[category] = 0;
//             }
//             var price = tableRecords[i].value['見積金額'].value;
//             subTotals[category] -= -1 * price;
//         }

//         var sum_barb = 0;
//         sum_barb += subTotals['機材費'];
//         if(sum_barb= 'NaN'){
//            return event;
//          }

//          if (event.type === 'app.record.create.submit' || event.type === 'app.record.edit.submit') {

//             record.機材見積小計.value = sum_barb;
//          }

//         return event;
//     });
// })();
