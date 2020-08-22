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
                            </div>
                          </div>`);
		totalCatches(index, item, array);
	});
};

const totalCatches = (index, item, array) => {
	$(`#success-${index}`).on('click', () => {
		item.fishCaught += 1;
		makeBears(array);
	});
};

export { makeBears };
