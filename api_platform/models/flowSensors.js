const mongoose = require("mongoose");

const flowSensorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: "flow-sensor-1",
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

module.exports = mongoose.model("flowSensors", flowSensorsSchema);
