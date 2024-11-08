import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer } from "react";
export const CarrinhoContext = createContext({
    state: [], // Estado inicial
    dispatch: () => undefined, // Função de placeholder para dispatch
});
export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                console.log('add');
                return [...state, action.payload];
            case 'REMOVE': {
                const idToRemove = action.payload.id;
                // Encontrar o índice do primeiro item com o ID especificado
                const index = state.findIndex(item => item.id === idToRemove);
                if (index !== -1) {
                    console.log('remove2', index, state[index]);
                    // Criar um novo array sem o item no índice encontrado
                    return [...state.slice(0, index), ...state.slice(index + 1)];
                }
                else {
                    console.log('remove3');
                    return state;
                }
            }
            default:
                console.log('nada');
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };
    return (_jsx(CarrinhoContext.Provider, { value: info, children: props.children }));
};
