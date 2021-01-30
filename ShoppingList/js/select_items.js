/* Handler for the display of items entered in the DB
	Uses the var itemRaw which comes json-encoded from the DB through select_items.php
*/

var select_items = function () {

	//This is the backend file connecting to the DB
	const php = "php/select_items.php";

	//Handles the server call to the PHP file and the data we get back
	const xhr = new XMLHttpRequest();

	//Will contain the raw data from the DB
	let itemRaw = [];

	//Connect to the PHP
    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        //This is stuff to tell us what is going on
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            //Everything ok, get the names in JSON
            itemRaw = JSON.parse(xhr.responseText);
			console.log(itemRaw); // print response

			//The HTML container for the list of items
			let container = document.getElementById('listContainer');
			//Clean up the html
			container.innerHTML = "";

			//Dump items in the DOM
			for (let c in itemRaw) {
				//c contains every item found, one at a time
				console.log(c);

				//Container <p> for each item
				let itemP = document.createElement('p');
				itemP.className = "item";

				//Item: Quantity + Description
				let quantitySPAN = document.createElement('span');
				quantitySPAN.innerHTML = itemRaw[c].quantity;

				let descriptionSPAN = document.createElement('span');
				descriptionSPAN.innerHTML = itemRaw[c].description;

				//Organize the structure and dump in html
				itemP.appendChild(quantitySPAN);
				itemP.appendChild(descriptionSPAN);
				container.appendChild(itemP);

			}
        }
	};
	xhr.send();
};
select_items();

