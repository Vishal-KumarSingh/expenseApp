import axios from "axios";
import cookie from "jscookie";
export default function apiCall(path , payload  , callback){
     const baseUrl = "https://google.com/";
     const token = cookie.get('token');
     axios({
        method: "post",
        url: baseUrl + path,
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          callback();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}


