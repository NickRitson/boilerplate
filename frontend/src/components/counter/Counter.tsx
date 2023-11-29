import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { decrement, increment } from '../../redux/reducers/counterReducer';

function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>The current count is: {count}</h1>
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                </div>
                <div>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter;
