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
		project_association_data : undefined
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

		createDropdownFiltersByType(_context, {payload, category, mutation}) {
			const tempProjectArray = deepClone(payload.value)
			const uniqueProjectTypes = [...new Set(tempProjectArray.map((item:any) => item[category]))]
			_context.commit(mutation, uniqueProjectTypes)
		}
	},
})
