const mongoose = require("mongoose");

const pressureSensorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: "pressure-sensor-1",
    },

    data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pressureSensors", pressureSensorsSchema);
