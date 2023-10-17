import axios from "axios";

export default class postService {
  static async googleBooks(search) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyCmK-uV0Te3m8ZoENQz67PsS1cHnu32Fqc" +
          "&maxResults=40"
      );

      return response.data.items;
    } catch (err) {
      console.log(err);
    }
  }
}
