//--------------------jQuery DOM Practice--------------------//

// Part One

    // Question #1
    $(function () {
        console.log("Let's get ready to party with jQuery!");

    // Question #2
    $("article img").addClass("image-center");

    // Question #3
    $("article p:last-child").remove();

    // Question #4
    $("#title").css("font-size", Math.random() * 100);

    // Question #5
    $("ol").append($("<li>", {text: "I can add to lists with jQuery!"}));

    // Question #6
    $("aside")
    .empty().append($("<p>", {text: "Sorry about that list :("}));

    // Question #7
    $(".form-control").on('keyup blur change', function () {
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color",
            "rgb(" + red + "," + green + "," + blue + ")");
        });

    // Question #8
        $("img").on('click', function (e) {
        $(e.target).remove();
        });
    });

//--------------------End--------------------//