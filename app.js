// $("#btn-close").click(function() {
//     $('div#div_support').addClass("none");
// });
// $(document).on("keydown", function(evt) {
//     if (evt.keyCode == 27) {
//         $('div#div_support').addClass("none");
//     }
// });
// $("#fileUpload").change(function() {
//     previewFile();
// });
// function previewFile() {
//     var inputFile = $("input[type=file]")[0].files;
//     if (inputFile != undefined) {
//         $.each(inputFile, function(f) {
//             $('.text_file_upload').append("<p class='p-file-name'>" + inputFile[f].name + " <img src='/media/check.png' height='10' width='10'> </p> ");
//         });
//     }
//     $('#text-file').hide();
// }