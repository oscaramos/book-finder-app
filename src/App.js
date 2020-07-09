import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { BookCard } from './components/BookCard/BookCard'
import Grid from '@material-ui/core/Grid'

// import { bookSearch } from './api/api'

const useStyles = makeStyles(theme => ({
	'@global': {
		html: {
			backgroundColor: '#eeeeef'
		}
	},
	appbar: {
		height: '5em',
		backgroundColor: 'white'
	},
	bottomSeparation: {
		height: '6em',
	},
	inputTitle: {
		width: '20em',
		margin: 'auto'
	},
}))

function App() {
	const classes = useStyles()
	const [cardInfos, setCardInfos] = useState([{
		title: 'Professional JavaScript for Web Developers',
		author: 'Nicholas C. Zakas',
		publisher: 'John Wiley & Sons',
		thumbnail: 'http://books.google.com/books/content?id=C3kabcBG0ZsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	},
	{
		title: 'Professional JavaScript for Web Developers',
		author: 'Nicholas C. Zakas',
		publisher: 'John Wiley & Sons',
		thumbnail: 'http://books.google.com/books/content?id=Wmfr1Zp7d5EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	},
	{
		title: 'Professional JavaScript for Web Developers',
		author: 'Matt Frisbie',
		publisher: 'John Wiley & Sons',
		thumbnail: 'http://books.google.com/books/content?id=3GOuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	}
	])

	return (
		<>
			<AppBar position='fixed' className={classes.appbar} variant='outlined'>
				<TextField label='Book title'
					variant='outlined'
					className={classes.inputTitle} />
			</AppBar>
			<div className={classes.bottomSeparation} />
			<Container maxWidth='xs'>
				<Grid container direction='column' spacing={2}>
					{
						cardInfos.map((cardInfo, index) =>
							<Grid item key={index}>
								<BookCard cardInfo={cardInfo} />
							</Grid>
						)
					}
				</Grid>
			</Container>
		</>
	)
}

export default App
