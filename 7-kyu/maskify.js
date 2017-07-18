// return masked string
function maskify(cc) {
	if (cc.length > 4) {
		cc = '#'.repeat(cc.length - 4) + cc.slice(-4);
	}
	return cc;
}
