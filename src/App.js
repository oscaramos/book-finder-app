import React, { useEffect, useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { BookCard } from './components/BookCard/BookCard'

import { bookSearch } from './api/api'
import useTheme from '@material-ui/core/styles/useTheme'
import { useMediaQuery } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	'@global': {
		html: {
			backgroundColor: '#eeeeef'
		}
	},
	appbar: {
		height: '5em',
		backgroundColor: 'white'
	},
	container: {
		[theme.breakpoints.down('xs')]: {
			margin: 0,
			padding: 0,
			maxWidth: '100%'
		}
	},
	bottomSeparation: {
		height: '6em',
	},
	inputTitle: {
		width: '35em',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		}
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

	const theme = useTheme()
	const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

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
			<Container maxWidth={matchXS ? 'xs' : 'sm'} className={classes.container}>
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
