import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
const { Meta } = Card;

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
	const dispatch = useDispatch();

	const handleOnFavorite = () => {
		console.log({ pokemonId: id });
		dispatch(setFavorite({ pokemonId: id }));
	};
	return (
		<Card
			title={name}
			cover={
				<img
					src={image}
					alt={name}
					className='card-image'
				/>
			}
			extra={
				<StarButton
					isFavorite={favorite}
					onClick={handleOnFavorite}
				/>
			}>
			<Meta description={abilities} />
		</Card>
	);
};

export default PokemonCard;
