$(document).ready(function () {
    $(".file-upload").change(function () {
        var arrs = $(this).val().split('\\');
        var filename = arrs[arrs.length - 1];
        $(".file-name").html(filename);
    });
});
