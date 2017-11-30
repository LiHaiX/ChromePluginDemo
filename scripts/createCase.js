/**
 * Created by lihaixu on 17/7/4.
 */
$(function() {
    $('#btnConfirm').click(copyText);
    function newChecklistByJira(jiraNo, projectName, projectUrl, owner, teamName) {
        $.ajax({
            url: 'http://naotu.lianjia.com/checklist/newChecklistByJira',
            data: JSON.stringify({
                "jiraNo": jiraNo,
                "projectName": projectName,
                "projectUrl": projectUrl,
                "owner": owner,
                "teamName": teamName
            }),
            cache: false,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            success: function (html) {
                $("#results").append(html);
            }
        });
    }

    function copyText() {
        var jiraNo = "";
        var projectName = "";
        var projectUrl = "";
        //todo
        var owner = getonwer();
        //console.log("owner",owner);
        var teamName = "";
        chrome.tabs.getSelected(function (tabs) {
            projectUrl = tabs.url;
            projectName = tabs.title;
            jiraNo = getJiraNo(projectUrl);
            newChecklistByJira(jiraNo, projectName, projectUrl, owner, teamName);
        });

    }

    function getonwer(){
        //document.cookie = ("name=AJS.conglomerate.cookie;domain=jira2.lianjia.com");
        //console.log("document.cookie",document.cookie)
    }

    function getJiraNo(projectUrl) {
        console.log("projectUrl",projectUrl);
        var arr = projectUrl.split("/");
        if(arr.length=5){
            var jiraNo = arr[arr.length-1];
            console.log(jiraNo);
            console.log("拆解url",jiraNo);
            return jiraNo;
        } else{
            console.log("域名不正确");
            return ""
        }
    }
});







