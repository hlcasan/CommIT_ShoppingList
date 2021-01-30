/* Handler to reset the list of items
	Calls reset_list.php to delete rows in table
*/

var reset_list = function() {
    //The form in the HTML
    const resetBttn = document.getElementById("resetBttn");

    //When the user submits the form (clicks the button)
    resetBttn.addEventListener('click', function (event) {
        event.preventDefault();

        //This is the backend file interacting with the DB
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

                // Call a refresh of the list of items
                select_items();
            }
        };
        xhr.send();
    });
};
reset_list();
