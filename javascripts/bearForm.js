import { makeBears } from './river.js';

let bears = [];

const submit = () => {
	$('#submit').click(() => {
		if ($('#name').val() !== '' && $('#img').val() !== '') {
			let name = $('#name').val();
			let img = $('#img').val();

			bears.push({ name: `${name}`, img: `${img}`, fishCaught: 0 });

			makeBears(bears);
			$('form')[0].reset();
		} else {
			alert('Please enter a name and image.');
		}
	});
};

export { submit };
