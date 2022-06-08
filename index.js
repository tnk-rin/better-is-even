/*
 * The best™ implementation of is-even
 */

module.exports = function isEven(n) {
	const nType = typeof n;
	let nums = [];

	switch (nType) {
		case "boolean":
			return !n;
		
		case "number":
			return (Math.trunc(n) % 2 == 0);

		case "string":
			n = n.replace(/[^\d]/g, ' ');
			const strs = n.split(' ');
			strs.filter(f => f != '').forEach(s => {
				let num = isEven(parseInt(s));
				if(num != NaN) nums.push(num);
			});
			return nums;

		default:
			if(Array.isArray(n)) {
				n.forEach(m => {
					nums.push(isEven(m));
				});
				return nums;
			}
			return false;
	}
};
