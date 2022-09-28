const Math = require("../models/Math.model");

module.exports.math = {
  getMath: async (req, res) => {
    const data = await Math.find().populate(
      "ram videocard hardcard ssd processor frame"
    );
    res.json(data);
  },
  addMath: async (req, res) => {
    const data = await Math.create(
      ({
        name,
        socket,
        image,
        ram,
        currentRam,
        videocard,
        hardCard,
        currentHardCard,
        ssd,
        currentSsd,
        processor,
      } = req.body)
    );
    const result = await data.populate(
      "ram videocard hardcard ssd processor frame"
    );
    res.json(result);
  },
  updateMath: async (req, res) => {
    const data = await Math.findByIdAndUpdate(
      req.params.id,
      ({
        name,
        socket,
        image,
        ram,
        currentRam,
        videocard,
        hardCard,
        currentHardCard,
        ssd,
        currentSsd,
        processor,
      } = req.body)
    );
    const result = await data.populate(
      "ram videocard hardcard ssd processor frame"
    );
    res.json(result);
  },
  deleteMath: async (req, res) => {
    const data = await Math.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
