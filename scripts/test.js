/**
 * Created by lihaixu on 17/8/1.
 */

var Encipher;
$(function() {
    $('#btnConfirm').click(newChecklistByJira);
    function newChecklistByJira() {
        $.ajax({
            url: 'view-source:http://jira2.lianjia.com/browse/SZTE-1430',
            data: "",
            type: "POST",
            contentType: "",
            dataType: "",
            success: function (result) {
                Encipher = result;
            }

        });
        console.log("result",result);
        return result;
    }
});