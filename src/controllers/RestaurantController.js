const restaurant = require("../mocks/details.json");
const menu = require("../mocks/menu.json");
class RestaurantController {
  async restaurantIndex(req, res) {
    return res.status(201).send(restaurant);
  }

  async menuIndex(req, res) {
    return res.status(201).send(menu);
  }
}
module.exports = new RestaurantController();
