import React from 'react';
import { client, urlFor } from '../../../sanity/lib/client';
import Image from 'next/image';

const ProductDetails = ({ product, products }: any) => {
	console.log(products);
	return (
		<div>
			<div className='product-detail-container'>
				<div>
					<div className='image-container'>
						<Image src='' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export const generateStaticProps = async ({
	params: { slug },
}: any) => {
	const product = await client.fetch(
		`*[_type == "product" && slug.current == "${slug}"][0]`
	);

	const products = await client.fetch('*[_type == "product"]');

	return {
		props: {
			product,
			products,
		},
	};
};

export default ProductDetails;
