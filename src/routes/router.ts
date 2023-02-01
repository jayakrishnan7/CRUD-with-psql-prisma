import express from "express";

import {
  createPerson,
  allUsers,
  loginUser,
} from "../controllers/users";

const router = express.Router();

router.post("/signup", createPerson);

router.post("/login", loginUser);

router.get("/", allUsers);

export { router };
