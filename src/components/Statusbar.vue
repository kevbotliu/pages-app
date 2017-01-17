<template>
	<div id="statusbar">
		<img class="status-button" @click="changeSideBarState" src="../assets/logo.png" alt="logo" height="16" width="16">
		<img class="status-button" @click="changeListBarState" src="../assets/plus.png" height="16" width="16" alt="New">
	</div>
</template>

<script>
export default {
	props: {
		showingBar1: Boolean,
		showingBar2: Boolean,
		changeSideBarState: Function,
		changeListBarState: Function
	}
}
</script>

<style> 
#statusbar {
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	z-index: 9999;
	bottom: 0;
	right: 0;
	height: 40px;
	padding: 5px 20px 5px 5px;

}
.status-button {
	background: rgb(72, 82, 92);
	padding: 8px;
	margin-right: 5px;
	border-radius: 3px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
}
.status-button:active {
	background: rgb(69, 79, 89);
	transform: scale(0.99, 0.99);
	box-shadow: none;
}
</style>