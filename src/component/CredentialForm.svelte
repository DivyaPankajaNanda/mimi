<script lang="ts">
  import * as CONSTANTS from "../constants";
  import axios from "axios";

  let user_email: string;
  let user_name: string;
  let user_password: string;

  export let signup: Boolean;
  let button_text: string = signup ? "Signup" : "Signin";

  type UserSignin = {
    username : string;
    password : string;
  }
  
  type UserSignup = {
    name : string;
    username : string;
    password : string;
  }

  export const onSubmmit = async () => {
    if (signup == true) {
      signupUser();
    } else {
      signinUser();
    }
  };

  const signupUser = () => {
    let url : string = `${CONSTANTS.API_V1}/auth/signup`;
    let data :UserSignup = {
        username: user_email,
        name: user_name,
        password: user_password,
      };
    let config = {};
    axios
      .post(url, data, config)
      .then((response) => {
        let status : number = response.status;
        if(status == CONSTANTS.HTTP_STATUS_CREATED){
          window.location.replace("/signin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signinUser = () => {
    let url : string = `${CONSTANTS.API_V1}/auth/signin`;
    let data : UserSignin = {
        username: user_email,
        password: user_password,
    };
    let config = {};

    axios
      .post(url, data, config)
      .then((response) => {
          let status : number = response.status;
          if(status == CONSTANTS.HTTP_STATUS_OK){
            localStorage.setItem("token",response.data.token);
            userProfile();
          }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userProfile = () => {
    let url : string = `${CONSTANTS.API_V1}/auth/user`;
    let data = {};
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      }
    };

    axios
      .post(url, data, config)
      .then((response) => {
          let status = response.status;
          if(status == CONSTANTS.HTTP_STATUS_OK){
            localStorage.setItem("user",JSON.stringify(response.data));
            window.location.replace("/dashboard");
          }
      })
      .catch((error) => {
        console.log(error);
      });
  };
</script>

<form class="form card w-50 p-3" style="margin:auto;">
  {#if signup}
    <div>
      <label>Name</label>
      <input type="text" class="form-control" bind:value={user_name} />
    </div>
  {/if}
  <div>
    <label>Email</label>
    <input type="text" class="form-control" bind:value={user_email} />
  </div>
  <div>
    <label>Password</label>
    <input type="password" class="form-control" bind:value={user_password} />
  </div>
  <div>
    <button type="submit" on:click={() => onSubmmit()} class="mt-3"
      >{button_text}</button
    >
  </div>
</form>
