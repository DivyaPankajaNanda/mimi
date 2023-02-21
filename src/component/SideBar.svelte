<script lang="ts">
    import SideBarMenu from "./SideBarMenu.svelte";
    import * as CONSTANTS from "../constants";
</script>
<div class="sideBar">
    <div class="sideBarContainer d-flex flex-column p-2 align-items-center">
        <div class="photoImg mb-4 mt-5"><img src="/images/cat_fish.jpg" alt="cat" style="height:10rem;width:10rem;"/></div>
        {#each CONSTANTS.SIDEBAR_MENUS as {id,title,link}}
            <SideBarMenu title={title} id={id} link={link}></SideBarMenu>
        {/each}
    </div>
</div>
<style>
    .sideBarContainer{
        width:20vw;
        box-shadow: 0.01rem 0.5rem 0.5rem 0.01rem #bbd3dd;
        min-height:94vh;
    }
</style>