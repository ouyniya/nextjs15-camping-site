import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "❌ First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "❌ Last name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "❌ Username must be at least 2 characters" }),
});

// validate image
const validateImage = () => {
  // identity max file size
  const maxFileSize = 1024 * 1024; // 1 MB

  return z.instanceof(File).refine((file) => {
    // add criteria
    return file.size <= maxFileSize;
    // if not, alert msg below
  }, "File size must be less than 1MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(30, { message: "Name must be less than 30 characters" }),
  category: z.string().min(2, { message: "category must be at least 2 characters" }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" })
    .max(200, { message: "Description must be less than 200 characters" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Price must be at least 0" }),
  province: z
    .string()
    .min(2, { message: "province must be at least 2 characters" }),
  lat: z.coerce.number({message: "Latitude is required"}),
  lng: z.coerce.number({message: "Longitude is required"}),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result?.error?.errors.map((error) => error.message);
    const errMsg = errors.join(", ");
    throw new Error(errMsg);
  }
  return result.data;
};
