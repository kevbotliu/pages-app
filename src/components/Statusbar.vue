<template>
	<div id="statusbar">
		<img class="status-button" src="../assets/logo.png" alt="logo" height="16" width="16">
		<img class="status-button" src="../assets/plus.png" height="16" width="16" alt="New">
	</div>
</template>

<script>

</script>

<style> 
#statusbar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start; 
	width: 100%;
	height: 40px;
	background: rgb(55, 65, 75);
	border-top: 1px solid #2c3239;
}
.status-button {
	background: #2c3239;
	padding: 8px;
	margin: 0 0 0 8px;
	border-radius: 3px;
	box-shadow: 0 1px 1px black;
}
.status-button:active {
	background: #262c33;
	transform: scale(0.98, 0.98);
	box-shadow: none;
}
</style>