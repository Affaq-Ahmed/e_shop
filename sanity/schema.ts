import { type SchemaTypeDefinition } from 'sanity';
import Product from './schemas/product';
import Banner from './schemas/banner';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [Product, Banner],
};
