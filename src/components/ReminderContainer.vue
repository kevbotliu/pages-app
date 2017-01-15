<template>
	<div id="reminder-container">
		d
	</div>
</template>

<script>
import Reminder from "./Reminder.vue"

export default {
	components: {
		"reminder": Reminder
	}
}

</script>

<style> 
#reminder-container {
	position: fixed;
	height: 100vh;
	margin-left: 400px;
	width: 100%;
	color: #e0e2e5;
	background: #F5F2F1;
}
</style>