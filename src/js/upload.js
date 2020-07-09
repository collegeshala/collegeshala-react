import AWS from "aws-sdk";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
dotenv.config();

const upload = async (fileDetails, handler, updater, token) => {
  const keys = (
    await axios({
      method: "POST",
      url: "https://api.collegeshala.com/getkey",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({}),
    })
  ).data;

  AWS.config.update({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: "ap-south-1",
  });

  const S3 = new AWS.S3({ apiVersion: "2006-03-01" });
  const fileId = uuidv4();
  const reader = new FileReader();
  // const extension = file.name.substring(file.name.lastIndexOf("."));

  reader.readAsArrayBuffer(fileDetails.file);
  reader.onload = (file) => {
    const params = {
      Bucket: "collegeshala-notes",
      Key: fileId + ".pdf",
      Body: file.target.result,
      ACL: "public-read",
    };
    const options = { partSize: 5 * 1024 * 1024, queueSize: 1 };
    const upload = S3.upload(params, options, (err, data) => {
      if (err) {
        console.error(err);
        alert("Upload Failed :-/");
      } else {
        console.log(data);
        // alert("Upload successfull! :-)");
        delete fileDetails.file;
        handler(token, { noteId: fileId, noteurl: data.Location }, fileDetails);
      }
    });
    upload.on("httpUploadProgress", updater);
  };
};

export default upload;
