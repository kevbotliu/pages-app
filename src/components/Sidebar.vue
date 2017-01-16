<template>
	<div id="sidebar">
		<div id="share-wrapper">
			Share this document
			<input>
		</div>
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
	background: rgb(63, 73, 83);
	margin-top: 60px;
	padding: 0;
	height: 100vh;
	width: 200px;
}


</style>
