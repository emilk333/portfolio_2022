import { createStore } from 'vuex'

export default createStore({

	state: {
		tools_data : undefined ?? [],
	},

	mutations: {
	
		SET_TOOLS_DATA_IN_STORE(state, payload) {
			state.tools_data = payload
		}
	},

	actions: {
		activateTooltip(_context, identifierKey:string) {
			if (_context.state.tools_data !== undefined) {
				_context.state.tools_data.filter((tool:any) => {	
					tool.tooltipShown = false
					if (tool.name === identifierKey) {
						tool.tooltipShown = true
					}
				})
			}
		},

		setToolsDataInStore(_context, payload) {
			_context.commit('SET_TOOLS_DATA_IN_STORE', payload)
		}
	},
})
