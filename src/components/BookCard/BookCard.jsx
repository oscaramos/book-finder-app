import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		padding: '1em',
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		}
	},
	thumbnailImage: {
		width: '8em',
		height: '11em',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			width: '6em',
			height: '9em',
		}
	},
	title: {
		fontSize: '1.10rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.00rem',
		}
	},
	author: {
		fontSize: '0.85em',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75em',
		}
	},
	publisher: {
		fontSize: '0.85em',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75em',
		}
	},
}))

export function BookCard({ cardInfo, loading }) {
	const classes = useStyles()

	const { author, publisher, title, thumbnail } = cardInfo

	if(loading) {
		return (
			<div>
				loading...
			</div>
		)
	}

	return (
		<Card variant='outlined' className={classes.cardContainer}>
			<Grid container direction='row'>
				<Grid item xs={4}>
					<CardMedia
						image={thumbnail}
						title='thumbnail'
						className={classes.thumbnailImage}
					/>
				</Grid>
				<Grid item xs={8}>
					<Grid container direction='column' justify='center' style={{ height: '100%' }}>
						<Grid item>
							<Typography className={classes.title}>
								{title}
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.author} color='textSecondary'>
								{author}
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.publisher} color='textSecondary'>
								{publisher}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	)
}
