<script lang="ts">
    import Budgets from "@components/Budgets.svelte";

    const today : string = new Date().toLocaleDateString()

</script>
<div class="todayBanner bold">{today}</div>
<h3>Budget : </h3>
<Budgets />
<h3>Transactions : </h3>
<!-- <Transactions/> -->

<style>
    .todayBanner{
        padding:1rem;
        width:100%;
        background: var(--color1);
        color:var(--color5);
        font-size: 1.5rem;
        border-radius: 0.6rem;
    }
</style>

