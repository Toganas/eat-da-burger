$(document).ready(() => {

    $(".eatMe").on("submit", (event) => {
        event.preventDefault();
        // capturing the value of burger_id
        let burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        // ajax call to put
        // $.ajax({
        //     url: "/api/burger/" + burger_id,
        //     method: "PUT"
        // }).then((result) => {
        //     location.reload();
        // })
    });
});