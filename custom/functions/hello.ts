import { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
	const { city, country } = context.params

  return new Response(`Hello Functions`)
}

export const config: Config = {
  path: ["/custom/functions", "/custom/functions/2"]
}