<script lang="ts">
    import { onMount } from "svelte"
    import Navigation from "@components/Navigation.svelte"
    import SideBar from "@components/SideBar.svelte"
    import { getSessionStorage, getUser } from "@utils/api"
    import * as CONSTANTS from "@utils/constants"
    import { active_menu_id } from "@utils/store"
    import DashboadPage from "@pages/DashboadPage.svelte"
    import TransactionPage from "@pages/TransactionPage.svelte"
    import GoalPage from "@pages/GoalPage.svelte"
    import BudgetPage from "@pages/BudgetPage.svelte"
    import AnalyticsPage from "@pages/AnalyticsPage.svelte"
    
    const SIDEBAR_MENUS : any = [
        {
            id : `1`,
            title : `Dashboard`,
            component : DashboadPage,
            icon : `<span class="icons fa fa-paw"></span>`,
        },
        {
            id : `2`,
            title : `Goals`,
            component : GoalPage,
            icon :`<span class="icons fa fa-paw"></span>`,
        },
        {
            id : `3`,
            title : `Budget`,
            component : BudgetPage,
            icon : `<span class="icons fa fa-paw"></span>`,
        },
        {
            id : `4`,
            title : `Transaction`,
            component  :  TransactionPage,
            icon : `<span class="icons fa fa-paw"></span>`,
        },
        {
            id : `5`,
            title : `Analytics`,
            component : AnalyticsPage,
            icon : `<span class="icons fa fa-paw"></span>`,
        },
        
    ]

    let user : object | null 
    $: visible = null as Boolean | null
    let current_menu_id : string

    active_menu_id.subscribe(value => {
        current_menu_id = value
    })

    $: current_menu = SIDEBAR_MENUS.filter((menu : any)=>menu.id == current_menu_id)[0].component as ConstructorOfATypedSvelteComponent
    
    onMount(async ()=>{
        visible = false
        user = await getUser()
        let path : string = window.location.pathname
        
        if (user == null || !CONSTANTS.ROUTES.includes(path) || (user != null && path != CONSTANTS.ROUTES[0])) {
            if(path != CONSTANTS.ROUTES[0])
            window.location.replace(CONSTANTS.ROUTES[0])
        }else if(user != null && path == CONSTANTS.ROUTES[0]){
            visible = true
            active_menu_id.set(getSessionStorage("active_menu_id") != null ? getSessionStorage("active_menu_id") : `1`)
        }
    })

</script>

{#if visible == true}    
    <Navigation user = {user}/>
    <div class="d-flex mainDiv">
        <SideBar SIDEBAR_MENUS = {SIDEBAR_MENUS}/>
        <div class="contentDiv p-4">
            <svelte:component this={current_menu} />
        </div>
    </div>
{:else if visible == false}
    <Navigation user = {null}/>
    <slot></slot>
{:else if visible == null}
    <div class="d-flex justify-content-center align-items-center w-100" style="height:100vh;">
        <div class="h1 fa fa-paw"></div>
    </div>
{/if}
<style>
    .mainDiv{
        padding-top:3rem;
    }
    .contentDiv{
        width:80vw;
        margin-left:20vw;
        height:94vh;
        overflow-y: scroll;
    }
</style>