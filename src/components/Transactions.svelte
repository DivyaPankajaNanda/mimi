<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import * as CONSTANTS from "@utils/constants"
    import type { TransactionOut } from "@utils/types"
    import { USER_CURRENCY } from "../utils/constants";

    export let transactions : TransactionOut = []

    const dispatch = createEventDispatcher()
    
    const showEditTransactionModal =async (event : Event, transaction : TransactionIn) => {
        event.preventDefault()
        let data : object = {
            transaction : transaction
        }
        dispatch("showEditTransactionModal",data)
    }

    const deleteTransaction =async (event : Event, transactionid : string) => {
        event.preventDefault()
        let data : object = {
            transactionid : transactionid
        }
        dispatch("deleteTransaction",data)
    }
</script>
<div class="transactionsList mt-2">
    {#each transactions as transaction}
    <div class="card transaction">
        <div class="d-flex justify-content-end gap-3">
            <div class="action" on:click={(event) => showEditTransactionModal(event,transaction)}><span class="fa fa-edit"></span></div>
            <div class="action" on:click={(event) => deleteTransaction(event,transaction.id)}><span class="fa fa-trash"></span></div>
        </div>
        <div class="d-flex justify-content-center imageContainer"><img src="{transaction.assetUrl}" class="transactionImg" alt="img"></div>
        <div class="bold mt-1">Title : </div>
        <div>{transaction.title}</div>
        <div class="bold mt-1">Description : </div>
        <textarea class="transactionDescription">{transaction.description}</textarea>
        <div class="bold mt-1">Amount : </div>
        <div>{CONSTANTS.USER_CURRENCY} {transaction.amount}</div>
        <div class="bold mt-1">Created : </div>
        <div>{CONSTANTS.formatToLocaleDateString(transaction.createdAt.slice(0,3))}</div>
    </div>
    {/each}
</div>

<style>
    .transactionsList{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap:2rem;
    }
    .transaction{
        padding:1rem;
    }
    .action{
        cursor:pointer;
        color:var(--color1);
    }
    .transactionDescription{
        height:4rem;
        overflow-y: scroll;
        border: 0.2rem solid #DEE2E6;
        border-radius: 0.3rem;
        resize: none;
    }
    .transactionImg{
        height:8rem;
    }
</style>