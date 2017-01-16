<template>
	<div id="account-modal">
		
	</div>
</template>

<script>
import User from "./User.vue"

export default {
	components: {
		"user": User
	}
}

</script>

<style> 
#account-modal {
	position: absolute;
	z-index: 9999;
	height: 600px;
	width: 1200px;
	background: red;
}
</style>