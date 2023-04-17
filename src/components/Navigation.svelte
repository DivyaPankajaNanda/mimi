<script lang="ts">
    import { logout } from "@utils/api"
    
    export let user : object | null 
    
</script>
<nav class="w-100 navBar d-flex justify-content-between gap-3 px-4 py-2">
    <a href="/"><span class="fa fa-paw wave"></span> Mimi</a>
    <div class="d-flex justify-content-between gap-3">
        {#if user == null}
            <a href="/signin">Signin</a>
            <a href="/signup">Signup</a>
        {:else}
            <span class="logout" on:click={()=>logout()}>logout</span>
        {/if}
    </div>
</nav>

<style>
    a,a:hover,a:visited,.logout{
        color:#3B3486;
        text-decoration: none;
        font-weight: 700;
        cursor:pointer;
    }
    .navBar{
        width:100vw;
        height:6vh;
        box-shadow: 0.01rem 0.5rem 0.5rem 0.01rem #bbd3dd;
        position: fixed;
        z-index: 100;
        background:var(--color5);
    }
    .wave{
        animation: wave 4s linear infinite;
    }
    @keyframes wave{
        0%{
            transform: rotateZ(0deg);
        }
        30%{
            transform: rotateZ(0deg);
        }
        40%{
            transform: rotateZ(-20deg);
        }
        50%{
            transform: rotateZ(20deg);
        }
        60%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(0deg);
        }
    }

</style>