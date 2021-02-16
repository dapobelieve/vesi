<template>
	<div class="repo-card">
		<div class="left">
			<div>
				<h2><a :href="repo.html_url">{{repo.name}}</a></h2>
				<span v-if="repo.private" class="label">Private</span>
			</div>
			<span>{{repo.description}}</span>
			<div style="font-size: 12px">
				<div class="lang">
					<span class="circle"></span>
					<span>{{repo.language}}</span>
				</div>
				<div class="lang">
					<starIcon />
					<span>{{repo.stargazers_count}}</span>
				</div>
				<div class="lang">
					<forkIcon />
					<span>{{repo.forks_count}}</span>
				</div>
				<div>Updated {{repo.updated_at | repoUpdate }} ago</div>
			</div>
		</div>
		<div class="right">
			<div>
				<AppButton>
					<starIcon /> Star
				</AppButton>
			</div>
		</div>
	</div>
</template>
<script>
import starIcon from "@/assets/star";
import forkIcon from "@/assets/fork";
export default {
	props: {
		repo: {
			type: Object,
			required: true
		}
	},
	components: {
		starIcon, forkIcon
	}
}	
</script>
<style lang="scss">
.repo-card {
	width: 100%
}

@media (min-width: 768px) {
	.repo-card {
		width: 100%;
		display: flex;
		padding-top: 24px;
		padding-bottom: 24px;

		.left {
			width: 75%;
			> div {
				display: inline-flex;
				margin-bottom: 12px;
				margin-top: 12px;
				h2 {
					margin-right: 5px;
				}
				a {
					color: var(--app-blue) !important;
					font-size: 20px
				}
			}

			>span {
				display: block;
				margin-bottom: 12px;
				// margin-top: 12px;
			}

			.lang {
				display: flex;				
				align-items: center;
				margin-right: 16px;
				.circle {
					margin-right: 6px
				}
				
			};
		}
		.right {
			width: 25%;
	    display: flex;
	    // align-items: start;
	    justify-content: flex-end;

	    button {
	    	display: flex;
	    	align-items: center;
	    	background-color: var(--btn-bg-color);
	    	border: 0;
	    	padding: 6px 8px;
	    	border: 1px solid #1b1f2326;
	    	border-radius: 6px;
	    	cursor: pointer;
	    	&:focus {
					outline: none;
				}
	    }
	  }
	}
}
</style>