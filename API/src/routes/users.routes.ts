import { Router } from "express";
import * as userCtrl from "./users.controller";

const router = Router();

router.get("/users", userCtrl.getusers);

router.get("/users/:id", userCtrl.getuser);

router.post("/users", userCtrl.addusers);

router.delete("/users/:id", userCtrl.deleteusers);

router.put("/users/:id", userCtrl.updateusers);

export default router;
