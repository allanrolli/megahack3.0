class UserController {
  async create(req, res) {
    return res.status(201).send({ message: "Bem vindo ao Reserv" });
  }

  async authenticate(req, res) {
    return res.send({ message: "Usuário logado" });
  }
}
module.exports = new UserController();
