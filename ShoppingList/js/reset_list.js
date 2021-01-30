/* Handler to add an item to the list
	Calls insert_item.php to dump item in DB
*/

var reset_list = function() {
    //The form in the HTML
    const resetBttn = document.getElementById("resetBttn");

    //When the user submits the form (clicks the button)
    resetBttn.addEventListener('click', function (event) {
        event.preventDefault();

        console.log("reset");

        //This is the backend file inserting in the DB
        const php = "php/reset_list.php";

        //This is what we send to the server for the PHP file
        const xhr = new XMLHttpRequest();

        //Connect to the PHP
        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Everything ok, get the response
                console.log(xhr.responseText);

                // Call a refresh of the list of names
                select_items();
            }
        };
        xhr.send();
    });
};
reset_list();
