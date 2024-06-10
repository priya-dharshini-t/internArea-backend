// subscriptionRoutes.js

const express = require('express');
const router = express.Router();
const stripe = require('../payment');

router.post('/subscribe', async (req, res) => {
    try {
        const { plan, coupon } = req.body;

        // Create Stripe subscription
        const subscription = await stripe.subscriptions.create({
            customer: req.user.stripeCustomerId,
            items: [{ price: plan }],
            coupon
        });

        // Save subscription details in database

        res.status(200).send(subscription);
    } catch (error) {
        console.error('Error creating subscription:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router;
