import { createContext, ReactNode, useReducer,Dispatch  } from "react";

export const CarrinhoContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: [], // Estado inicial
    dispatch: () => undefined, // Função de placeholder para dispatch
});
interface Props  {
    children: ReactNode;
}
// Define a estrutura de um item no estado
interface Item {
    id: number;
    title: string;
    price: number;
    image: string;
}

// Define o tipo do estado como um array de itens
type State = Item[];

// Define os tipos de ações possíveis
type Action =
    | { type: 'ADD'; payload: Item }
    | { type: 'REMOVE'; payload: { id: number } };

export const Context = (props: Props) => {
    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case 'ADD':
                console.log('add');
                return [...state, action.payload];

            case 'REMOVE':{
                const idToRemove = action.payload.id;

                // Encontrar o índice do primeiro item com o ID especificado
                const index = state.findIndex(item => item.id === idToRemove);
                if (index !== -1) {
                    console.log('remove2', index, state[index]);

                    // Criar um novo array sem o item no índice encontrado
                    return [...state.slice(0, index), ...state.slice(index + 1)];
                } else {
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
    
    return (
        <CarrinhoContext.Provider value={info}>
            {props.children}
        </CarrinhoContext.Provider>
    );
};
