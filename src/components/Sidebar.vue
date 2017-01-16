<template>
	<div id="sidebar">
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
	background: #3e4651;
	margin-top: 60px;
	padding: 0;
	height: 100vh;
	width: 200px;
}


</style>
