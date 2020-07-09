import books from 'google-books-search'
import * as R from 'ramda'

const renameKeys = R.curry((keysMap, obj) =>
	R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
)

const authorLens = R.lens(R.prop('authors'), R.assoc('authors'))

const chooseOnlyFirstAuthor = R.over(authorLens, R.head)

const nothing = () => {}

const isNotNilProp = (prop) =>
	R.both(R.has(prop),
		R.pipe(
			R.prop(prop),
			R.isNil, // null or undefined
			R.not,
		))

const setDefaultProperty = (prop, defaultValue) =>
	R.ifElse(
		isNotNilProp(prop),
		R.tap(nothing),
		R.assoc(prop, defaultValue),
	)

const setDefaultProperties = R.pipe(
	setDefaultProperty('title', 'No title'),
	setDefaultProperty('authors', ['anonymous']),
	setDefaultProperty('publisher', 'No publisher'),
	setDefaultProperty('thumbnail', 'https://i.imgur.com/J5LVHEL.jpg'), // No Book Cover Available
)

const getRelevantData = R.map(
	R.pipe(
		setDefaultProperties,
		chooseOnlyFirstAuthor,
		renameKeys({ authors: 'author' }),
		R.pick(['title', 'author', 'publisher', 'thumbnail']),
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
