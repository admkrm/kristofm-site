/* Gallery: building a list of items per category to be displayed on the category's page */

module.exports = collection => {
	let itemsPerCategory = {}
	collection.getFilteredByGlob("./src/gallery/*.md").forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(itemsPerCategory[category]))
			itemsPerCategory[category].push(item)
		else
			itemsPerCategory[category] = [item]
	})
	return itemsPerCategory
};
