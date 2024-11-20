function accum(s) {
	return s.split("").map((a, index) => a.toUpperCase() + a.toLowerCase().repeat(index)).join("-")
}