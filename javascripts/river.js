const makeBears = (array) => {
	$('#bears').html('');

	array.forEach((item, index) => {
		$('#bears').append(`<div class="card">
                            <img src="${item.img}" class="card-img-top" alt="${item.name}">
                            <div class"card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <div>Fish Caught: ${item.fishCaught}</div>
                              <button type="button" id="attempt-${index}" class="btn btn-secondary">Attempt</button>
                              <button type="button" id="success-${index}" class="btn btn-success">Catch</button>
                              <div id="timestampDiv-${index}"></div>
                            </div>
                          </div>`);
		totalCatches(index, item, array);
		timestampGenerator(index, item, array);
		timestampPrinter(item, index);
	});
};

const totalCatches = (index, item, array) => {
	$(`#success-${index}`).on('click', () => {
		item.fishCaught += 1;
		makeBears(array);
	});
};

const timestampGenerator = (index, item, array) => {
	$(`#attempt-${index}`).on('click', () => {
		item.timestamps.push(`Attempt: ${Date()}`);
		makeBears(array);
	});
	$(`#success-${index}`).on('click', () => {
		item.timestamps.push(`Catch: ${Date()}`);
		makeBears(array);
	});
};

const timestampPrinter = (item, index) => {
	item.timestamps.forEach((timestampItem) => {
		$(`#timestampDiv-${index}`).append(timestampItem + '<br>');
	});
};

export { makeBears };
