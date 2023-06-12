import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
const { Meta } = Card;
const PokemonCard = ({ name,image, abilities }) => {
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
			extra={<StarOutlined />}>
			<Meta description={abilities} />
		</Card>
	);
};

export default PokemonCard;
