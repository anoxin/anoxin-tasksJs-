const select = document.querySelector("select");
const spans = document.querySelectorAll("span");

const createNewOption = (data) => {
	for (let i = 0; i < data.length; i++) {
		let newOption = new Option(data[i].brand, `${data[i].brand}`);
		select.append(newOption);
	}
};

const getData = async () => {
	const response = await fetch('./cars.json');
	const data = await response.json();
	createNewOption(data.cars);
	select.addEventListener("change", (e) => {
		if (e.target[e.target.selectedIndex].value == "choose") {
			spans[0].textContent = e.target[e.target.selectedIndex].textContent;
			spans[1].textContent = "";
		}
		data.cars.forEach((elem) => {
			if (elem.brand == e.target[e.target.selectedIndex].value) {
				spans[0].textContent = `Тачка ${e.target[e.target.selectedIndex].value} ${elem.model}`;
				spans[1].textContent = `Цена: ${elem.price}$`;
			}
		});
	});
};

getData()
	.then(data => {
		console.log(data);
	})
	.then(error => {
		console.log(error);
	});
