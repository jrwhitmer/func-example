import { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  return new Response(`Hello Functions`)
}

export const config: Config = {
  path: ["/custom/functions", "/custom/functions/2"]
}