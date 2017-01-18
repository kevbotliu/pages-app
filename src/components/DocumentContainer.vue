<template>
	<div id="document-container">
		<div id="center-wrapper">
			<div id="toolbar"></div>
			<div id="document"></div>
		</div>
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
#document-container{
	height: 100vh;
	flex-grow: 1;
	overflow-y: scroll;
}
#center-wrapper {
	width: 50vw;
	margin: auto;
	margin-top: 60px;
}
#toolbar {
	height: 60px;
	background: white;
	color: black;
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