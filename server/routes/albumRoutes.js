const express = require("express");
const cors = require("cors");
const pool = require("../db");

const albumController = require("../controllers/albumControllers");

const router = express.Router();

// Allows cors to be set
router.use(cors());

// Allows us to access req.body
router.use(express.json());

////
// Routes
////

// Create new album
router.route("/").post(albumController.createAlbum);

// Get all albums
router.route("/").get(albumController.getAlbums);

// Get specific album
router.route("/:id").get(albumController.getAlbum);

// Update existing album
router.route("/:id").put(albumController.updateAlbum);

// Delete existing album
router.route("/:id").delete(albumController.deleteAlbum);

module.exports = router;
