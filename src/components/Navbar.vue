<template>
	<div id="navbar">
		<div id="account-header">
			<img class="nav-button" @click="toggleAccountModal()" src="../assets/logo.png" alt="logo" height="18" width="18">
			<div class="account-name">
				<p class="small" v-if="timeOfDay<12">Good morning</p>
				<p class="small" v-else-if="timeOfDay<18">Good afternoon</p>
				<p class="small" v-else>Good evening</p>
				{{ accountName }}
			</div>
		</div>
		<div id="document-list-header">
			<img class="nav-button" src="../assets/plus.png" height="18" width="18" alt="New">
			<div class="pages-name">
				<p class="small">View past edits </p>
				Pages
			</div>
		</div>
		<div id="document-container-header">
			
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"

export default {
	methods: {
		...mapMutations([
			"toggleAccountModal",
		])
	},
	computed: {
		...mapGetters([
			"accountName",
			"timeOfDay",

		])

	}
}
</script>

<style> 
#navbar {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-items: center;
	z-index: 9999;
	height: 60px;
	width: 100%;
	background: rgb(55, 65, 75);
	border-bottom: 1px solid #2c3239;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);

	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;

}
.nav-button {
	background: rgb(48, 58, 68);
	padding: 10px;
	margin: 0 10px 0 10px;
	border: 1px solid rgb(45, 55, 65);
	border-radius: 3px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
}
.nav-button:active {
	background: rgb(38, 48, 58);
	transform: scale(0.99, 0.99);
	box-shadow: none;
}
#account-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 200px;
}
.account-name {
	font-size: 1.2em;
	text-transform: uppercase;
	font-family: 'Slabo 27px', serif;
	margin-top: 3px;
}
.small {
	color: #8c8b96;
	font-size: 0.5em;
	margin: 0;
}
#document-list-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 200px;	
}
.pages-name {
	font-size: 1.2em;
	font-family: "Slabo 27px", serif;
	text-transform: uppercase;
	margin-top: 3px;
}
#document-container-header {
	display: flex;
	flex-direction: row;
	align-items: center;
}
#doc-name {
	font-size: 1.5em;
	width:100%;
    box-sizing:border-box;
}
</style>