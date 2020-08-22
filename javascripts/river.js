const makeBears = (array) => {
	$('#bears').html('');

	array.forEach((item) => {
		$('#bears').append(`<div class="card">
                            <img src="${item.img}" class="card-img-top" alt="${item.name}">
                            <div class"card-body">
                              <h5 class="card-title">${item.name}</h5>
                            </div>
                          </div>`);
	});
};

export { makeBears };
