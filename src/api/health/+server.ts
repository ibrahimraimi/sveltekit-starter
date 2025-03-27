import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	const healthCheck = {
		status: 'OK',
		timestamp: new Date().toISOString(),
		service: 'getinvoice'
	};

	return new Response(JSON.stringify(healthCheck), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
