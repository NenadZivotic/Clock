const dateElement = document.getElementById('date');

const digitalTimeElement = document.getElementById('digital-clock');	

const analogTimeElement = {
	hours: document.getElementById('hours'),
	minutes: document.getElementById('minutes'),
	seconds: document.getElementById('seconds')
}

const getCurrentDate = () => moment().format('Do. MMMM YYYY.');

const getCurrentTime = (type) => { 		
	if (type == 'sec') return moment().format('ss');
	if (type == 'min') return moment().format('mm');
	if (type == 'hrs') return moment().format('h');	
	return moment().format('h:mm:ss a');
}
	
const displayDate = date => {
	dateElement.innerHTML = date;
}

const displayDigitalTime = time => {
	digitalTimeElement.innerHTML = time;
};

const displayAnalogTime = time => {
	let secondsDeg = getCurrentTime('sec') * 6;
	let minutesDeg = getCurrentTime('min') * 6;
	let hoursDeg = getCurrentTime('hrs') * 30;	
	
	analogTimeElement.seconds.style.transform = "rotate(" + secondsDeg + `deg)`;
	analogTimeElement.minutes.style.transform = "rotate(" + minutesDeg + `deg)`;
	analogTimeElement.hours.style.transform = "rotate(" + hoursDeg + `deg)`;	
};

const alarm = times => {
	times.filter(time => {
		if (time.alarmStart <= getCurrentTime() && time.alarmEnd >= getCurrentTime()) console.log('alarm');
	});
};
						 
const clock = () => {
	displayDate(getCurrentDate());
	displayDigitalTime(getCurrentTime());
	displayAnalogTime(getCurrentTime());
	alarm(alarmTimes);
}

let alarmTimes = [{alarmStart: '5:06 pm', alarmEnd: '5:08 pm'}];

setInterval(clock, 1000);