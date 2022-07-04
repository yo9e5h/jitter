import axios from "axios";

function handleRegister(event: any) {
  const form = new FormData(event.target);
  event.preventDefault();
  axios
    .post("http://localhost:4444/register", {
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      event.target.reset();
    });
}

export default handleRegister;
