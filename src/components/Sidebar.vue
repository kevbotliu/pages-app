<template>
	<div id="sidebar">
		<div id="sidebar-container"></div>
	</div>
</template>

<script>
import AccountModal from "./AccountModal.vue"

export default {
	components: {
		"app-account-modal": AccountModal
	}
}

</script>

<style> 

#sidebar {
	position: fixed;
	color: #e0e2e5;
	padding: 0;
	height: 100vh;
	width: 200px;
}

#sidebar-container {
	margin: 0;
	color: #e0e2e5;
	background: #3e4651;
	width: 200px;
	height: 100vh;
}

</style>
