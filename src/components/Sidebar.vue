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
	display: flex;
	flex-direction: column;
	background: rgb(63, 73, 83);
	margin-top: 60px;
	padding: 0;
	height: 100vh;
	width: 200px;
	z-index: 1000;
	box-shadow: 1px 0 1px rgba(0, 0, 0, 0.4);
}
#share-wrapper {
	display: flex;
	flex-direction: column;
}


</style>
