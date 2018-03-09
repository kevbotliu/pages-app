<template>
	<div id="document-container">
		<div id="center-wrapper">
			<textarea id="document"></textarea>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	mounted() {
		var container = document.getElementById('document');
		var textWindow = tinymce.ui.Window;
		tinymce.init({ 
			selector:'textarea',
			statusbar: false,
			toolbar: false,
			menubar: false,
			content_style: "div {margin: 10px; font-size: 24; border: 5px solid red; padding: 3px}"
		});
	},
	computed: {

	}
}

</script>

<style> 
#document-container{
	height: 100vh;
	flex-grow: 1;
	overflow: scroll;
}
#center-wrapper {
	width: 50vw;
	margin: auto;
	margin-top: 60px;
}
#document {
	color: black;
	font-size: 24;
	font-family: "Open Sans";
	padding: 50px;
	min-height: 100vh;
	background: white;
	min-width: 50vw;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
}
</style>