/* Notes: building a list of notes per category to be displayed on the category's page */

module.exports = collection => {
	let notesPerCategory = {}
	collection.getFilteredByGlob("./src/notes/*.md").forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(notesPerCategory[category]))
			notesPerCategory[category].push(item)
		else
			notesPerCategory[category] = [item]
	})
	return notesPerCategory
};
