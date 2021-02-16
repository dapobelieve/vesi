import Vue from "vue"
import Router from "vue-router"
import Profile from "@/views/Profile"

Vue.use(Router)

const routes = [
	{
		path: '/',
		component: Profile,
		name: 'profile',
		// children: [
		// 	{
		// 		path: 'task/:id',
		// 		name: 'task',
		// 		component: Task
		// 	}
		// ]
	}
]




const router = new Router({
	routes
})

export default router;