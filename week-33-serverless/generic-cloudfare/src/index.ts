
const main:ExportedHandler<Env> = {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!'+ Math.random() * 100);
	},
}

export default main;