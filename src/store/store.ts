import { createStore } from 'vuex'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import deepClone from '../foundation/js/deepClone.ts'

interface IIndexType {
    [index: string]: string;
}

export default createStore({

	state: {
		tools_data : undefined ?? [],
		tooltip_is_active : false,
		project_data : [],
		original_project_data : [],
		project_type_data : undefined,
		project_year_data : undefined,
		project_association_data : undefined,

		filtered_project_type : [],
		filtered_project_year : [],
		filtered_project_association : [],
		remove_tag_wrapper : undefined,
		project_has_been_selected : false
	},

	mutations: {
	
		SET_TOOLS_DATA_IN_STORE(state, payload) {
			state.tools_data = payload
		},

		SET_TOOLTIP_ACTIVE_STATE(state, payload) {
			state.tooltip_is_active = payload
		},

		SET_ORIGINAL_PROJECT_DATA_IN_STORE(state, payload) {
			state.original_project_data = payload
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

		SET_FILTERED_DATA(state, payload) {
			if (payload.category === "type") {
				state.filtered_project_type = payload.value
			} else if (payload.category === "year") {
				state.filtered_project_year = payload.value
			} else {
				state.filtered_project_association = payload.value
			}
		},

		SET_TAG_TO_REMOVE(state, payload) {
			state.remove_tag_wrapper = payload
		},

		SET_PROJECT_SELECTED(state, payload) {
			state.project_has_been_selected = payload

			if (payload) {
				document.querySelector('body')?.classList.add('no-scroll')
			} else {
				document.querySelector('body')?.classList.remove('no-scroll')
			}
		},
	},

	getters: {
		removeFilterChoiceByTag: state => {
			return state.remove_tag_wrapper
		},
		projectHasBeenSelected: state => {
			return state.project_has_been_selected
		}
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
			_context.commit('SET_ORIGINAL_PROJECT_DATA_IN_STORE', payload)
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'type', mutation : 'SET_PROJECT_TYPES'})
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'year', mutation : 'SET_PROJECT_YEAR'})
			_context.dispatch('createDropdownFiltersByType', {payload, category : 'association', mutation : 'SET_PROJECT_ASSOCIATION'})
		},

		createDropdownFiltersByType(_context, { payload, category, mutation }) {
			const tempProjectArray = deepClone(payload)
			const uniqueProjectTypes = [...new Set(tempProjectArray.map((item:any) => item[category]))]
			
			const projectTypesWithSelected = uniqueProjectTypes.map(item => {
				return {
					value : item,
					checked : true,
					category : category
				}
			})
			_context.commit(mutation, projectTypesWithSelected)
		},

		filterDropdownValue(_context, filteredValue) {	
			_context.commit('SET_FILTERED_DATA', filteredValue) 
			
			const projectData = deepClone(_context.state.original_project_data ?? [])
			const mergedFilterData = deepClone([..._context.state.filtered_project_type, 
				..._context.state.filtered_project_year, 
				..._context.state.filtered_project_association].map((item:Record<string, unknown>) => item.value))

			const filteredProjectData = projectData.filter((project:Record<string, unknown>) => {
				return (mergedFilterData.includes(project.type)||mergedFilterData.includes(project.year)||mergedFilterData.includes(project.association))
			})

			if (!filteredProjectData.length) {
				_context.commit('SET_PROJECT_DATA_IN_STORE', projectData)
			} else {
				_context.commit('SET_PROJECT_DATA_IN_STORE', filteredProjectData)
			}
		},

		toggleProjectDetailState(_context, projectId) {
			const filteredArray = _context.state.project_data

			filteredArray.forEach((project:Record<string, unknown>) => {
				if (projectId) {
					project.id === projectId ? project.selected = true : project.selected = false
				} else {
					project.selected = false
				}
			})	
			_context.commit('SET_PROJECT_DATA_IN_STORE', filteredArray)
		}
	},
})
