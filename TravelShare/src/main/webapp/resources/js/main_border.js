const board_paging_number = document.getElementsByClassName("board_paging_number");

Array.from(board_paging_number).forEach((value) => {
	value.addEventListener('click', (e) => {
		const click_number = value.getAttribute("id");
		pagingRest(click_number);
	});
});

function pagingRest(click_number) {
	const xhttp = new XMLHttpRequest();
	const board_list_travel = document.getElementById("board_content");

	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;

		myobj =JSON.parse(target.responseText);

		Object.keys(myobj).forEach((key) => {
			Object.keys(myobj[key]).forEach((key2) => {
				console.log(myobj[key][key2]);
			})
		})
	});

	xhttp.open('POST', '/travelShare/boardrest/paging/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(click_number);
}