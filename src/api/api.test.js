const books = require('google-books-search')

import * as R from 'ramda'

const promiseBooksSearch = (title) => new Promise((resolve, reject) => {
	books.search(title, (error, results) => {
		if (!error) {
			resolve(results)
		} else {
			reject(error)
		}
	})
})

const renameKeys = R.curry((keysMap, obj) =>
	R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
)

const authorLens = R.lens(R.prop('authors'), R.assoc('authors'))

const getRelevantData = R.map(
	R.pipe(
		R.over(authorLens, R.head),
		renameKeys({ authors: 'author' }),
		R.pick(['title', 'author', 'publisher']),
	)
)

it('Test', () => {
	return promiseBooksSearch('Professional JavaScript for Web Developers')
		.then(getRelevantData)
		.then(console.log)
})
