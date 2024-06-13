const express = require("express");
const router = express.Router();

router.post("/", () => {
    console.log("creando productos . . . ");
})

module.exports = router;