$(document).ready(() => {

    $(".eatMe").on("submit", function(event) {
        event.preventDefault();
        // capturing the value of burger_id
        let burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);

        // ajax call to put
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id            
        }).then(function() {
            location.reload();
        })
    });
});