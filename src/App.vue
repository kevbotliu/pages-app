<template>
    <div id="app-body">
        <app-navbar
        :accountName="accountName" 
        :timeOfDay="timeOfDay"
        :changeAccountModalState="changeAccountModalState">
        </app-navbar>
        <app-sidebar v-show="showingBar1"></app-sidebar>
        <app-document-list v-show="showingBar2"></app-document-list>
        <app-document-container
        :changeSideBarState="changeSideBarState"
        :changeListBarState="changeListBarState">
        </app-document-container>
        <app-account-modal 
        :changeAccountModalState="changeAccountModalState" 
        v-show="showingAccountModal">
        </app-account-modal>
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
            accountName: "You",
            showingAccountModal: false,
            showingBar1: true,
            showingBar2: true
        }
    },
    methods: {
        timeOfDay() {
            return new Date().getHours();
        },
        changeAccountModalState() {
            if(this.showingAccountModal) this.showingAccountModal = false;
            else this.showingAccountModal = true;
        },
        changeSideBarState() {
            if(this.showingBar1) this.showingBar1 = false;
            else this.showingBar1 = true;
        },
        changeListBarState() {
            if(this.showingBar2) this.showingBar2 = false;
            else this.showingBar2 = true;
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

