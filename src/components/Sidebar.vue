<template>
	<div id="sidebar">
		<div id="sidebar-header">{{ accountName }}</div>
		<div id="sidebar-container"></div>
	</div>
</template>

<script>
export default {
	props: {
		accountName: String
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
#sidebar-header {
	color: #e0e2e5;
	background: #373f48;
	width: 200px;
	font-size: 1.25em;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	padding: 20px 0 20px 0;
	font-family: 'Slabo 27px', serif;
	border-bottom: 1px solid #2c3239;
}
#sidebar-container {
	margin: 0;
	color: #e0e2e5;
	background: #3e4651;
	width: 200px;
	height: 100vh;
}

</style>
