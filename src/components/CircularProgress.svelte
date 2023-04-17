<script lang="ts">
    import * as CONSTANTS from "@utils/constants"

    export let progress : number 
    let color : string = CONSTANTS.GOAL_PROGRESS_COLORS[2]

    let background : string = `conic-gradient(${color} ${progress*3.6}deg,#DEE2E6 ${progress*3.6}deg)`
</script>

<div class="circularContainer d-flex justify-content-center align-items-center" style="background:{background}">
    <div class="valueContainer d-flex justify-content-center align-items-center">
        <span class="bold">{progress}%</span>
    </div>
</div>

<style>
    .circularContainer{
        height:7rem;
        width:7rem;
        border-radius: 50%;
    }
    .valueContainer{
        height:6rem;
        width:6rem;
        border-radius: 50%;
        background: var(--color5);
        color:var(--color1);
        font-size: 1.5rem;
    }
</style>