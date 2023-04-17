<script lang="ts">
    import { onMount } from "svelte"
    import { axios_instance } from "@utils/api"
    import * as HTTP_STATUS from "@utils/http_status"
    import Goals from "@components/Goals.svelte"
    import GoalForm from "@components/GoalForm.svelte"
    import SideModal from "@components/SideModal.svelte"
    import type { GoalIn } from "@utils/types"
    import { json_header } from "@utils/api"
    import * as CONSTANTS from "@utils/constants"

    let edit : boolean = false
    let modal_show : boolean = false

    $: goals = [] as any
    const getGoals = async () => {
        let url: string = `/goal/`
        let config = {
            headers: json_header,
            params:{
                offset : 0,
                size : 100
            }
        }

        axios_instance
            .get(url, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    goals = response.data.content
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let form_goal : GoalIn = {}

    const addGoal = async (goal : GoalIn) => {

        let url: string = `/goal/`
        let config = {
            headers: json_header
        }

        let data : GoalIn = goal

        axios_instance
            .post(url, data, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.CREATED) {
                    getGoals()
                    closeModal()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const editGoal = async (goal : GoalOut) => {
        let url: string = `/goal/${goal.id}`
        let config = {
            headers: json_header
        }

        let data : GoalOut = goal

        axios_instance
            .put(url, data, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    getGoals()
                    closeModal()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteGoal =async (event : Event) => {
        event.preventDefault()
        
        let url: string = `/goal/${event.detail.goalid}`
        let config = {
            headers: json_header
        }

        let data : GoalIn = goals.filter((goal)=>goal.id == event.detail.goalid)[0]

        axios_instance
            .delete(url, data, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    getGoals()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const closeModal =async (event : Event) => {
        modal_show = false
    }

    const saveModalData =async (event : Event) => {
        event.preventDefault()
        if(edit)
            editGoal(form_goal)
        else
            addGoal(form_goal)
    }

    const showAddGoalModal =async (event : Event) => {
        modal_show = true
        edit = false
        form_goal = {}
    }

    const showEditGoalModal =async (event : Event) => {
        modal_show = true
        edit= true
        form_goal = event.detail.goal
    }
    
    onMount(async () => {
        getGoals()
    })


</script>
{#if modal_show}
    <SideModal on:closeModal={closeModal} on:saveModalData={saveModalData}>
        <GoalForm goal={form_goal}/>
    </SideModal>
{/if}
<div class="d-flex gap-2 justify-content-end">
    <button class="primaryBtn" on:click={showAddGoalModal}>Add</button>
</div>
<Goals goals = {goals} on:showEditGoalModal={showEditGoalModal} on:deleteGoal={deleteGoal}/>


