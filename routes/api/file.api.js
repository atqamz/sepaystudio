const { networkInterfaces } = require("os");
const router = require("express").Router();
const upload = require("../../middlewares/imageUpload");

const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;
let gridFSBucket;
const { connection, mongo } = mongoose;
connection.once("open", () => {
  gfs = Grid(connection.db, mongo);
  gridFSBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "images",
  });
  gfs.collection("images");
});

// @route       /api/file
// @access      PUBLIC
router
  .route("/")

  // @method    POST
  .post(upload.single("file"), (req, res) => {
    if (req.file === undefined) {
      return res.json({ msg: "Select a File!" });
    }

    return res.json({
      fileUri: `${req.protocol + "://" + req.get("host") + req.originalUrl}/${
        req.file.filename
      }`,
    });
  })

  // @method    DELETE
  .delete(async (req, res) => {
    try {
      await gfs.files.deleteMany();
      res.json({ msg: "Deleted!" });
    } catch {
      res.status(400).json({ err: "An error occured." });
    }
  });

// @route       /api/file/:filename
// @access      PUBLIC
router
  .route("/:filename")

  // @method    GET
  .get(async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gridFSBucket.openDownloadStream(file._id);
      readStream.pipe(res);
    } catch {
      res.status(400).json({ err: "No images found!" });
    }
  })

  // @method    DELETE
  .delete(async (req, res) => {
    try {
      await gfs.files.deleteOne({ filename: req.params.filename });
      res.json({ msg: "Deleted!" });
    } catch {
      res.status(400).json({ err: "An error occured." });
    }
  });

module.exports = router;
