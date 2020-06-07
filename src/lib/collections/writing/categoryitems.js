/* Writing: building a list of writing per category to be displayed on the category's page */

module.exports = collection => {
	let writingPerCategory = {}
	collection.getFilteredByGlob("./src/writing/*.md").forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(writingPerCategory[category]))
			writingPerCategory[category].push(item)
		else
			writingPerCategory[category] = [item]
	})
	return writingPerCategory
};
