const payment = require("../mocks/payment.json");
class PaymentController {
  async create(req, res) {
    return res.status(200).send(payment);
  }
}
module.exports = new PaymentController();
