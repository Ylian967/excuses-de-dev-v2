const excuseService = require('../services/excuseService');

const excuseController = {

  async getRandomExcuse(req, res) {
    try {
      const excuse = await excuseService.getRandomExcuse();
      if (!excuse) {
        return res.status(404).json({ error: 'Aucune excuse trouvée'});
      }
      res.json(excuse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur de la base de données'});
    }
  },

  async getExcuseByCode(req, res) {
    try {
      const { code } = req.params;
      const excuse = await excuseService.getExcuseByCode(code);
      if (!excuse) {
        return res.status(404).json({error: `Excuse ${code} non trouvée`});
      }
      res.json(excuse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur de base de données'});
    }
  },

  async createExcuse(req, res) {
    try {
      const { http_code, tag, message } = req.body;
      if (!http_code || !tag || !message) {
        return res.status(400).json({error: 'Le code HTTP, le tag et le message sont requis'});
      }
      const newExcuse = await excuseService.createExcuse(http_code, tag, message);
      res.json(newExcuse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur de sauvegarde'});
    }
  }
  
};

module.exports = excuseController;