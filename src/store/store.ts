import { createStore } from 'vuex'

export default createStore({

	state: {
		tools_data : undefined ?? [],
		tooltip_is_active : false
	},

	mutations: {
	
		SET_TOOLS_DATA_IN_STORE(state, payload) {
			state.tools_data = payload
		},

		SET_TOOLTIP_ACTIVE_STATE(state, payload) {
			state.tooltip_is_active = payload
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
		}
	},
})
