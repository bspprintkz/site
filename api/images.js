import crypto from "crypto";

export default async function handler(req, res) {
  const cloudName = "YOUR_CLOUD_NAME";
  const apiKey = "YOUR_API_KEY";
  const apiSecret = "YOUR_API_SECRET";

  const timestamp = Math.floor(Date.now() / 1000);

  const signature = crypto
    .createHash("sha1")
    .update(`prefix=portfolio&timestamp=${timestamp}${apiSecret}`)
    .digest("hex");

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=portfolio&timestamp=${timestamp}&api_key=${apiKey}&signature=${signature}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}