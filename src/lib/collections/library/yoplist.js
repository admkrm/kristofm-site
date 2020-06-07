/* Library: building a list of yops to be displayed on the search page */

const sortAscending = (x, y) => {
	return x > y ? 1 : (x < y ? -1 : 0);
}

module.exports = collection => {
  let catSet = new Set();
	collection.getFilteredByGlob("./src/library/**/*.md").forEach(item =>
		typeof item.data.year_of_publication === "number" &&  catSet.add(item.data.year_of_publication))
	return [...catSet].sort(sortAscending);
};
