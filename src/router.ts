import controller from "./controller";

const { Router } = require("express");

const router = new Router();

router.post("/addMems", controller.addMemsToDb);
router.delete("/cleanDb", controller.cleanDb);
router.get("/getAllMemes", controller.getAllMemes);
router.put("/updateMeme/:id", controller.updateMeme);

export default router;
