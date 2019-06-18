<template>
	<div id="app">
		<Header :title="headerTitle" :menu="menu"/>
		<div class="container">
			 <router-view></router-view>
		</div>
		<Footer :menu="menu"/>
		
	</div>
</template>

<script>
	import Header from './components/Blocks/Header'
	import Footer from './components/Blocks/Footer'

	export default {
		components: {
			Header,
			Footer
		},
		data(){
			return{
				headerTitle: "Menéame",
				menu: [
					{id: 1, url: "/login", title: "Login"},
					{id: 2, url: "/register", title: "Registrarse"}
				]
			}
		}
	}
</script>

<style>
	
</style>