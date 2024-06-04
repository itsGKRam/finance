import * as z from 'zod'

export const testSchema = z.object({
  name: z.string(),
  age: z.number(),
  isActive: z.boolean(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
})
