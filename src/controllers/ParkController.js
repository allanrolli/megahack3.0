const park = require("../mocks/park.json");

class ParkController {
  async parkIndex(req, res) {
    return res.status(201).send(park);
  }
}
module.exports = new ParkController();
