const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const config = require("../config");

const { MONGO_URI, MONGO_DB_NAME } = config;

const storage = new GridFsStorage({
  url: `${MONGO_URI}/${MONGO_DB_NAME}`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `IMG-${Date.now()}`;
      return filename;
    }

    return {
      bucketName: "images",
      filename: `IMG-${Date.now()}`,
    };
  },
});

module.exports = multer({ storage });
