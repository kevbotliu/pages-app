<template>
	<div id="document-container">
		<statusbar 
		:showingBar1="showingBar1"
		:showingBar2="showingBar2"
		:changeSideBarState="changeSideBarState"
		:changeListBarState="changeListBarState">
		</statusbar>
	</div>
</template>

<script>
import Statusbar from "./Statusbar.vue";

export default {
	props: {
		showingBar1: Boolean,
		showingBar2: Boolean,
		changeSideBarState: Function,
		changeListBarState: Function
	},
	components: {
		"statusbar": Statusbar
	}
}

</script>

<style> 
#document-container {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: flex-end;
	height: 100vh;
	color: #e0e2e5;
	background: rgb(79, 89, 99);
}
</style>