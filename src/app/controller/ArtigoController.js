const Artigo = require("../model/Artigo");

class ArtigoController {
  async store(req, res) {
    const data = await Artigo.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Artigo.find();
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Artigo.remove({ _id: req.body.id });
    return res.json(data);
  }
}

module.exports = new ArtigoController();
