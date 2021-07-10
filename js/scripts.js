$(document).ready(function () {


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".normalHeader").addClass("changeBg");
        } else {
            //remove the background property so it comes transparent again
            $(".normalHeader").removeClass("changeBg");
        }
    });

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });

    // show/hide pass

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        let input = $($(this).prev('input'));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // make input editable

    $(".editInput").click(function() {
        let input = $($(this).prev('input'));
        input.prop('disabled', function(i, v) { return !v; });
    });


    // upload image or file

    let tempTitle = '';
    let specialistTempTitle = '';

    var readURL = function(input , myUpload) {

        tempTitle = myUpload.parent().next('.title').text();
        specialistTempTitle = myUpload.parent().find('.title').text();

        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {

                //check accept attribute if it's not image & display only text name
                if (myUpload.attr('accept') !== 'image/*'){
                    myUpload.parent().find('.removeFile').fadeIn().css('display','flex');
                    let file = input.files[0].name;

                    myUpload.parent().next('.title').text(file)

                    // for upload file in "التخصصات ، specialist' block onlyyy
                    myUpload.parent().find('.title').text(file)
                } else{
                    myUpload.parent().find('.removeImage').fadeIn().css('display','flex');
                    myUpload.prev('img').attr('src', e.target.result);
                }
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change i', function(){
        readURL(this , $(this));
    });


    $('body').on('click', '.attaches .removeImage', function() {
        $(this).hide();
        $(this).parent().find('.file-upload').val('');
        $(this).next('img').attr('src', 'img/upload.png');
    });


    $('body').on('click', '.attaches .removeFile', function() {
        $(this).hide();
        $(this).parent().find('.file-upload').val('');
        $(this).parent().next('.title').text(tempTitle);
        $(this).parent().find('.title').text(specialistTempTitle);
    });


    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({scrollTop: 0}, 600);
    });

});

/* loading screen */
$(window).on('load', function () {

    $(".layer-preloader").fadeOut(700, function () {

        $(".lds-dual-ring").delay(1000).fadeOut(700);

        $("body").css("overflow-y", "auto");

    });

});