$(document).ready(function(){
    // Primary Tabs
    $("#container-ps #primary-tab li a:first").addClass("active-tab");
    $(".primary-tab-sections article").hide();
    $(".primary-tab-sections article:first").show();

    $("#container-ps #primary-tab li a").click(function(){
        $("#container-ps #primary-tab li a").removeClass("active-tab");
        $(this).addClass("active-tab");
        $("#container-ps article").hide();

        var active = $(this).attr("href");
        $(active).show();
        return false;
    });

    // Secondary Tabs
    $("#ps-a #sub-tab-a li a:first").addClass("active-tab-sec");
    $(".container-c article").hide();
    $(".container-c article:first").show();

    $("#ps-a #sub-tab-a li a").click(function(){
        $("#ps-a #sub-tab-a li a").removeClass("active-tab-sec");
        $(this).addClass("active-tab-sec");
        $("#ps-a article").hide();

        var active = $(this).attr("href");
        $(active).show();
        return false;
    });

    // Text Editor
    $('#text-editor').summernote();
    $('#text-editor').summernote('destroy')

});

var edit = function() {
    $('#text-editor').summernote({focus: true})
    $('#edit').css("display","none");
    $('#preview').css("float","right");
    $('#preview').css("display","block");
};
var preview = function() {
    var markup = $('#text-editor').summernote('code');
    $('#text-editor').summernote('destroy')
    $('#preview').css("display","none");
    $('#edit').css("float","right");
    $('#edit').css("display","block");
};
