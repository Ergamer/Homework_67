const initialState = {
    digits: []
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SHOW' :
                if(state.digits.length !== 4) {
                    const newDigits = [...state.digits];
                    newDigits.push(action.value);
                    return {digits: newDigits};
                } break;
            case 'DELETE':
                const someDigits = [...state.digits];
                someDigits.pop();
                return {digits: someDigits}
            case 'COMPARE':
                if (state.digits.join('') === '0545') {
                    alert ('Password is correct')
                } else {
                    alert('Password is wrong')
                }
                return {digits: []}
        }

        return state;
};



export default reducer;