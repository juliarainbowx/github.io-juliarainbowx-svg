$(document).ready(() => {
  setBg();
  $(".editor").draggable();

  $("#editor").keyup(() => {
    setBg();
  });
});

function setBg() {
  var plainSvg = $("#editor").val();
  var escapedSvg = escapeHtml(plainSvg);
  var result = "background-image: url(\"data:image/svg+xml,"+escapedSvg+"\");";

  $("body").attr("style", result);
}
function escapeHtml(unsafe) {
    return unsafe
         .replace(/#/g, "%23")
         .replace(/</g, "%3C")
         .replace(/>/g, "%3E")
         .replace(/"/g, "'")
         .replace(/\s{2,}/g, " ")
 }
