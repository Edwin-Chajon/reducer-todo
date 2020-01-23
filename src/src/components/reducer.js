export const initialState=[{
    item: 'Learn about reducers',
    completed: false,
    id: Math.random()
  }];

export const reducer = (state, action) => {
    console.log (state, action);
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.banana]
        case 'COMPLETED_TODO':
            return state.map((item) => {
                return item.id === action.banana ? {...item, completed:!item.completed} : item
            })
        case 'CLEAR_COMPLETED_TODO':
            return state.filter((item) => !item.completed)

        default: return state
    }
}




/*
const currentState = {
    count: 0
}

const inc = { type: 'INCREMENT'};
const dec = { type: 'DECREMENT'};

function reducer (state, action){
    if (action.type === 'INCREMENT') {
         return {
             ...state,
            count: state.count +1
         }
        } else if (action.type === 'DECREMENT'){
             return {
                 ...state,
                 count: state.count -1
             }
    }
}

const currentState = reducer(currentState, inc) --> 1
const currentState = reducer (currentState, dec) --> -1

or

with dispatch


const dispatch = (action) => {
    currentState = reducer(currentState, action)
}
dispatch(inc);
dispatch (dec);
*/