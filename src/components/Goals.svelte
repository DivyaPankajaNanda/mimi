<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import * as CONSTANTS from "@utils/constants"
    import type { GoalIn } from "@utils/types"
    import CircularProgress from "@components/CircularProgress.svelte"
    import { formatToLocaleDateString } from "@utils/constants";

    export let goals : any = []

    const dispatch = createEventDispatcher()
    
    const showEditGoalModal =async (event : Event, goal : any) => {
        event.preventDefault()
        
        let new_goal = {...goal}
        console.log(new_goal)
        new_goal.startDate = CONSTANTS.formatToISOString(goal.startDate)
        new_goal.endDate = CONSTANTS.formatToISOString(goal.endDate)
        console.log(new_goal)
        let data : object = {
            goal : new_goal
        }
        dispatch("showEditGoalModal",data)
    }

    const deleteGoal =async (event : Event, goalid : string) => {
        event.preventDefault()
        let data : object = {
            goalid : goalid
        }
        dispatch("deleteGoal",data)
    }
</script>
<div class="goalsList mt-2">
    {#each goals as goal,index}
    <div class="card goal">
        <div class="d-flex justify-content-end gap-3">
            <div class="action" on:click={(event) => showEditGoalModal(event,goal)}><span class="fa fa-edit"></span></div>
            <div class="action" on:click={(event) => deleteGoal(event,goal.id)}><span class="fa fa-trash"></span></div>
        </div>
        <div class="d-flex justify-content-center alig-items-center">
            <CircularProgress progress={Math.round((goal.amountSaved/goal.amountRequired)*100)}/>
        </div>
        <div class="bold mt-1">Title : </div>
        <div>{goal.title}</div>
        <div class="bold mt-1">Description : </div>
        <textarea class="goalDescription" readonly>{goal.description}</textarea>
        <div class="bold mt-1">Progress : </div>
        <div>{CONSTANTS.USER_CURRENCY} {goal.amountSaved} / {CONSTANTS.USER_CURRENCY} {goal.amountRequired}</div>        
        <div class="bold mt-1">Period : </div>
        <div class="d-flex justify-content-start">
            <div>{CONSTANTS.formatToLocaleDateString(goal.startDate)}  -  {CONSTANTS.formatToLocaleDateString(goal.endDate)}</div>
        </div>
        <div class="bold mt-1">Status : </div>
        <div>{CONSTANTS.calculateDayDifference(goal.startDate,goal.endDate)} days left to save {CONSTANTS.USER_CURRENCY}{goal.amountRequired - goal.amountSaved}</div>
        {#if (goal.amountRequired - goal.amountSaved) > 0}
            <button class="primaryBtn mt-1">Save</button>
        {:else if (goal.amountRequired - goal.amountSaved) == 0}
            <button class="primaryBtn mt-1">Claim</button>
        {:else if goal.completed}
            <div>Achieved</div>
        {/if}
    </div>
    {/each}
</div>

<style>
    .goalsList{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap:2rem;
        padding:2rem;
    }
    .goal{
        padding:1rem;
    }
    .action{
        cursor:pointer;
        color:var(--color1);
    }
    .goalDescription{
        height:4rem;
        overflow-y: scroll;
        border: 0.2rem solid #DEE2E6;
        border-radius: 0.3rem;
        resize: none;
    }
</style>