/* Library: building a list of photographers to be displayed on the search page */

const sortAphabetical = (x, y) => {
	if(x.toLowerCase() !== y.toLowerCase()) {
		x = x.toLowerCase();
		y = y.toLowerCase();
	}
	return x > y ? 1 : (x < y ? -1 : 0);
}

module.exports = collection => {
  let catSet = new Set();
	collection.getFilteredByGlob("./src/library/**/*.md").forEach(item =>
		typeof item.data.photographer === "string" &&  catSet.add(item.data.photographer))
		return [...catSet].sort(sortAphabetical);
};
