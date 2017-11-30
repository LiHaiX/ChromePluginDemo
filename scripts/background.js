/**
 * Created by lihaixu on 17/7/4.
 */
//监听浏览器tab更新
//这个其实暂时没用到

chrome.tabs.onUpdated.addListener(checkForValidUrl);

//监听请求
chrome.runtime.onMessage.addListener(checkRequestValidUrl);


function checkRequestValidUrl(request, sender, sendResponse){
    console.log(request);
    console.log(sender.tab? "Request from a content script:"+sender.tab.url:"Request from the extension");
    if(typeof request.Query!=="undefined"&&typeof request.Query.LocalStore!=="undefined"){
        var res=localStorage[request.Query.LocalStore];//抓取本地数据
        if(typeof res!=="undefined"){
            sendResponse({flag:true,result:res});//响应请求
        }
    }
}

function checkForValidUrl(tabId, changeInfo, tab){
    if(tab.url.toLowerCase().indexOf("jira2.lianjia.com")>0){
        chrome.pageAction.show(tabId);//显示插件page_Action的图标
    }

    //if(tab.url.toLowerCase().indexOf("naotu.lianjia.com")>0){
    //    chrome.pageAction.show(tabId);//显示插件page_Action的图标
    //}
    else{
        chrome.pageAction.hide(tabId);
    }
}