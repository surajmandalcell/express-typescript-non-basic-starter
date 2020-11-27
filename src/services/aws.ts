import AWS from 'aws-sdk';

const constants = {
  REGION: process.env.AWS_REGION,
  ID: process.env.AWS_ID,
  SECRET: process.env.AWS_SECRET,
  // The name of the bucket that you have created
  BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  BASE_URL: process.env.AWS_BASE_URL,
};

// Init s3
const s3 = new AWS.S3({
  accessKeyId: constants.ID,
  secretAccessKey: constants.SECRET,
});

export default s3;
export { constants };
