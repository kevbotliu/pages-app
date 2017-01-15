<template>
    <div id="app-body">
        <app-sidebar 
        :accountName="accountName" 
        :currentTime="currentTime">
        </app-sidebar>
        <app-reminder-list></app-reminder-list>
        <app-reminder-container></app-reminder-container>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import ReminderList from "./components/ReminderList.vue";
import ReminderContainer from "./components/ReminderContainer.vue";

export default {
    data() {
        return {
            accountName: "Kevin Liu",
            currentTime: "timeofDay"
        }
    },
    computed: {
        timeOfDay() {
            return new Date().getHours();
        }
    },
    methods: {

    },
    components: {
        "app-sidebar": Sidebar,
        "app-reminder-list": ReminderList,
        "app-reminder-container": ReminderContainer
    }
}
</script>

<style>
#app-body {
    padding: 0;
    margin: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
}
</style>

