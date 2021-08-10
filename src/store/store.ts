import { createStore } from 'vuex'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import deepClone from '../foundation/js/deepClone'

export default createStore({

	state: {
		tools_data : undefined ?? [],
		tooltip_is_active : false,
		project_data : undefined,
		project_type_data : undefined,
		project_year_data : undefined,
		project_association_data : undefined,
		data_to_filter_on : []
	},

	mutations: {
	
		SET_TOOLS_DATA_IN_STORE(state, payload) {
			state.tools_data = payload
		},

		SET_TOOLTIP_ACTIVE_STATE(state, payload) {
			state.tooltip_is_active = payload
		},

		SET_PROJECT_DATA_IN_STORE(state, payload) {
			state.project_data = payload
		},

		SET_PROJECT_TYPES(state, payload) {
			state.project_type_data = payload
		},

		SET_PROJECT_YEAR(state, payload) {
			state.project_year_data = payload
		},

		SET_PROJECT_ASSOCIATION(state, payload) {
			state.project_association_data = payload
		},

		SET_FILTER_ON_THIS_REQUEST(state, payload) {
			state.data_to_filter_on = [...state.data_to_filter_on, ...payload] as any
		},
	},

	actions: {
		activateTooltip(_context, identifierKey:string) {
			_context.commit("SET_TOOLTIP_ACTIVE_STATE", true)

			if (_context.state.tools_data !== undefined) {
				_context.state.tools_data.filter((tool:any) => {	
					tool.tooltipShown = false
					if (tool.name === identifierKey) {
						tool.tooltipShown = true
					}
				})
			}
		},

		deactiveTooltip(_context) {
			_context.commit("SET_TOOLTIP_ACTIVE_STATE", false)

			if (_context.state.tools_data !== undefined) {
				_context.state.tools_data.forEach((tool:any) => tool.tooltipShown = false )
			}
		},

		setToolsDataInStore(_context, payload) {
			_context.commit('SET_TOOLS_DATA_IN_STORE', payload)
		},

		setProjectDataInStore(_context, payload) {
			_context.commit('SET_PROJECT_DATA_IN_STORE', payload)
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'type', mutation : 'SET_PROJECT_TYPES'})
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'year', mutation : 'SET_PROJECT_YEAR'})
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'association', mutation : 'SET_PROJECT_ASSOCIATION'})
		},

		createDropdownFiltersByType(_context, { payload, category, mutation }) {
			const tempProjectArray = deepClone(payload.value)
			const uniqueProjectTypes = [...new Set(tempProjectArray.map((item:any) => item[category]))]
			const projectTypesWithSelected = uniqueProjectTypes.map(item => {
				return {
					value : item,
					category : category
				}
			})
			_context.commit(mutation, projectTypesWithSelected)
		},

		filterDropdownValue(_context, filteredValue) {
			
			// console.log(filteredValue, category)
			// const filteredProjectData = _context.state.project_data ?? []
			// const x = filteredValue.flatMap((value:any) => {
			// 	return filteredProjectData.filter((project:any) => project[category] === value)
			// })
			// console.log(x)
			// const filterOnThisRequest = filteredValue.map((item:any) => {
			// 	return {
			// 		value : item.value,
			// 		category : item.category
			// 	}
			// }) 

			let currentDataToFilterList = [] as any
			
			currentDataToFilterList = [..._context.state.data_to_filter_on, ...filteredValue]

			currentDataToFilterList.filter((v:any,i:number,a:any)=>a.findIndex((t:any)=>(t.category === v.category && t.value===v.value))===i)
			

			_context.commit('SET_FILTER_ON_THIS_REQUEST', currentDataToFilterList) 
			//console.log(_context.state.data_to_filter_on)
		}
	},
})
