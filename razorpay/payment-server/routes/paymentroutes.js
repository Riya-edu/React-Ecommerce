import express, { response } from 'express';
import { checkout } from '../controllers/paymentcontrollers.js';

const router = express.Router();

router.route("/checkout").post(checkout);




export default router