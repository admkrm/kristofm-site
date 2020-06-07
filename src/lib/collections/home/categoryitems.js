/* Writing: building a list of writing per category to be displayed on the category's page */

module.exports = collection => {
	let homePerCategory = {}
	collection.getFilteredByGlob(["./src/writing/*.md", ".src/gallery/*.md","./src/notes/*.md","./src/links/*.md"]).forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(homePerCategory[category]))
			homePerCategory[category].push(item)
		else
			homePerCategory[category] = [item]
	})
	return homePerCategory
};
