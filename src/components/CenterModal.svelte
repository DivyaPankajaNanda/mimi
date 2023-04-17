<script lang="ts">
    import { createEventDispatcher } from 'svelte'
        
    const dispatch = createEventDispatcher()
    const clickHandler =async (event : Event) => {
        event.preventDefault()
        dispatch("closeModal")
    }
</script>

<div class="modalContainer d-flex justify-content-center align-items-center">
    <div class="modalBg"></div>
    <div class="modalBox">
        <div class="modalClose d-flex justify-content-center align-items-center" on:click={clickHandler}><div class="fa fa-times"></div></div>
        <slot></slot>
    </div>
</div>

<style>
    .modalContainer{
        position: fixed;
        top:0rem;
        left:0rem;
        height:100vh;
        width:100vw;
        z-index: 101;
    }
    .modalBg{
        background: var(--color6);
        opacity: 0.7; 
        height:100vh;
        width:100vw;
        position: absolute;
        left:0rem;
        top:0rem;
    }
    .modalBox{
        background: var(--color5);
        color:var(--color1);
        border-radius:0.4rem;
        width:30vw;
        height:80vh;
        position: relative;
        padding: 1rem;
    }
    .modalClose{
        height:2rem;
        width:2rem;
        border-radius: 50%;
        background: var(--color1);
        color:var(--color5);
        font-size: 1rem;
        position: absolute;
        right:-1em;
        top:-1rem;
        cursor: pointer;
    }
</style>