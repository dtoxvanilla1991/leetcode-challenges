function timeForMilkAndCookies(date) {
	const christmas = date.toString().split(' ');
    console.log(christmas)
	return christmas[1] == 'Dec' && christmas[2] == '24' ? true : false;
}
timeForMilkAndCookies(new Date(2013, 11, 24));

const d = new Date(2013, 11, 24);
console.log(d)