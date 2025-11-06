var isDate = function (input) {
  //   write your code here
	let reg=/\d{2}\/\d{2}\/\d{4}/
	return reg.test(input);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
