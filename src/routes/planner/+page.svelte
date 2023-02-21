<script lang="ts">
    import Navigation from "../../component/Navigation.svelte";
    import { onMount } from "svelte";
    import SideBar from "../../component/SideBar.svelte";
    import {browser} from "$app/environment";
    import * as CONSTANTS from "../../constants";
    import axios from "axios";

    let user: any = null;
    let startDate : Date;
    let endDate : Date;
    let budgets : any = [];

    if(browser){
        onMount(async () => {
            user =
                localStorage.getItem("user") != null
                    ? localStorage.getItem("user")
                    : null;
            if (user == null) {
                window.location.replace("/");
            }
        });
    }

    const getBudgets = () => {
        let url: string = `${CONSTANTS.API_V1}/budget/`;
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            },
            params:{
                startDate : startDate,
                endDate : endDate
            }
        };

        axios
            .get(url, config)
            .then((response) => {
                let status: number = response.status;
                if (status == CONSTANTS.HTTP_STATUS_OK) {
                    budgets = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

</script>
<Navigation/>
<div class="d-flex">
    <SideBar/>
    <div class="mainDiv p-4" style="width:80vw;background:#000,min-height:100vh">
        <div class="d-flex gap-3">
            <div>
                <label for="startdate">Start Date:</label>
                <input type="date" id="startdate" name="startdate" bind:value={startDate}>
            </div>
            <div>
                <label for="enddate">End Date:</label>
                <input type="date" id="enddate" name="enddate" bind:value={endDate}>
            </div>
            <button on:submit={()=>getBudgets}>Apply</button>
        </div>
        <div>
            {#each budgets as budget}
                <div class="card">
                    <div>Total : {budget.totalBudget}</div>
                    <div>Saving : {budget.savingBudget}</div>
                    <div>Inestment : {budget.investmentBudget}</div>
                    <div>Expense : {budget.expenseBudget}</div>
                </div>
            {/each}
        </div>
    </div>
</div>