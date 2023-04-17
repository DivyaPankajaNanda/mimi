<script lang="ts">
    export let transaction : any

</script>

<form class="form">
    <div>
        <label for="title">Title</label>
        <input name="title" type="text" class="form-control" placeholder="Title" bind:value={transaction.title} />
    </div>
    <div>
        <label for="description">Description</label>
        <input name="description" type="text" class="form-control" placeholder="Description" bind:value={transaction.description} />
    </div>
    <div>
        <label for="amount">Amount</label>
        <input name="amount" type="decimal" class="form-control" placeholder="0.00" bind:value={transaction.amount} />
    </div>
    <div>
        <label for="categoryId">Category</label>
        <input name="categoryId" type="text" class="form-control" placeholder="Category" bind:value={transaction.categoryId} />
    </div>
    <div>
        <label for="type">Type</label>
        <input name="type" type="text" class="form-control" placeholder="Type" bind:value={transaction.type} />
    </div>
    <div>
        <div class="d-flex justify-content-between">
            <label for="happinessQuotient">Happiness Quotient</label>
            <input type="text" class="form-control range-input" bind:value={transaction.happinessQuotient}>
        </div>
        <input name="happinessQuotient" class="form-range" type="range" min="0.00" max="10.00" step="0.5" bind:value={transaction.happinessQuotient} />
    </div>
    <div>
        <div class="d-flex justify-content-between">
            <label for="necessityQuotient">Necessity Quotient</label>
            <input type="text" class="form-control range-input" bind:value={transaction.necessityQuotient}>
        </div>
        <input name="necessityQuotient" class="form-range" type="range" min="0.00" max="10.00" step="0.5" bind:value={transaction.necessityQuotient} />
    </div>
</form>

<style>
    .range-input{
        width:4rem;
    }
</style>