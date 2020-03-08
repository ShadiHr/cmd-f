chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

if (url.includes('facebook')) {
    document.getElementById("not-approved").style.display = 'block'
    document.getElementById("not-approved-acknowledged").onclick = function()
{
    window.close();
}
} else if (url.includes('webmd')) {
    document.getElementById("approved").style.display = 'block'
    document.getElementById("approved-acknowledged").onclick = function()
{
    window.close();
}
}})

