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
	}])

	return (
		<>
			<AppBar position='fixed' className={classes.appbar} variant='outlined'>
				<TextField label='Book title'
					variant='outlined'
					className={classes.inputTitle} />
			</AppBar>
			<div className={classes.bottomSeparation} />
			<Container maxWidth='xs'>
				<Card variant='outlined'>
					<Grid container direction='row'>
						<Grid item xs={4}>
							<CardMedia
								image={cardInfos[0].thumbnail}
								title='thumbnail'
								className={classes.thumbnailImage}
							/>
						</Grid>
						<Grid item xs={8}>
							<Grid container direction='column' justify='center' style={{height: '100%'}}>
								<Grid item>
									<Typography style={{ fontSize: '1rem' }}>
										{cardInfos[0].title}
									</Typography>
								</Grid>
								<Grid item>
									<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
										{cardInfos[0].author}
									</Typography>
								</Grid>
								<Grid item>
									<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
										{cardInfos[0].publisher}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Container>
		</>
	)
}

export default App
