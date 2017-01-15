<template>
	<div id="sidebar">
		<div id="sidebar-header">
			<img src="../assets/logo.png" alt="logo" height="24" width="24">
			<div class="account-name">
				<p class="small" v-if="currentTime<12">Good morning,</p>
				<p class="small" v-else-if="currentTime<18">Good afternoon,</p>
				<p class="small" v-else>Good evening,</p>
				{{ accountName }}
			</div>
		</div>
		<div id="sidebar-container"></div>
	</div>
</template>

<script>
export default {
	props: {
		accountName: String,
		currentTime: Number
	}
}

</script>

<style> 
img {
	background: #2c3239;
	padding: 10px;
	margin: 20px 10px 20px 0;
	border-radius: 3px;
}
#sidebar {
	position: fixed;
	color: #e0e2e5;
	padding: 0;
	height: 100vh;
	width: 200px;
}
#sidebar-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: #e0e2e5;
	background: #373f48;
	text-align: center;
	width: 200px;
	border-bottom: 1px solid #2c3239;
}
.account-name {
	display: inline-block;
	color: #e0e2e5;
	padding: 5px 0 5px 0;
	border-radius: 3px;
	font-size: 1.25em;
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 10px;
	font-family: 'Slabo 27px', serif;
}
.small {
	color: #8c8b96;
	font-size: 0.6em;
	margin: 0;
}
#sidebar-container {
	margin: 0;
	color: #e0e2e5;
	background: #3e4651;
	width: 200px;
	height: 100vh;
}

</style>
