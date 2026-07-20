import { Router } from "express";


const router = Router();

router.get("/",  (req, res) => {
       
        res.send("Seed Is Done");
});


export default router;