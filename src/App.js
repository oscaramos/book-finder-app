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
import onStopTyping from './utils/onStopTyping'

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
	const [loadingBooks, setLoadingBooks] = useState(false)

	useEffect(() => {
		onStopTyping(150, () => {
			if (title) {
				console.log(title)
				setLoadingBooks(true)
				bookSearch(title)
					.then(books => setCardInfos(books))
					.then(() => setLoadingBooks(false))
			}
		})
	}, [title])

	// Start displaying info fast
	useEffect(() => {
		bookSearch(title)
			.then(books => setCardInfos(books))
	}, [])

	const theme = useTheme()
	const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

	return (
		<>
			<AppBar position='fixed' className={classes.appbar} variant='outlined'>
				<TextField label='Título'
					variant='outlined'
					className={classes.inputTitle}
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</AppBar>
			<div className={classes.bottomSeparation} />
			<Container maxWidth={matchXS ? 'xs' : 'sm'} className={classes.container}>
				<Grid container direction='column' spacing={2}>
					{
						cardInfos.map((cardInfo, index) =>
							<Grid item key={index}>
								<BookCard cardInfo={cardInfo} loadingBooks={loadingBooks}/>
							</Grid>
						)
					}
				</Grid>
			</Container>
		</>
	)
}

export default App
