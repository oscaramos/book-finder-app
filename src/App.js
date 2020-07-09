import React, { useEffect, useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { BookCard } from './components/BookCard/BookCard'

import { bookSearch } from './api/api'


const useStyles = makeStyles(() => ({
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
	const [title, setTitle] = useState('Professional JavaScript for Web Developers')
	const [cardInfos, setCardInfos] = useState([])

	useEffect(() => {
		if (title) {
			bookSearch(title)
				.then(books => {
					setCardInfos(books)
				})
		}
	}, [title])

	return (
		<>
			<AppBar position='fixed' className={classes.appbar} variant='outlined'>
				<TextField label='Book title'
					variant='outlined'
					className={classes.inputTitle}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
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
