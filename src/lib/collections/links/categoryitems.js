/* Links: building a list of links per category to be displayed on the category's page */

module.exports = collection => {
	let linksPerCategory = {}
	collection.getFilteredByGlob("./src/links/*.md").forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(linksPerCategory[category]))
			linksPerCategory[category].push(item)
		else
			linksPerCategory[category] = [item]
	})
	return linksPerCategory
};
