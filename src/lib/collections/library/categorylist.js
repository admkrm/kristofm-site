/* Library: building a list of categories to be displayed on the search page */

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
		typeof item.data.category === "string"
	&&  catSet.add(item.data.category))
		return [...catSet].sort(sortAphabetical);
};
