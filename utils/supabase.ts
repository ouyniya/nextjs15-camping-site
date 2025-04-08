import { createClient } from "@supabase/supabase-js";

const bucket = "landmark-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timestamp = Date.now();
  const newName = `nys-${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (!data) throw new Error("Image upload failed !!!");

  //getPublicUrl to generate this URL for you
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
}
