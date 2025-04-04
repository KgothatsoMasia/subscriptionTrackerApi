import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        resizeBy.status(201).json({ succes: true, data:subscription});

    } catch (error) {
        next(error);
    }
};

export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id != req.params.id) {
            const error = new Error("You are not the owner of this account!");
            error.status = 401;
            throw error
        }

        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({sucess: true, data: subscriptions})

    } catch(error) {
        next(error);
    }
}