<script lang="ts">
    import * as CONSTANTS from "../constants";
    import { browser } from "$app/environment";
    import {onMount} from "svelte"
    
    export let title:string;
    export let id: string;
    export let link :string;

    let active_menu_id = `1`;
    if(browser){
        onMount(async () => {
            active_menu_id = localStorage.getItem("active_menu_id") != null? `${localStorage.getItem("active_menu_id")}`:`1`;
            activeMenuUpdate(active_menu_id,CONSTANTS.SIDEBAR_MENUS.filter((menu:any)=>menu.id == active_menu_id)[0].link)
        });
    }

    const activeMenuUpdate = (id:string, link:string)=>{
        console.trace();
        let old_active_menu_id : string = active_menu_id;
        active_menu_id = id;
        localStorage.setItem("active_menu_id",id)
        if(active_menu_id != old_active_menu_id)
        window.location.replace(link);
    };

</script>

<button class="p-1 sideBarMenu sideBarMenu{id} {id==active_menu_id? `active`:``}" on:click={()=>{activeMenuUpdate(id,link)}}>{title}</button>
<style>
    .sideBarMenu{
        width:100%;
        background: transparent;
        color:black;
        font-size: 1rem;
        border-bottom: 0.1rem solid #bbd3dd;
        cursor:pointer;
    }
</style>