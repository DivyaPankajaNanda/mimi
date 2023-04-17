<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    const closeHandler =async (event : Event) => {
        event.preventDefault()
        dispatch("closeModal")
    }
    const saveHandler =async (event : Event) => {
        event.preventDefault()
        dispatch("saveModalData")
    }
</script>

<div class="modalContainer d-flex justify-content-end">
    <div class="modalBg"></div>
    <div class="modalBox">
        <div class="d-flex justify-content-between modalBanner">
            <div class="modalClose" on:click={closeHandler}><span class="fa fa-times"></span></div>
            <button class="primaryBtn" on:click={saveHandler}>Save</button>
        </div>
        <div class="modalContent">
            <slot></slot>
        </div>
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
        opacity: 0.8; 
        height:100vh;
        width:100vw;
        position: absolute;
        left:0rem;
        top:0rem;
    }
    .modalBox{
        background: var(--color5);
        color:var(--color1);
        border-radius:0.4rem 0rem 0rem 0.4rem;
        width:55vw;
        position: relative;
    }
    .modalBanner{
        padding:1rem;
        border-bottom: 0.15rem solid var(--color1);
    }
    .modalContent{
        padding: 1rem;
    }
    .modalClose{
        cursor: pointer;
    }
</style>