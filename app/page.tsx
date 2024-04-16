import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '@/sanity/lib/client';

type Product = {
	_id: string;
	name: string;
	image: string;
	slug: string;
	price: number;
};

const Home = async () => {
	const products = await client.fetch<Product[]>(
		`*[_type == "product"]`
	);
	const bannerData = await client.fetch('*[_type == "banner"]');

	return (
		<>
			<HeroBanner heroBanner={bannerData?.length && bannerData[0]} />

			<div className='products-heading'>
				<h2>Best Selling Product</h2>
				<p>Speaker of variations</p>
			</div>
			<div className='products-container'>
				{products?.map((product: any) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</>
	);
};

export default Home;
