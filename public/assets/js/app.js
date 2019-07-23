$(document).ready(()=>{

$(".eatMe").on("submit", (event) => {
    event.preventDefault();

    let burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
    });
});

//    let dataid = $(this).attr("data-id");
//     let dataval = $(this).attr("data-val", true);
    // $.ajax({url:"/api/burger/", method: "PUT", data: data}).then(function(result){
    //     console.log("hello");
    // })
// })
// })