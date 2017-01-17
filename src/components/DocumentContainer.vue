<template>
	<div id="document-container">
		<div id="toolbar"></div>
		<div id="document"></div>
	</div>
</template>

<script>
export default {
	mounted() {
		var container = document.getElementById('document');
		var quill = new Quill("#document", {
			modules: {
				toolbar: "#toolbar"
			}
		});
	}
}

</script>

<style> 
#document-container {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-content: center;
	justify-content: center;
	color: #e0e2e5;
	background: rgb(79, 89, 99);
	z-index: 998;
	margin-top: 60px;

}
#toolbar {
	height: 60px;
	width: 50vw;
	background: white;
	margin-bottom: 10px;
}
#document {
	color: black;
	font-size: 14;
	font-family: "Open Sans";
	padding: 50px;
	height: 100vh;
	background: white;
	width: 50vw;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
}
</style>