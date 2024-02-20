import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

import { Provider } from "react-redux";
import store from "./redux/store";

const initialState = [
    {
        id:1,
        count: 0,
    },
    {
        id:2,
        count:0,
    }
]

export default function App() {
    const[state, setState] = useState(initialState);
    const [count, setCount] = useState(0);

    const totalCount = () =>{
        return state.reduce((total, counter)=>total+counter.count, 0);
    }

    const increment = (id) =>{
        const updatedCounter = state.map(c => {
            if(c.id === id){
                return {
                    ...c, 
                    count: c.count+1,
                }
            }

            return {...c};
        })

        setState(updatedCounter);
    }

    const decrement = (id) =>{
        const decrementCounter = state.map(c => {
            if(c.id === id && c.count > 0){
                return{
                    ...c,
                    count: c.count - 1,
                }
            }

            return {...c}
        })

        setState(decrementCounter);
    }
    return (
        <Provider store={store}>
            <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application Using Redux
                </h1>

                <div className="max-w-md mx-auto mt-10 space-y-5">
                    <Counter />
                </div>
            </div>
        </Provider>
        
    );
}
