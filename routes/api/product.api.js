const router = require("express").Router();
const Product = require("../../models/product.model");

// @route       /api/products
// @access      PUBLIC
router
  .route("/")

  // @method    GET All
  .get((req, res) => {
    Product.find()
      .then((products) => res.json(products))
      .catch((err) => res.status(400).json({ err: err }));
  })

  // @method    POST
  .post((req, res) => {
    const newProduct = new Product({
      productName: req.body.productName,
      productDetail: req.body.productDetail,
      category: req.body.category,
      playstoreUri: req.body.playstoreUri,
      appstoreUri: req.body.appstoreUri,
      demoUri: req.body.demoUri,
    });

    newProduct
      .save()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  });

// ===============================================================================================

// @route       /api/products/:id
// @access      PUBLIC
router
  .route("/:id")

  // @method    GET
  .get((req, res) => {
    Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json({ err: err }));
  })

  // @method    PUT
  .put((req, res) => {
    Product.findOneAndUpdate(req.params.id, {
      productName: req.body.productName,
      productDetail: req.body.productDetail,
      category: req.body.category,
      playstoreUri: req.body.playstoreUri,
      appstoreUri: req.body.appstoreUri,
      demoUri: req.body.demoUri,
    })
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json({ err: err }));
  })

  // @method    PATCH
  .patch((req, res) => {
    Product.findOneAndUpdate(req.params.id, {
      $set: req.body,
    })
      .then((product) => res.json(product))
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  })

  // @method    DELETE
  .delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.json({ msg: "Deleted!" }))
      .catch((err) => res.status(400).json({ err: err }));
  });

module.exports = router;
