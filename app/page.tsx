import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
	return (
		<>
			<HeroBanner />
			<div className='products-heading'>
				<h2>Best Selling Product</h2>
				<p>Speaker of variations</p>
			</div>
			<div className='products-container'>
				{['Product1', 'Product2'].map((product) => (
					<Product key={product} />
				))}
			</div>
			<FooterBanner />
		</>
	);
};

export default Home;
