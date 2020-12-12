//how to copy to clipboard https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyToClipboard() {
    let copyText = "https://annakovesdi.github.io/milestone-project-2/";
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}