import axios from 'axios';

class FetchService {
  constructor() {
    this.request = axios;
  }

  get = async (url) => {
    try {
      const res = await this.request.get(url);
      return res;
    } catch (error) {
      return error;
    }
  };
}

export default FetchService;
