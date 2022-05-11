const body = document.body;
body.innerHTML = `
<div class="cars">
	<select name="cars-select" id="select">
		<option value="choose">Выберите тачку</option>
	</select>
	<span class="cars-span" style="display: block">Выберите тачку</span>
	<span class="cars-span" style="display: block"></span>
</div>
<style type="text/css">
	.cars {
		margin-left: 70px;
		margin-top: 70px;
	}
	
	select {
		width: 400px;
		font-size: 30px;
	}
	
	span {
		display: block;
		margin-top: 20px;
		font-size: 50px;
}
</style>`;

const select = document.querySelector("select");
const spans = document.querySelectorAll("span");
let haveOption = false;
let myData;

const createNewOption = (data) => {
	for (let i = 0; i < data.length; i++) {
		let newOption = new Option(data[i].brand, `${data[i].brand}`);
		select.append(newOption);
	}
};

const getData = async () => {
	const response = await fetch('./cars.json');
	const data = await response.json();
	if (!haveOption) {
		createNewOption(data.cars);
	}
	myData = data;
	return data;
};

select.addEventListener("change", (e) => {
	if (e.target[e.target.selectedIndex].value == "choose") {
		spans[0].textContent = e.target[e.target.selectedIndex].textContent;
		spans[1].textContent = "";
	}
	myData.cars.forEach((elem) => {
		if (elem.brand == e.target[e.target.selectedIndex].value) {
			spans[0].textContent = `Тачка ${e.target[e.target.selectedIndex].value} ${elem.model}`;
			spans[1].textContent = `Цена: ${elem.price}$`;
		}
	});
	haveOption = true;
	getData();
});

getData()
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.log(error);
	});
