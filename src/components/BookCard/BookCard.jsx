import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	cardContainer: {
		paddingTop: '1em',
		paddingBottom: '1em',
	},
	thumbnailImage: {
		width: '6em',
		height: '8em',
		margin: 'auto'
	}
}))

export function BookCard({ cardInfo }) {
	const classes = useStyles()

	const { author, publisher, title, thumbnail } = cardInfo

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
							<Typography style={{ fontSize: '1rem' }}>
								{title}
							</Typography>
						</Grid>
						<Grid item>
							<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
								{author}
							</Typography>
						</Grid>
						<Grid item>
							<Typography style={{ fontSize: '0.8rem' }} color='textSecondary'>
								{publisher}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	)
}
