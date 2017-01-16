<template>
	<div id="document-container">
		<statusbar 
		:changeSideBarState="changeSideBarState"
		:changeListBarState="changeListBarState">
		</statusbar>
	</div>
</template>

<script>
import Statusbar from "./Statusbar.vue";

export default {
	props: {
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
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100vh;
	margin-left: 400px;
	width: 100%;
	color: #e0e2e5;
	background: rgb(79, 89, 99);
}
</style>