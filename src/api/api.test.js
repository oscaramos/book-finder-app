import { bookSearch } from './api'

it('Should return list of books ', () => {
	return bookSearch('Professional JavaScript for Web Developers')
		.then(books => {
			expect(books.length).toBe(10)
			console.log(books)
		})
})
