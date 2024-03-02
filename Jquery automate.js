var arr = localStorage.getItem("myGlobalVariable").split(',')
if(localStorage.getItem("flag")== '1'){
    localStorage.setItem("flag", 0)
    window.open("https://www.ixacademy.us/en/IX-ADMIN/in/v13/manage-members/","_self")
}
if($(".m-portlet__is-empty-title").text() == "No contents to be displayed"){
    arr.pop()
    localStorage.setItem("myGlobalVariable",arr) 
    window.open("https://www.ixacademy.us/en/IX-ADMIN/in/v13","_self")
}

var len = arr.length

    var searchTerm = arr[len -1] //"Vaibhavt";
    var url = window.location.href;
    
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

                    if($(".m-portlet__is-empty-title").text() == "No contents to be displayed"){
                        arr.pop()
                        localStorage.setItem("myGlobalVariable",arr) 
                        window.open("https://www.ixacademy.us/en/IX-ADMIN/in/v13/manage-members/","_self")
                    }
                    var checkbox = $('input[name="bulk_id"][class="bulk-checkbox m-checkable"]');

                    // Check the checkbox
                    checkbox.prop("checked", true);
                    var link = $(".dropdown-item.bulk-action-button[data-name='block_member']");
                    if (link.length > 0 && $(".col.text-right").text() == ' - ') {
                        arr.pop()
                        localStorage.setItem("myGlobalVariable",arr)
                        localStorage.setItem("flag",1)
                        link.click();
                        alert(`removed ${searchTerm}`)
                        console.log(`removed ${searchTerm} `)
                       
                    } else if($(".col.text-right").text() != ' - ' && $(".col.text-right").length != 0){
                        arr.pop()
                        localStorage.setItem("myGlobalVariable",arr)
                        localStorage.setItem("flag",1)
                        alert(`not removed ${searchTerm}`)
                        console.warn("Link not found. Please ensure the selector is accurate.");
                        
                    }
                });
            } catch (e) {
                console.log(e)
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
