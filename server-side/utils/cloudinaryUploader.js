import { v2 as cloudinary } from "cloudinary";



export const uploadBufferToCloudinary = (buffer, folder = "ai-images") => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary Upload Error:", error);
          return reject(error);
        }
        resolve(result); 
      }
    );

    uploadStream.end(buffer);
  });
};
