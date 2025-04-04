import { Router } from "express";
import { createSubscription, getUserSubscription } from "../controllers/subcription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: "Get All Subscription"}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: "Get Subscription Details"}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({title: "Update Subscription"}));

subscriptionRouter.delete('/', (req, res) => res.send({title: "Delete Subscription"}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: "Cancel All Subscription"}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: "Get Upcoming Renewals"}));

export default subscriptionRouter;