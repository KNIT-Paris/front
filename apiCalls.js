import axios from 'axios'

export async function getArticles() {
    const url = "http://localhost:1337/api/articles"
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  }