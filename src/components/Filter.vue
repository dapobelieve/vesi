<template>
	<div class="filter" >
		<input :value="query" @input="searchString($event.target.value)" class="search" type="text" placeholder="Find a repository">
		<AppButton style="margin-right: 1rem" shouldDrop>
			Type
		</AppButton>
		<AppButton @lang="$emit('lang-select', $event)" :items="languages" style="margin-right: 1rem" shouldDrop>
			Languages
		</AppButton>
		<AppButton>
			New
		</AppButton>
	</div>
</template>
<script>
import AppButton from "@/components/Button"
export default {
	model: {
		prop: 'query',
		event: 'input-search'
	},
	props: {
		query: {
			type: String
		},
		languages: {
			type: Array,
			required: true
		}
	},
	components: {
		AppButton
	},
	methods: {
		searchString(msg) {
			this.$emit('input-search', msg)
		}
	}
}	
</script>
<style lang="scss">
@media (min-width: 768px) {
.filter {
	margin-bottom: 1.6rem;
	margin-top: 1.6rem;
	display: flex;
	align-items: center;


	.search {
		padding: 5px 12px;
		border-radius: 6px;
		box-shadow: none;
		border: 0;
		height: 23px;
		border: 1px solid #1b1f2326;
		flex: 1;
		color: var(--text-primary);
		border-color: var(--app-blue);;
		background-color: var(--bg-color);
		margin-right: 10px;
		&:focus {
			border-color: var(--app-blue);
			box-shadow: 0 0 0 3px rgba(3,102,214,0.3);
			outline: none;
		}
	}
}	
}
</style>