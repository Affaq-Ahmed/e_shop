export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-04';

export const dataset = assertValue(
	process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zp688dly',
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn = true;

export const token = assertValue(
	process.env.NEXT_PUBLIC_SANITY_TOKEN ||
		'skahzlNGC0BYwTa2AOZAq9klLnrJY7ZAU0CxLc9C5XaCM4jOV9SRZSQ1mHcmNMunrdIKz6RYzGSZZc94JLOjvL9iRwqpErDZdXRI3OVtS7bkSKbIWj5zrmlZzx96Talwp1T9jtRfZUVkXQEiuojWLUM2T5vzRzTyAPLt1H78bqL7ywrdX6kj',
	'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
