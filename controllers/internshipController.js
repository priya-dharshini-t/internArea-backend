const Internship = require('../models/Internship');

exports.createInternship = async (req, res) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).send(internship);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Other internship-related controllers
