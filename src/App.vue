<template>
    <div id="app-body">
        <app-navbar></app-navbar>

        <app-sidebar v-show="showingBar1"></app-sidebar>
        <app-document-list v-show="showingBar2"></app-document-list>

        <app-document-container></app-document-container>
        <app-account-modal v-show="showingAccountModal"></app-account-modal>
        <app-statusbar></app-statusbar>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import DocumentList from "./components/DocumentList.vue";
import DocumentContainer from "./components/DocumentContainer.vue";
import Navbar from "./components/Navbar.vue";
import AccountModal from "./components/AccountModal.vue";
import Statusbar from "./components/Statusbar.vue";

import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters([
            "showingAccountModal",
            "showingBar1",
            "showingBar2"
        ])
          
    },
    components: {
        "app-sidebar": Sidebar,
        "app-document-list": DocumentList,
        "app-document-container": DocumentContainer,
        "app-navbar": Navbar,
        "app-account-modal": AccountModal,
        "app-statusbar": Statusbar
    },
}
</script>

<style>
.translateHide {
    transform: translateX(-200px);
}
#app-body {
    display: flex;
    flex-direction: row;
    color: #e0e2e5;
    padding: 0;
    margin: 0;
    position: fixed;
    background: rgb(79, 89, 99);
    height: 100vh;
    width: 100%;
}
html {
    overflow: hidden;
    height: 100%;
}
body {
    height: 100%;
    overflow: auto;
}


</style>

