<script lang="ts">
    import { onMount } from "svelte";
    import Navigation from "../component/Navigation.svelte";
    import {browser} from "$app/environment";

    let user: any = null;
    if(browser){
        onMount(async () => {
            user = localStorage.getItem("user") != null? localStorage.getItem("user"): null;
            if (user != null) {
                window.location.assign("/dashboard");
            }
        });
    }
</script>

<Navigation></Navigation>
<div class="container">
    <div class="d-flex flex-column text-center">
        <div><img src="/images/mimi.jpg" alt="cat" style="height:20rem;width:20rem;"/></div>
        <h1>Hi!!</h1>
        <h3>I am Mimi, I will help you manage your money</h3>
        <br>
        <p>All of us spend money, but do we really enjoy the purchases that we make ?<br> Well to know wether we really spend money on the most rewarding things or not, we will have to track it.</p>
        <p>Thus bringing to you, Mimi.</p>
        <p>She will be your buddy in this journey to realize the actual worth of your money.</p>
    </div>
</div>
