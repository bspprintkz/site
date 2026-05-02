import crypto from "crypto";

export default async function handler(req, res) {
  const cloudName = "dyabifcjs";
  const apiKey = "mediaflows_bff1ddcb-c886-4917-88df-824fc30997aa";
  const apiSecret = "2oAqYJwBP2AFWg3PWsLtl0dpjN0";

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
