<script lang="ts">
    import Navigation from "../../component/Navigation.svelte";
    import { onMount } from "svelte";
    import SideBar from "../../component/SideBar.svelte";
    import {browser} from "$app/environment";

    let user: any = null;

    if(browser){
        onMount(async () => {
            user =
                localStorage.getItem("user") != null
                    ? localStorage.getItem("user")
                    : null;
            if (user == null) {
                window.location.replace("/");
            }
        });
    }
</script>
<Navigation/>
<div class="d-flex">
    <SideBar/>
    <div class="mainDiv p-4" style="width:80vw;background:#000,min-height:100vh">
        <div class="d-flex gap-3">
            <div>
                <label for="startdate">Start Date:</label>
                <input type="date" id="startdate" name="startdate">
            </div>
            <div>
                <label for="enddate">End Date:</label>
                <input type="date" id="enddate" name="enddate">
            </div>
            <button>Apply</button>
        </div>
    </div>
</div>