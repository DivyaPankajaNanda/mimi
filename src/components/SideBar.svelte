<script lang="ts">
    import SideBarMenu from "@components/SideBarMenu.svelte"
    export let SIDEBAR_MENUS : any

</script>
<div class="sideBar">
    <div class="sideBarContainer d-flex flex-column align-items-center">
        {#each SIDEBAR_MENUS as {id,title,icon}}
            <SideBarMenu title={title} id={id} icon={icon}/>
        {/each}
        <div class="photoImg mb-4 mt-5"><img src="/images/cat_fish.jpg" alt="cat" style="height:10rem;width:10rem;"/></div>
    </div>
</div>
<style>
    .sideBar{
        position:fixed;
        left:0rem;
        top:0rem;
        z-index: 99;
        background:var(--color5);
    }
    .sideBarContainer{
        width:20vw;
        box-shadow: 0.01rem 0.5rem 0.5rem 0.01rem #bbd3dd;
        min-height:100vh;
        height: 100%;
        padding-top:4rem;
    }
</style>