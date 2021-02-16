<template>
	<div style="position: relative">
		<AppNav	:repoCount="repos.length" />
		<div class="container">
			<AppDetails @edit="modal = true" />
			<div class="content">
				<div>
					<AppFilter
					v-model="search"
					v-if="languages && languages.length"
					@lang-select="langSelect = $event"
					:languages="languages" />
					<div class="divider"></div>
				</div>
				<div v-if="filteredData && !filteredData.length" style="display: flex; align-items: center; justify-content: center; margin-top: 3rem">
					<h3 style="color: black">dapobelieve doesn’t have any repositories that match.</h3>
				</div>
				<div v-else v-for="repo in filteredData" :key="repo.id">
					<AppCard :repo="repo" />
					<div class="divider"></div>
				</div>
			</div>
		</div>
		<div v-if="modal" @click.self="modal = false" class="modal">
			<div class="content">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus quasi illo debitis et esse magni amet ipsam, quis dolor pariatur, maiores tempore velit natus beatae quas consequuntur voluptas rem.
			</div>
		</div>
	</div>	
</template>
<script>
import Api from "@/Api"	
import AppNav from "@/components/Nav";
import AppFilter from "@/components/Filter";
import AppDetails from "@/components/ProfileDetails";
import AppCard from "@/components/RepoCard"
import AppButton from "@/components/Button"

export default {
	data () {
		return {
			modal: false,
			search: "",
			langSelect: "",
			repos: null
		}
	},
	watch: {
		modal(newVal) {
			let body = document.body
      if (newVal == true) {
        body.classList.add('modal-open');
      }else {
        body.classList.remove('modal-open');
      }
    }
	},
	components: {
		AppNav,
		AppDetails,
		AppCard,
		AppFilter,
		AppButton
	},
	computed: {
		languages() {
			if(this.repos)
				return ["All", ...new Set(this.repos.map(repo => repo.language))]
		},
		filteredData() {
			if(this.repos) {
				if(this.langSelect == 'All') return this.repos
				let data

				if(this.search !== "") {
					data = this.repos.filter(row => {
		        return Object.keys(row).some(key => {
		          return (
		            String(row["name"]).toLowerCase()
		              .toLowerCase()
		              .indexOf(this.search.toLowerCase()) > -1
		          );
		        });
		      });
				}else if(this.langSelect.length > 0) {
					data = this.repos.filter(row => {
						return Object.keys(row).some(key => {
								if(row['language']) {
									return (
										String(row['language']).toLowerCase().indexOf(this.langSelect.toLowerCase()) > -1
									)
								}
						})
					})
				}else {
					data = this.repos
				}

				return data
			}
		}
	},
	async created() {
		let res = await Api.get(`https://api.github.com/users/dapobelieve/repos?per_page=100`)
		this.repos = res.data
	}
}
</script>
<style lang="scss" >
.container {
	max-width: 1280px;
	margin-right: auto;
	margin-left: auto;
	flex-direction: column;
	flex-shrink: 0;
}	

.modal {
	position: absolute;
	background: rgba(0,0,0,.5);
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 10;

	.content {
		max-width: 400px;
		background-color: var(--bg-color);
		position: relative;
		margin-left: auto;
		margin-right: auto;
		border-radius: 6px;
		padding: 10px 10px;
		display: flex;
		margin-top: 8rem;
		border: 1px solid lightgrey;
	}
}

@media (min-width: 768px) {
	.container {
		display: flex;
		flex-shrink: 0;
		flex-direction: row;
		align-items: flex-start;
	}
	.content {
		width: 75%;
		margin-left: 12px;
		margin-right: 12px;
	}
}
</style>