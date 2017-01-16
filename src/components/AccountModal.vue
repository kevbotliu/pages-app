<template>
	<div id="account-modal-wrapper" @click="wrapperClick">
		<div id="account-modal">
			<user></user>
		</div>
	</div>
</template>

<script>
import User from "./User.vue"

export default {
	props: {
		changeAccountModalState: Function
	},
	methods: {
		wrapperClick(e) {
			if(e.target.id == "account-modal") return;
			else this.changeAccountModalState();
		}
	},
	components: {
		"user": User
	}
}

</script>

<style> 
#account-modal-wrapper{
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	height: 100vh;
	width: 100%;
	background: black;
	opacity: 0.5;
}
#account-modal {
	height: 600px;
	width: 600px;
	background: #F5F2F1;
}
</style>