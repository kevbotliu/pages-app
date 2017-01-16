<template>
    <div id="app-body">
        <app-navbar
        :accountName="accountName" 
        :timeOfDay="timeOfDay">
        </app-navbar>
        <app-sidebar></app-sidebar>
        <app-document-list></app-document-list>
        <app-document-container></app-document-container>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import DocumentList from "./components/DocumentList.vue";
import DocumentContainer from "./components/DocumentContainer.vue";
import Navbar from "./components/Navbar.vue";

export default {
    data() {
        return {
            accountName: "Kevin Liu",
        }
    },
    methods: {
        timeOfDay() {
            return new Date().getHours();
        }
    },
    components: {
        "app-sidebar": Sidebar,
        "app-document-list": DocumentList,
        "app-document-container": DocumentContainer,
        "app-navbar": Navbar
    }
}
</script>

<style>
#app-body {
    color: #e0e2e5;
    padding: 0;
    margin: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
}
</style>

