/* Library: building a list of books per yop to be displayed on the yop's page */

module.exports = collection => {
	let yops = {}
	collection.getFilteredByGlob("./src/library/**/*.md").forEach(item => {
		let yop = item.data.year_of_publication
		if (typeof yop !== "number")
			return
		if (Array.isArray(yops[yop]))
			yops[yop].push(item)
		else
			yops[yop] = [item]
	})
	return yops
};
