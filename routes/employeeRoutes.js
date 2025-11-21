const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees
} = require("../controllers/employeeController");

// GET
router.get("/", auth, getAllEmployees);
router.get("/search/by", auth, searchEmployees);
router.get("/:eid", auth, getEmployeeById);

// CREATE (with image upload)
router.post("/", auth, upload.single("profileImage"), createEmployee);

// UPDATE (with image upload)
router.put("/:eid", auth, upload.single("profileImage"), updateEmployee);

// DELETE
router.delete("/:eid", auth, deleteEmployee);

module.exports = router;
