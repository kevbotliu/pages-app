<template>
    <div id="app-body">
        <app-navbar
        :accountName="accountName" 
        :timeOfDay="timeOfDay"
        :changeAccountModalState="changeAccountModalState">
        </app-navbar>
        <app-sidebar></app-sidebar>
        <app-document-list></app-document-list>
        <app-document-container></app-document-container>
        <app-account-modal v-show="showingAccountModal"></app-account-modal>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import DocumentList from "./components/DocumentList.vue";
import DocumentContainer from "./components/DocumentContainer.vue";
import Navbar from "./components/Navbar.vue";
import AccountModal from "./components/AccountModal.vue";

export default {
    data() {
        return {
            accountName: "Kevin Liu",
            showingAccountModal: false
        }
    },
    methods: {
        timeOfDay() {
            return new Date().getHours();
        },
        changeAccountModalState() {
            if(this.showingAccountModal) this.showingAccountModal = false;
            else this.showingAccountModal = true;
        }
    },
    components: {
        "app-sidebar": Sidebar,
        "app-document-list": DocumentList,
        "app-document-container": DocumentContainer,
        "app-navbar": Navbar,
        "app-account-modal": AccountModal
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

