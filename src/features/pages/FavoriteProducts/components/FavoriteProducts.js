import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'

import ResponsiveImage from '../../../shared/components/ResponsiveImage'
import products from '../../../../utils/products'
import ProductCard from '../../../shared/containers/ProductCard'
import image from './images/empty_favorites.png'

class FavoriteProducts extends Component {
	render() {

		const { favorites } = this.props

		return (
			<div>

				{ favorites.filter( (value) => value === 1).isEmpty() && 
					
					(
						<div>
							<h3>No ha marcado ningún producto como favorito.</h3>
							<ResponsiveImage image={image}/>
						</div>
					)
				}

				<Grid>
					{ products
						.map((value, key) =>

							favorites.get(`${value.id}`) === 1 &&
							<ProductCard key={key} product={value}/>
						)
					}
				</Grid>
			</div>
		)
	}
}

FavoriteProducts.propTypes = {
	favorites: PropTypes.object,
	actions: PropTypes.objectOf(PropTypes.func)
}

export default FavoriteProducts