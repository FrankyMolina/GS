import * as express from "express";
import phones from './phones'
const router = express.Router()

router.use('/phones', phones);

router.use('/', (req, res) => {
    res.send("you're on the main page!")
});



export default router;