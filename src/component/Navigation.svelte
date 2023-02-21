<script lang="ts">
    import { browser } from "$app/environment";
    import {onMount} from "svelte"
    
    let user : any = null;
    if(browser){
        onMount(async () => {
            user = JSON.parse(localStorage.getItem("user") != null? `${localStorage.getItem("user")}`:`1`);
        });
    }
</script>
<nav class="w-100 navBar d-flex justify-content-between gap-3 px-4 py-2">
    <a href="/">Mimi</a>
    <div class="d-flex justify-content-between gap-3">
        {#if user == null}
            <a href="/signin">Signin</a>
            <a href="/signup">Signup</a>
        {:else}
        <a href="/" on:click={()=>{localStorage.clear()}}>logout</a>
        {/if}
    </div>
</nav>

<style>
    a,a:hover,a:visited{
        color:#3B3486;
        text-decoration: none;
        font-weight: 700;
    }
    .navBar{
        width:100vw;
        height:6vh;
        box-shadow: 0.01rem 0.5rem 0.5rem 0.01rem #bbd3dd;
    }

</style>