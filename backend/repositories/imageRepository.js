const AWS = require("aws-sdk");
const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const ACCESS_KEY = process.env.S3_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;

const uploadImages = async (images, name) => {
  const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  images.map(async (image, key) => {
    const { Location } = await s3
      .upload({
        Bucket: BUCKET_NAME,
        Key: `${name}/${name}_photo_${key + 1}`,
        Body: new Buffer.from(
          image.replace(/^data:image\/\w+;base64,/, ""),
          "base64"
        ),
        ContentType: "image/png",
      })
      .promise();
  });
};

module.exports = { uploadImages };
