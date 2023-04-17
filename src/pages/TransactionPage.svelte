


<script lang="ts">
    import { onMount } from "svelte"
    import * as HTTP_STATUS from "@utils/http_status"
    import { axios_instance } from "@utils/api"
    import type { TransactionIn,TransactionOut } from "@utils/types"
    import TransactionForm from "@components/TransactionForm.svelte"
    import Transactions from "@components/Transactions.svelte"
    import SideModal from "@components/SideModal.svelte"
    import { json_header } from "@utils/api"
    import * as CONSTANTS from "@utils/constants"

    let edit : boolean = false
    let modal_show : boolean= false
    // $: size = CONSTANTS.PAGE_ENTRIES[0] as number
    $: size = 1000000 as number
    $: offset = 0 as number

    $: transactions = [] as TransactionOut
    const getTransactions =async () => {
        let url: string = `/transaction/`
        let config = {
            headers: json_header,
            params:{
                offset : offset,
                size : size
            }
        }

        axios_instance
            .get(url, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    transactions = response.data.content
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let form_transaction : TransactionIn | TransactionOut = {}

    const addTransaction = async (transaction) => {

        let url: string = `/transaction/`
        let config = {
            headers: json_header
        }

        let data : TransactionIn = transaction

        axios_instance
            .post(url, data, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.CREATED) {
                    getTransactions()
                    closeModal()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const editTransaction = async (transaction) => {

        let url: string = `/transaction/${transaction.id}`
        let config = {
            headers: json_header
        }

        let data : TransactionOut = transaction

        axios_instance
            .put(url, data, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    getTransactions()
                    closeModal()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteTransaction =async (event : Event) => {
        event.preventDefault()
        
        let url: string = `/transaction/${event.detail.transactionid}`
        let config = {
            headers: json_header
        }

        axios_instance
            .delete(url, config)
            .then((response) => {
                let status: number = response.status
                if (status == HTTP_STATUS.OK) {
                    getTransactions()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const showEditTransactionModal = async (event : Event) => {
        modal_show = true
        form_transaction = event.detail.transaction
        edit = true
    }

    const showAddTransactionModal = async (event : Event) => {
        modal_show = true
        form_transaction = {}
        edit = false
    }

    const closeModal = async (event : Event) => {
        modal_show = false
    }

    const saveModalData =async (event : Event) => {
        event.preventDefault()
        if(edit)
            editTransaction(form_transaction)
        else
            addTransaction(form_transaction)
    } 

    const handlePageEntryCountChange =async (event : Event) => {
        size = Number(event.target.value)
        getTransactions()
    }

    onMount(async () => {
        getTransactions()
    })

</script>
{#if modal_show}
    <SideModal on:closeModal={closeModal} on:saveModalData={saveModalData}>
        <TransactionForm transaction = {form_transaction} />
    </SideModal>
{/if}
<div class="d-flex gap-2 justify-content-end">
    <button class="primaryBtn" on:click={showAddTransactionModal}>Add</button>
</div>
<!-- <div class="d-flex justify-content-end">
    <label for="entries_per_page"></label>
    <select type="number" name="entries_per_page" class="form-select-sm" bind:value={size} on:change={handlePageEntryCountChange}>
        {#each CONSTANTS.PAGE_ENTRIES as PAGE_ENTRY}
            <option value={PAGE_ENTRY}>{PAGE_ENTRY}</option>
        {/each}
    </select>
</div> -->
<Transactions transactions = {transactions} on:showEditTransactionModal={showEditTransactionModal} on:deleteTransaction={deleteTransaction}/>


