<script lang="ts">
    import * as HTTP_STATUS from "@utils/http_status"
    import { axios_instance } from "@utils/api"
    import type { Budget } from "@utils/types"
    import { json_header } from "@utils/api"
    import { onMount } from "svelte";
    import * as CONSTANTS from "@utils/constants";


    let startDate : Date
    let endDate : Date
    let budgets : Budget[] = []
    let message : string = ``

    const getBudgets = () => {
        let url: string = `/budget/`
        let config = {
            headers: json_header,
            params:{
                startDate : startDate,
                endDate : endDate
            }
        }

        axios_instance
            .get(url, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    budgets = response.data
                    message = ``
                }
            })
            .catch((error) => {
                let status: number = error.response.status
                if(status == HTTP_STATUS.NOT_FOUND) {
                    message = "No budget found in this range."
                }
            })
    }

    const getAllBudgets =async () => {
        let url: string = `/budget/all`
        let config = {
            headers: json_header,
        }

        axios_instance
            .get(url, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    budgets = response.data
                    message = ``
                }
            })
            .catch((error) => {
                let status: number = error.response.status
                if(status == HTTP_STATUS.NOT_FOUND) {
                    message = "No budget found "
                }
            })
    }

    onMount(()=>{
        getAllBudgets()
    })
</script>
<!-- <div class="d-flex gap-3">
    <div>
        <label for="startdate">Start Date:</label>
        <input type="date" id="startdate" name="startdate" bind:value={startDate}>
    </div>
    <div>
        <label for="enddate">End Date:</label>
        <input type="date" id="enddate" name="enddate" bind:value={endDate}>
    </div>
    <button on:click={()=>getBudgets()}>Apply</button>
</div> -->
<div>{message}</div>
<div>
    {#each budgets as budget}
        <div class="card">
            <div>Total : {CONSTANTS.USER_CURRENCY} {budget.totalBudget}</div>
            <div>Saving : {CONSTANTS.USER_CURRENCY} {budget.savingBudget}</div>
            <div>Inestment : {CONSTANTS.USER_CURRENCY} {budget.investmentBudget}</div>
            <div>Expense : {CONSTANTS.USER_CURRENCY} {budget.expenseBudget}</div>
            <div>Saving made : {CONSTANTS.USER_CURRENCY} {budget.savingAmount}</div>
            <div>Inestment made : {CONSTANTS.USER_CURRENCY} {budget.investmentAmount}</div>
            <div>Expense made : {CONSTANTS.USER_CURRENCY} {budget.expenseAmount}</div>
            <div>Start Date : {CONSTANTS.formatToLocaleDateString(budget.startDate)}</div>
            <div>End Date : {CONSTANTS.formatToLocaleDateString(budget.endDate)}</div>
        </div>
    {/each}
</div>