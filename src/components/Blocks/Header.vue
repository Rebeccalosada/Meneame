<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link to="/" class="navbar-brand">{{title}}</router-link>
			<ul class="navbar-nav">
					<router-link 
					v-for="item in menu"
					:key="item.id"
					:to="item.url"
					class="nav-item"
					tag="li">
						<a class="nav-link" href="#">{{item.title}}</a>
					</router-link>
			</ul>
		</nav>
    <nav>
			<ul class="">
				<button type="button">Crear Artículo</button>
			</ul>
		</nav>
	</header>
</template>

<style>
	header {
		margin-bottom: 20px;
	}
	.navbar-brand {
		font-size: 1.5em;
	}
</style>

<script>
	export default {

		props: [
			"menu", "title", "submenu"
		],
		data(){
			return {
				
			}
		}
	}
</script>