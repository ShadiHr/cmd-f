chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

if (url.includes('facebook')) {
    document.getElementById("not-approved").style.display = 'block'
} else if (url.includes('webmd')) {
    document.getElementById("approved").style.display = 'block'
}})

document.getElementById("user-confirmation").onclick = function()
{
    window.close();
}