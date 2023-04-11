const pool = require("../db");

// Create new album
exports.createAlbum = async (req, res) => {
  try {
    const { album_image, band_name, album_name, genre, status, year_listened } = req.body;
    const newAlbum = await pool.query(
      "INSERT INTO albums (album_image, band_name, album_name, genre, status, year_listened) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [album_image, band_name, album_name, genre, status, year_listened]
    );

    res.json({
      status: "Album added",
      data: newAlbum.rows[0],
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Get all albums
exports.getAlbums = async (req, res) => {
  try {
    const getAllAlbums = await pool.query("SELECT * FROM albums");

    res.json({
      status: "All albums retrieved",
      data: getAllAlbums.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Get specific album
exports.getAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const getAlbum = await pool.query("SELECT * FROM albums WHERE id = $1", [id]);

    res.json({
      status: "Specific album retrieved",
      data: getAlbum.rows[0],
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update existing album
exports.updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const { album_image, band_name, album_name, genre, status, year_listened } = req.body;
    const updateAlbum = await pool.query(
      "UPDATE albums SET album_image = $1, band_name = $2, album_name = $3, genre = $4, status = $5, year_listened = $6 WHERE id= $7",
      [album_image, band_name, album_name, genre, status, year_listened, id]
    );
    res.json({
      status: "Album updated",
      data: updateAlbum.rows[0],
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete existing album
exports.deleteAlbum = async (req, res) => {
  const { id } = req.params;
  const deleteAlbum = await pool.query("DELETE FROM albums WHERE id = $1", [id]);
  res.json({
    status: "Album deleted",
    data: deleteAlbum.rows[0],
  });
};
