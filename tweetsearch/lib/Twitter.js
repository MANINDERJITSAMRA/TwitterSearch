import axios from "axios";
import qs from "query-string";

class TwitterService {
  static obtainAccessToken() {
    const options = {
      url: "https://api.twitter.com/oauth2/token",
      method: "POST",
      headers: {
        Authorization: `Basic 0XG5299e6oSESyHvLGIMGmwW3kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "client_credentials",
      }),
    };

    return axios(options).then((res) => res.data.access_token);
  }

  static searchTweets(params) {
    const options = {
      url: `/tweets?${qs.stringify(params)}`,
      method: "GET",
    };

    return axios(options).then((res) => res.data.items);
  }
}

export default TwitterService;
