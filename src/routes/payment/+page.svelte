


<script lang="ts">
    import Navigation from "../../component/Navigation.svelte";
    import { onMount } from "svelte";
    import SideBar from "../../component/SideBar.svelte";
    import { browser } from "$app/environment";
    import * as CONSTANTS from "../../constants";
    import axios from "axios";

    let user: any = null;

    let payments:any = [];
    const getPayments = () => {
            let url: string = `${CONSTANTS.API_V1}/payment/`;
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("token")}`
                },
                params:{
                    offset : 0,
                    size : 100
                }
            };

            axios
                .get(url, config)
                .then((response) => {
                    let status: number = response.status;
                    if (status == CONSTANTS.HTTP_STATUS_OK) {
                        payments = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

    if (browser) {
        onMount(async () => {
            user =
                localStorage.getItem("user") != null
                    ? localStorage.getItem("user")
                    : null;
            if (user == null) {
                window.location.replace("/");
            }

            getPayments();
        });

    }
</script>
<Navigation/>
<div class="d-flex">
    <SideBar />
    <div class="mainDiv p-4" style="width:80vw;background:#000,min-height:100vh">
        {#each payments as payment}
        <div class="card">
            <div>{payment.title}</div>
            <div>{payment.amount}</div>
        </div>
        {/each}
    </div>
</div>
