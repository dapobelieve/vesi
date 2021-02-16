<template>
	<div class="details">
		<div class="avatar">
			<a>
				<img src="https://avatars.githubusercontent.com/u/15062380?s=460&u=2f400d9555dc07bc4d2c2d25483ddba570fef29b&v=4" alt="">
				<div @click.self="" >🎯 Edit Status</div>
			</a>			
		</div>
		<div class="info">
			<span>Dapo Michaels</span>
			<span>dapobelieve</span>
			<span class="status">Go Do!</span>
			<AppButton block>Edit Profile</AppButton>
			<div>
				<span class=""><a href="">8 followers</a></span>
				<span class=""><a href="">29 following</a></span>
				<span class=""><a href="">278</a></span>
			</div>
		</div>
		<div class="about">
			<span class="company">@DemzAnalytics</span>
			<span class="links">Lagos Nigeria</span>
			<span class="links"><a href="">linkedin.com/in/dapo</a></span>
			<span class="links"><a href="">dapomichaels@gmail.com</a></span>
			<span class="links"><a href="">@codedrogo</a></span>
		</div>
		<div class="divider"></div>
		<div class="highlights">
			<h3>Highlights</h3>
			<span>Artic Code Vault Contributor</span>
			<div class="pro label">PRO</div>
		</div>
		<div class="divider"></div>
		<div class="highlights">
			<h3>Organizations</h3>
		</div>
	</div>
</template>
<script>
import img from "@/assets/mail.svg"	
import AppButton from "@/components/Button"	
export default {
	components: {
		AppButton
	}
}	
</script>
<style lang="scss">

.details {
	width: 100%;
}


@media (min-width: 768px) {
	.details {
		width: 25%;
		margin-left: 12px;
		margin-right: 12px;
		margin-top: 12px;

		.avatar {
			height: 280px;
			width: 280px;
			
			a {
				position: relative;

				div {
					border: 1px solid var(--btn-bg-color);
					position: absolute;
					bottom: 4rem;
					right: -41px	;
					border-radius: 2em;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 10px;
					cursor: pointer;
					padding: 8px;
					box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
					background-color: #fff
				}
			}

			img {
				height: 100%;
				width: 100%;
				border-radius: 50%;
				object-fit: cover;
			}
		}

		.info {
			margin-top: 1rem;
			margin-bottom: 1rem;

			* {
				display: block;
			}

			>:first-child {
				font-size: 1.5rem;
				font-weight: 600;
				margin-bottom: 0px;
				color: var(--text-primary);
			}

			>:nth-child(2) {
				font-size: 1.2rem;
				font-weight: lighter;
				font-family: sans-serif;
				margin-bottom: 0.9rem;
			}

			.status {
				margin-bottom: 2rem;
				color: var(--text-primary);
			}

			>:last-child {
				margin-top: 24px;
				display: flex;
				width: 100%;
				justify-content: space-around;
				a {
					&:hover {
						text-decoration: none
					}
				}
			}
		}

		.about {
			margin-bottom: 1rem;

			>* {
				display: block;				
			}
			.company {
				font-weight: 600;
				color: var(--text-primary);
				margin-bottom: 8px
			}

			.links {
				margin-bottom: 10px;
				a {
					color: var(--text-secondary);
				}
			}
		}

		.highlights {
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
			>* {
				display: block
			}
			:first-child {
				font-weight: 600;
				color: var(--text-primary);
				margin-bottom: 1rem
			};
			div {
				margin-top: 1rem;
				display: inline-block
			};
		}
	}
}
</style>