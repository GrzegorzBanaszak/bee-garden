const express = require("express");
const router = express.Router();
const { getApiarys, createApiary } = require("../controllers/apiaryController");

router.get("/", getApiarys);
router.post("/", createApiary);

module.exports = router;
