import React from 'react';

import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

const Product = ({
	product: { image, name, slug, price },
}: {
	product: any;
}) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className='product-card'>
					<Image
						src={urlFor(image && image[0]).url()}
						alt={name}
						className='product-image'
						width={250}
						height={250}
					/>
					<p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
