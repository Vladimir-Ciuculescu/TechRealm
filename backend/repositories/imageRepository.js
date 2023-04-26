const AWS = require("aws-sdk");
const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const ACCESS_KEY = process.env.S3_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
const pool = require("../database/config");

const uploadImagesToS3 = async (images, name) => {
  const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const urls = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: `${name}/${name}_photo_${i + 1}`,
      Body: new Buffer.from(
        image.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      ),
      ContentType: "image/png",
    };

    const result = await s3.upload(uploadParams).promise();
    urls.push(result.Location);
  }

  return urls;
};

const addImages = async (urls, productId) => {
  for (let i = 0; i < urls.length; i++) {
    await pool.query(
      "INSERT INTO product_images (url, product_id) VALUES ($1, $2)",
      [urls[i], productId]
    );
  }
};

module.exports = { uploadImagesToS3, addImages };
