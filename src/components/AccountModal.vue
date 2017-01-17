<template>
	<transition name="fade-over">
		<div id="account-modal-wrapper" @click="wrapperClick">
			<div id="account-modal">
				<form id="login-container">
					<h1>login</h1>
					<input type="text" placeholder="Username">
					<input type="password" placeholder="Password">
					<input type="submit">
				</form>
				<div id="user-container">
					<user></user>
				</div>

			</div>
		</div>
	</transition>
</template>

<script>
import User from "./User.vue"

export default {
	props: {
		changeAccountModalState: Function
	},
	methods: {
		wrapperClick(e) {
			if(e.target.id == "account-modal-wrapper") this.changeAccountModalState();
		}
	},
	components: {
		"user": User
	}
}

</script>

<style> 
.fade-over-enter-active, .fade-over-leave-active {
 	transition: all 0.2s
}
.fade-over-enter, .fade-over-leave-to {
	opacity: 0;
 	transform: scale(1.1, 1.1);
}
h1 {
	font-size: 1.5em;
	font-weight: bold;
	text-transform: uppercase;
	font-family: 'Slabo 27px', serif;
}
input {
	color: #e0e2e5;
	font-size: 1em;
	padding: 5px;
	font-family: 'Slabo 27px', serif;
	background: #59616E;
	border-radius: 3px;
	border: none;
	margin: 5px;
}
input:focus, input:active {
	outline: none;
}
input[type="submit"] {
	background: #2c3239;
	padding: 10px;
	margin: 10px;
	border-radius: 3px;
	box-shadow: 0 1px 1px black;
}
input[type="submit"]:active {
	background: #262c33;
	transform: scale(0.98, 0.98);
	box-shadow: none;
}

#account-modal-wrapper{
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
}
#account-modal {
	border-radius: 3px;
	height: 400px;
	width: 600px;
	background: rgb(79, 89, 99);
	overflow: hidden;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}
#login-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 50%;
	background: rgb(55, 65, 75);
}
</style>