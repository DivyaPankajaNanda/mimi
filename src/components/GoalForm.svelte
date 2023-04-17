<script lang="ts">
    export let goal : any

</script>
<form class="form">
    <div>
        <label for="title">Title:</label>
        <input type="text" name="title" class="form-control" placeholder="Title" bind:value={goal.title}/>
    </div>
    <div>
        <label for="description">Description:</label>
        <textarea name="description" class="form-control" placeholder="Description" bind:value={goal.description}/>
    </div>
    <div>
        <label for="amountRequired">Amount Required:</label>
        <input type="number" name="amountRequired" class="form-control" placeholder="0.00" bind:value={goal.amountRequired}/>
    </div>  
    <div>
        <label for="amountSaved">Amount Saved:</label>
        <input type="number" name="amountSaved" class="form-control" placeholder="0.00" bind:value={goal.amountSaved}/>
    </div>  
    <div>
        <label for="categoryId">Category</label>
        <input type="text" name="categoryId" class="form-control" bind:value={goal.categoryId}/>
    </div>  
    <div>
        <label for="type">Type:</label>
        <input type="text" name="type" class="form-control" placeholder="Type" bind:value={goal.type}/>
    </div>
    <div>
        <label for="startDate">Start Date:</label>
        <input type="date" name="startDate" class="form-control" bind:value={goal.startDate}/>
    </div>  
    <div>
        <label for="endDate">End Date:</label>
        <input type="date" name="endDate" class="form-control" bind:value={goal.endDate} min={goal.startDate}/>
        <!-- <input name="endDate" type="text" pattern="\d{2}/\d{2}/\d{4}" class="form-control datepicker" bind:value={goal.endDate} min={goal.startDate}/> -->
    </div>
</form>
  