let soundElement = document.querySelector("button")

soundElement.addEventListener("click", playRandomSound, false);
soundElement.addEventListener("click", playRandomSound2, false);
soundElement.addEventListener("click", playRandomSound3, false);
let context = null;
let waveforms = ["sine", "square", "sawtooth", "triangle"];


function playRandomSound(event) {
	if (context ==null) {
		context = new AudioContext();
	
}

	const response = form.elements[0].value;
	const index = 1;

	

	let oscillatorNode = context.createOscillator();
	let gainNode = context.createGain();


	oscillatorNode.type = waveforms[Math.floor(Math.random()* waveforms.length)];

	let frequency = (response.charCodeAt(index) + Math.random() * 1000).toFixed(2);
	oscillatorNode.frequency.value = frequency;

	gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 15);


	oscillatorNode.connect(gainNode);
	gainNode.connect(context.destination);

	oscillatorNode.start(0);



	/*let background = 'rgb(' + [response.charCodeAt(index),0,0].join(',') + ')';

	document.body.style.backgroundColor = background;

	console.log(background);*/

	//find out range, map function

	var stringToColour = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;

}



document.body.style.backgroundColor = stringToColour(response);


	
	let freq = oscillatorNode.frequency.value;
	

	document.getElementById("frequency1").textContent = freq;




console.log(oscillatorNode);





}

function playRandomSound2(event) {
	if (context ==null) {
		context = new AudioContext();
	}

	const response = form.elements[0].value;
	const index2 = 2;


	let oscillatorNode = context.createOscillator();
	let gainNode = context.createGain();

	oscillatorNode.type = waveforms[Math.floor(Math.random()* waveforms.length)];

	let frequency = (response.charCodeAt(index2) + Math.random() * 1000).toFixed(2);
	oscillatorNode.frequency.value = frequency;

	gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 15);

	oscillatorNode.connect(gainNode);
	gainNode.connect(context.destination);

	oscillatorNode.start(0.2);


	let freq = oscillatorNode.frequency.value;
	

	document.getElementById("frequency2").textContent = freq
}

function playRandomSound3(event) {
	if (context ==null) {
		context = new AudioContext();
	}

	const response = form.elements[0].value;
	const index3 = 3;


	let oscillatorNode = context.createOscillator();
	let gainNode = context.createGain();

	oscillatorNode.type = waveforms[Math.floor(Math.random()* waveforms.length)];

	let frequency = (response.charCodeAt(index3) + Math.random() * 1000).toFixed(2);
	oscillatorNode.frequency.value = frequency;

	gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 15);

	oscillatorNode.connect(gainNode);
	gainNode.connect(context.destination);

	oscillatorNode.start(0.3);

	let freq = oscillatorNode.frequency.value;
	

	document.getElementById("frequency3").textContent = freq
}




