<script lang="ts">
    import { setToken,setUser,axios_instance } from "@utils/api"
    import * as HTTP_STATUS from "@utils/http_status"
    import type { UserSignin, UserSignup } from "@utils/types"
    import { json_header } from "@utils/api"
  
    let user_email: string
    let user_name: string
    let user_password: string

    export let signup: Boolean
    let button_text: string = signup ? "Signup" : "Signin"

    export const onSubmmit = async (event : Event) => {
        event.preventDefault()
        if (signup == true) {
            signupUser()
        } else {
            signinUser()
        }
    }

    const signupUser = () => {
    let url : string = `/auth/signup`
    let data :UserSignup = {
        username: user_email,
        name: user_name,
        password: user_password,
    }
    let config = {}
    axios_instance
        .post(url, data, config)
        .then((response) => {
            let status : number = response.status
            if(status == HTTP_STATUS.CREATED){
            window.location.replace("/signin")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const signinUser = () => {
    let url : string = `/auth/signin`
    let data : UserSignin = {
        username: user_email,
        password: user_password,
    }
    let config = {}

    axios_instance
        .post(url, data, config)
        .then((response) => {
            let status : number = response.status
            if(status == HTTP_STATUS.OK){
                setToken(response.data.token)
                userProfile()
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const userProfile = () => {
    let url : string = `/auth/me`
    let data = {}
    let config = {
        headers: json_header
    }

    axios_instance
        .post(url, data, config)
        .then((response) => {
            let status = response.status
            if(status == HTTP_STATUS.OK){
                setUser(JSON.stringify(response.data))
                window.location.replace("/")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
</script>
<form class="form card w-50 p-3">
    {#if signup}
      <div>
        <label for="name">Name</label>
        <input name="name" type="text" class="form-control" bind:value={user_name} />
      </div>
    {/if}
    <div>
      <label for="email">Email</label>
      <input name="email" type="text" class="form-control" bind:value={user_email} />
    </div>
    <div>
      <label for="password">Password</label>
      <input name="password" type="password" class="form-control" bind:value={user_password} />
    </div>
    <div>
      <button type="submit" on:click={(event) => onSubmmit(event)} class="mt-3 primaryBtn">{button_text}</button>
    </div>
</form>

<style>
    form{
        width: 50% !important;
        height: fit-content !important;
        padding: 1rem !important;
        border: 0.2rem solid var(--color1);
        border-radius: 0.3rem;
        margin-top: 6em !important;
    }
</style>
  