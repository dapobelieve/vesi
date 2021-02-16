<template>
	<nav>
		<div class="container">
			<div class="nav">
				<div class="left">
					<div class="image">
						<img src="https://avatars.githubusercontent.com/u/15062380?s=460&u=2f400d9555dc07bc4d2c2d25483ddba570fef29b&v=4" alt="">
					</div>
				</div>
				<div class="right">
					<div class="menu">
						<div>Overview
							</div>
						<div class="active"><Repo /> Repositories 
							<span class="label">{{repoCount}}</span></div>
						<div>Projects</div>
						<div>Packages</div>
					</div>
					<div>
						<input v-model="checkBox" type="checkbox" name="">
					</div>
				</div>
				
			</div>
		</div>
	</nav>
</template>
<script>
import Repo from "@/assets/repo"	
export default {
	props: {
		repoCount: {
			type: Number,
			required: true
		}
	},
	data () {
		return {
			checkBox: false
		}
	},
	watch: {
		checkBox(newVal) {
			if(newVal) {
				document.documentElement.style.setProperty("--bg-color", `#0d1117`);
				document.documentElement.style.setProperty("--text-primary", `#c9d1d9`);
				document.documentElement.style.setProperty("--text-secondary", `#c9d1d9`);
				document.documentElement.style.setProperty("--app-blue", `#58a6ff`);
				document.documentElement.style.setProperty("--btn-bg-color", `#21262d`);
				document.documentElement.style.setProperty("--border-color", `#21262d`);
			}else {
				document.documentElement.style.setProperty("--bg-color", `#ffffff`);
				document.documentElement.style.setProperty("--text-primary", `#24292e`);
				document.documentElement.style.setProperty("--text-secondary", `#586069`);
				document.documentElement.style.setProperty("--app-blue", `#0366d6`);
				document.documentElement.style.setProperty("--btn-bg-color", `#f3f4f6a8`);
				document.documentElement.style.setProperty("--border-color", `lightgrey`);
			}
		}
	},
	components: {
		Repo
	}
}	
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
	nav {
		width: 100%;
		padding-top: 2.5em;
		border-bottom: 1px solid var(--border-color);
		position: sticky;
		top: 0;
		z-index: 3;
		background-color: var(--bg-color);

		.nav {
			display: flex;
    	width: 100%;
    	justify-content: space-between;
    	align-items: flex-end;

    	.left {
    		width: 25%;
    	}


    	.image {
    		height: 40px;
    		width: 40px;
    		

    		img {
    			height: 100%;
    			width: 100%;
    			border-radius: 50%;
    			object-fit: cover
    		}
    	}

    	>.right {
    		width: 75%;
    		display: flex;
    		flex-grow: 1;

    		.menu {
    			display: flex;
    			align-items: flex-end;
    			width: 100%;
    			.active {
    				border-bottom: 1px solid #f9826c;
    				color: var(--text-primary);
    				span {
    					margin-left: 8px;
    				}
    			}
    			>* {
    				display: inline-flex;
    				align-items: center;
    				cursor: pointer;
    				padding-bottom: 6px;
    				font-weight: 600;
    				
    				svg {
    					margin-right: 8px;
    				}
    			}

    			 & > *:not(:last-child) {
    				margin-right: 4em;
    			}
    		}
    	}
		}

		> div {
			align-items: flex-end;
		}
}
}
</style>