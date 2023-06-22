const axios = require('axios');


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = axios.create({
      baseURL: baseUrl,
    });
  }

  async getFullList () {
    try {
      const response = await this.BASE_URL.get('/characters');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  } 

  async getOneRegister (characterId) {
    try {
      const response = await this.BASE_URL.get(`/characters/${characterId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  } 

  async createOneRegister (characterCreated) {
    try {
      const response = await this.BASE_URL.post('/characters', characterCreated);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateOneRegister (characterId, updatedCharacter) {
    try {
      const response = await this.BASE_URL.put(`/characters/${characterId}`, updatedCharacter )
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteOneRegister(characterId) {
    try {
      await this.BASE_URL.delete(`/characters/${characterId}`);
      return 'Character has been successfully deleted';
    } catch (error) {
      console.error(error);
      }
    }
  }


module.exports = APIHandler;