<template>
    <section class="container" @click="count ++">
        <div class="desktop">
            Welcome back, {{ count }} times !
        </div>

        <div class="mobile">
            Mobile time !
        </div>
    </section>
</template>

<script>
export default {
	// asyncData() {
	// 	// Simulate some long process, HTTP requests or whatever
	// 	return new Promise((resolve, reject) => setTimeout(resolve, 2000))
	// },
	data() {
		return {
			count: 0,
		}
	},
}
</script>

<style>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.mobile {
	display: block;
}

.desktop {
	display: none;
}

@media screen and (min-width: 480px) {
	.mobile {
		display: none;
	}

	.desktop {
		display: block;
	}
}
</style>
