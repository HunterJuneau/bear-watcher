const makeBears = (array) => {
	$('#bears').html('');

	array.forEach((item, index) => {
		$('#bears').append(`<div class="card">
                            <img src="${item.img}" class="card-img-top" alt="${item.name}">
                            <div class"card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <button type="button" id="attempt-${index}" class="btn btn-secondary">Attempt</button>
                              <button type="button" id="success-${index}" class="btn btn-success">Success</button>
                            </div>
                          </div>`);
	});
};

export { makeBears };
