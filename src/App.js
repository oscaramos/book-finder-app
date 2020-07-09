import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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
	cardContainer: {
		paddingTop: '1em',
		paddingBottom: '1em',
	},
	bottomSeparation: {
		height: '6em',
	},
	inputTitle: {
		width: '20em',
		margin: 'auto'
	},
	thumbnailImage: {
		width: '6em',
		height: '8em',
		margin: 'auto'
	}
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
				{
					cardInfos.map(cardInfo => (
						<Card variant='outlined' className={classes.cardContainer}>
							<Grid container direction='row'>
								<Grid item xs={4}>
									<CardMedia
										image={cardInfo.thumbnail}
										title='thumbnail'
										className={classes.thumbnailImage}
									/>
								</Grid>
								<Grid item xs={8}>
									<Grid container direction='column' justify='center' style={{ height: '100%' }}>
										<Grid item>
											<Typography style={{ fontSize: '1rem' }}>
												{cardInfo.title}
											</Typography>
										</Grid>
										<Grid item>
											<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
												{cardInfo.author}
											</Typography>
										</Grid>
										<Grid item>
											<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
												{cardInfo.publisher}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					))
				}

			</Container>
		</>
	)
}

export default App
