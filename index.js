/*
 * The best™ implementation of is-even
 */

module.exports = function isEven(n) {
	const nType = typeof n;
	
	switch (nType) {
		case "boolean":
			return !n;
		
		case "number":
			return (n % 2 == 0);

		case "string":
			const strs = n.split(' ');
			let nums = [];
			strs.forEach(s => {
				let num = parseInt(s);
				if(num != NaN) nums.push(num);
			});
			return nums;

		default:
			return false;
	}
};
