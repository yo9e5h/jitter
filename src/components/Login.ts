import axios from "axios";

function handleLogin(event: any) {
  const form = new FormData(event.target);
  event.preventDefault();
  axios
    .post("http://localhost:4444/login", {
      username: form.get("username"),
      password: form.get("password"),
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      event.target.reset();
    });
}

export default handleLogin