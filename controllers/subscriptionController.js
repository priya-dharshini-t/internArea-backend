const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    const subscription = new Subscription(req.body);
    await subscription.save();
    res.status(201).send(subscription);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Other subscription-related controllers
