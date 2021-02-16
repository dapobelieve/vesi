<template>
	<div class="btn-container">
		<button :style="{width: btnWidth}" @click="computeAction($event)"><slot /> <span v-if="shouldDrop && selection">: {{selection}}</span></button>
		<div v-if="shouldDrop && open" class="btn-menu">
			<div>
				<span @click="$emit('lang', item), selection = item, open = false" v-if="item" v-for="(item, itemIndex) in items" :key="itemIndex">{{item}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		shouldDrop: {
			type: Boolean,
			default: false,
		},
		block: {
			type: Boolean,
			required: false
		},
		items: {
			type: Array,
			required: false,
			default: () => {
				return ['public']
			}
		}
	},
	data () {
		return {
			selection: "All",
			open: false,
		}
	},
	computed: {
		btnWidth() {
			return this.block ? '100%' : 'auto'
		}
	},
	methods: {
		computeAction(e) {
			if(this.shouldDrop) {
				this.open = !this.open
				return
			}else {
				this.$emit('click', e)
			}
		}
	}
}	
</script>
<style lang="scss">
.btn-container {
	position: relative;
}

.btn-menu {
	z-index: 3;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: block;
	position: absolute;
	border: 1px solid #1b1f2326;
	border-radius: 6px;
	top: 38px;
	right: 0;

	 >div {
	 	width: 150px;
	 	background-color: var(--bg-color);
	 	

	 	span {
	 		display: block;
	 		padding-bottom: 7px;
	 		padding-top: 7px;
	 		border-bottom: 1px solid #1b1f2326;
	 		cursor: pointer;
	 		padding-left: 20px;
	 		font-weight: 400;
	 		font-size: 12px;

	 		&:hover {
	 			background-color: #c4cdd626;
	 		}
	 	}
	 }
}
button {
	display: flex;
	align-items: center;
	background-color: var(--btn-bg-color);
	border: 0;
	padding: 6px 8px;
	border: 1px solid #1b1f2326;
	border-radius: 6px;
	cursor: pointer;
	color: var(--text-primary);
	&:focus {
		outline: none;
	}
}	
</style>