const router = require("express").Router();
const Contact = require("../../models/contact.model");

// @route       /api/contacts
// @access      PUBLIC
router
  .route("/")

  // @method    GET All
  .get((req, res) => {
    Contact.find()
      .then((contacts) => res.json(contacts))
      .catch((err) => res.status(400).json({ err: err }));
  })

  // @method    POST
  .post((req, res) => {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      category: req.body.category,
      description: req.body.description,
    });

    newContact
      .save()
      .then((contact) => {
        res.json(contact);
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  });

// ===============================================================================================

// @route       /api/contacts/:id
// @access      PUBLIC
router
  .route("/:id")

  // @method    GET
  .get((req, res) => {
    Contact.findById(req.params.id)
      .then((contact) => res.json(contact))
      .catch((err) => res.status(400).json({ err: err }));
  })

  // @method    DELETE
  .delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then(() => res.json({ msg: "Deleted!" }))
      .catch((err) => res.status(400).json({ err: err }));
  });

module.exports = router;
