var arr = ["Kishorg5"]
var len = arr.length
for (let i = 0; i < len; i++) {
    var searchTerm = arr[i] //"Vaibhavt";
    var url = window.location.href;
    for (let j = 0; j < 2; j++) {
        var url = window.location.href;
        // Check if the URL contains the "username" parameter
        var hasUsernameParam = url.includes(`username=${searchTerm}`)
        if (!hasUsernameParam) {
            $(document).ready(function () {
                // Define the search term you want to input

                // Find the search bar and input field
                var searchBar = $("#username");
                searchBar.val(searchTerm);

                // Click on the search button
                $("input[type='submit'][value='Search']").click(); // Replace "search-button" with the actual ID of your search button

            });
        } else if (hasUsernameParam) {
            try {
                $(document).ready(function () {
                    var checkbox = $('input[name="bulk_id"][class="bulk-checkbox m-checkable"]');

                    // Check the checkbox
                    checkbox.prop("checked", true);
                    var link = $(".dropdown-item.bulk-action-button[data-name='block_member']");
                    if (link.length > 0 && $(".col.text-right").text() == ' - ') {
                        link.click();
                        alert(`removed ${searchTerm}`)
                        console.log(`removed ${searchTerm} `)
                    } else {
                        alert(`not removed ${searchTerm}`)
                        console.warn("Link not found. Please ensure the selector is accurate.");
                    }
                });
            } catch (e) {
                console.log(e)
            }
        }
        setTimeout(function () { console.log("executed") }, 20000)
    }
}


// function wait() {
//     $(document).ready(function () {
//         var checkbox = $("#option76188");

//         // Check the checkbox
//         checkbox.prop("checked", true);
//         var link = $(".dropdown-item.bulk-action-button[data-name='block_member']");
//         var link = $(".dropdown-item.bulk-action-button[data-name='block_member']");
//         if (link.length > 0) {
//             link.click();
//             console.log(`removed ${searchTerm} `)
//         } else {
//             console.warn("Link not found. Please ensure the selector is accurate.");
//         }
//     })
// }