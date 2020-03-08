
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var tab = tabs[0];
    var title = tab.title;
    var foundApproved = false;

    for (i=0; i < Sources.length; i++) {
        foundApproved = title.includes(Sources[i])
    }

if (foundApproved) {
    document.getElementById("approved").style.display = 'block'
    document.getElementById("approved-acknowledged").onclick = function()
{
    window.close();
}
} else {
    document.getElementById("not-approved").style.display = 'block'
    document.getElementById("not-approved-acknowledged").onclick = function()
{
    window.close();
}
}
})

