const express = require("express");
const router = require("express").Router()
const authcontroler = require("../controller/auth-control")


router.route("/home").get(authcontroler.home)

router.route("/Cheack_avail").post(authcontroler.register)





module.exports = router