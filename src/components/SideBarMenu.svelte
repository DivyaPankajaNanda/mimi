<script lang="ts">
    import { setSessionStorage } from "@utils/api"
    import { active_menu_id } from "@utils/store"

    
    export let title : string
    export let id : string
    export let icon : string

    let current_menu_id : string

    const activeMenuUpdate = (menu_id:string)=>{
        setSessionStorage("active_menu_id",menu_id)
        active_menu_id.set(menu_id)
    }

    active_menu_id.subscribe(value => {
        current_menu_id = value
    })
</script>

<button class="sideBarMenu sideBarMenu{id} {id==current_menu_id? `active`:``}" on:click={()=>{activeMenuUpdate(id)}}>
    <span>{title}</span>
    {@html icon}
</button>
<style>
    .sideBarMenu{
        width:100%;
        color:var(--color1);
        background:var(--color5);
        font-size: 1rem;
        cursor:pointer;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0.5rem;
        border-radius: 0rem;
    }
    .sideBarMenu.active{
        color:var(--color5);
        background:var(--color1);
    }
</style>