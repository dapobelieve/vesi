<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">

.modal-open {
  overflow: hidden;
}
h1,h2,h3,h4,h5,h6 {
	margin: 0;
}
.divider {
  	border-bottom: 1px solid #9a959554;
  }
body, html {
  height: 100%;
  background-color: var(--bg-color);
  color: var(--text-secondary);
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;

  a {
  	text-decoration: none;
  	color: var(--text-secondary);
  	&:hover {
  		color: var(--app-blue) !important;
  		text-decoration: underline;
  	};
  }

  

  .label {
  	display: inline-flex !important;
  	align-items: center;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border-radius: 2em;
    background-color: initial!important;
    border: 1px solid transparent;
    border-color: lightgrey;
  }
  .circle {
  	height: 12px;
  	width: 12px;
  	border-radius: 50%;
  	background-color: navy;
  	margin: 0;
  }
}	
#app {
	height: 100%
}
</style>