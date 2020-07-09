const books = require('google-books-search')
import * as R from 'ramda'

const renameKeys = R.curry((keysMap, obj) =>
	R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
)

const authorLens = R.lens(R.prop('authors'), R.assoc('authors'))

const chooseOnlyFirstAuthor = R.over(authorLens, R.head)

const nothing = () => {}

function setDefaultProperty(prop, defaultValue) {
	return R.ifElse(
		R.has(prop),
		R.tap(nothing),
		R.assoc(prop, defaultValue),
	)
}

const getRelevantData = R.map(
	R.pipe(
		chooseOnlyFirstAuthor,
		renameKeys({ authors: 'author' }),
		R.pick(['title', 'author', 'publisher', 'thumbnail'])
	)
)

export const promiseBooksSearch = (title) => new Promise((resolve, reject) => {
	books.search(title, (error, results) => {
		if (!error) {
			resolve(results)
		} else {
			reject(error)
		}
	})
})

export const bookSearch = (title) => {
	return promiseBooksSearch(title)
		.then(getRelevantData)
}
