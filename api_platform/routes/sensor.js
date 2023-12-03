const express = require("express");
require("dotenv").config();
const router = express.Router();
const flowSensor = require("../models/flowSensors");
const pressureSensor = require("../models/pressureSensors");
//const mongoose = require("mongoose");

router.post("/flowSensorData", async (req, res) => {
  let { data, name } = req.body;
  try {
    const flowsensor = await flowSensor.create({ data, name });
    res.status(201).json(sensor);
    console.log("Added: " + flowsensor.data);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
});

router.post("/pressureSensorData", async (req, res) => {
  let { data, name } = req.body;
  try {
    const flowsensor = await pressureSensor.create({ data, name });
    res.status(201).json(sensor);
    console.log("Added: " + pressureSensor.data);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
});

// @ Get all the data of the flowsensors
router.get("/getAllFlowData", async (req, res) => {
  try {
    const content = await flowSensor.find();
    return res.status(200).json(content);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
// @ Get all the data of the pressuresensors
router.get("/getAllPressureData", async (req, res) => {
  try {
    const content = await pressureSensor.find();
    return res.status(200).json(content);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
