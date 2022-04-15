(function () {
    "use strict";
    //Create an event handler for the Record List
    kintone.events.on(['app.record.detail.show', "app.record.edit.submit", "app.record.edit.show"], function (event) {
        setTimeout(function () {

            var setClassColorAll = document.getElementsByClassName('control-value-gaia value-5522005');
            var idi = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5525552 control-show-gaia');
            var seikyugatsu = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5521529 control-show-gaia');
            var mitsumorikinkaku = document.getElementsByClassName('control-gaia control-decimal-field-gaia field-5521578 control-show-gaia');
            var mitsumorizumi = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5522004 control-show-gaia');
            var seikyukinkaku = document.getElementsByClassName('control-gaia control-decimal-field-gaia field-5521579 control-show-gaia');
            var seikyuzimi = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5522005 control-show-gaia');
            var seikyubi = document.getElementsByClassName('control-gaia control-date-field-gaia field-5522112 control-show-gaia');
            var seikyubango = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5522113 control-show-gaia');
            var setClass = document.getElementsByClassName('control-value-gaia value-5521523');
            //var id = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5525545 control-show-gaia');
            var name = document.getElementsByClassName('control-gaia control-single_line_text-field-gaia field-5521522 control-show-gaia');
            var shinchoku = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5521523 control-show-gaia');
            var moderu = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5521525 control-show-gaia');
            var seisaku = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5521527 control-show-gaia');
            var bunrui = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5525549 control-show-gaia');
            var busho = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5521528 control-show-gaia');
            var shyubetsu = document.getElementsByClassName('control-gaia control-single_select-field-gaia field-5522054 control-show-gaia');
            var tr = $(kintone.app.record.getFieldElement('案件')).find('tr');

            for (var i = 0; i < tr.length; i++) {
                if (setClassColorAll[i].textContent == "済") {
                    // $(tr[i + 1]).css('background-color', '#B6B3B2');
                    setClassColorAll[i].style.color = "#ff0000";

                    seikyugatsu[i].style.backgroundColor = "#b3b3b3";
                    mitsumorikinkaku[i].style.backgroundColor = "#b3b3b3";
                    mitsumorizumi[i].style.backgroundColor = "#b3b3b3";
                    seikyukinkaku[i].style.backgroundColor = "#b3b3b3";
                    seikyuzimi[i].style.backgroundColor = "#b3b3b3";
                    seikyubi[i].style.backgroundColor = "#b3b3b3";
                    seikyubango[i].style.backgroundColor = "#b3b3b3";

                }
                if (setClassColorAll[i].textContent == "先済") {
                    // $(tr[i + 1]).css('background-color', '#B6B3B2');
                    setClassColorAll[i].style.color = "#ff0000";

                    seikyugatsu[i].style.backgroundColor = "#b3b3b3";
                    mitsumorikinkaku[i].style.backgroundColor = "#b3b3b3";
                    mitsumorizumi[i].style.backgroundColor = "#b3b3b3";
                    seikyukinkaku[i].style.backgroundColor = "#b3b3b3";
                    seikyuzimi[i].style.backgroundColor = "#b3b3b3";
                    seikyubi[i].style.backgroundColor = "#b3b3b3";
                    seikyubango[i].style.backgroundColor = "#b3b3b3";

                }
                if (setClass[i].textContent == "完了") {
                    setClass[i].style.color = "#ff0000";

                    name[i].style.backgroundColor = "#cccccc";
                    shinchoku[i].style.backgroundColor = "#cccccc";
                    moderu[i].style.backgroundColor = "#cccccc";
                    seisaku[i].style.backgroundColor = "#cccccc";
                    bunrui[i].style.backgroundColor = "#cccccc";
                    busho[i].style.backgroundColor = "#cccccc";
                    shyubetsu[i].style.backgroundColor = "#cccccc";
                    idi[i].style.backgroundColor = "#cccccc";
                }

                if (setClass[i].textContent == "納品済") {
                    name[i].style.backgroundColor = "#99ff99";
                    shinchoku[i].style.backgroundColor = "#99ff99";
                    moderu[i].style.backgroundColor = "#99ff99";
                    seisaku[i].style.backgroundColor = "#99ff99";
                    bunrui[i].style.backgroundColor = "#99ff99";
                    busho[i].style.backgroundColor = "#99ff99";
                    shyubetsu[i].style.backgroundColor = "#99ff99";
                    idi[i].style.backgroundColor = "#99ff99";
                }

                if (setClass[i].textContent == "制作中") {
                    name[i].style.backgroundColor = "#fff352";
                    shinchoku[i].style.backgroundColor = "#fff352";
                    moderu[i].style.backgroundColor = "#fff352";
                    seisaku[i].style.backgroundColor = "#fff352";
                    bunrui[i].style.backgroundColor = "#fff352";
                    busho[i].style.backgroundColor = "#fff352";
                    shyubetsu[i].style.backgroundColor = "#fff352";
                    idi[i].style.backgroundColor = "#fff352";
                }

                // if (setClass[i].textContent == "完了" && setClassColorAll[i].textContent == "済") {
                //     idi[i].style.backgroundColor = "#b3b3b3";
                // }

            }
            return event;
        }, 5000);
    });
})();

