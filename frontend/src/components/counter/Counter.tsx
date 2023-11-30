import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { decrement, increment } from '../../redux/reducers/counterReducer';

function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1 className="pt-2 text-xl font-extrabold">The current count is: {count}</h1>
            <p className="pb-2">using redux persist state</p>
            <div>
                <div>
                    <button
                        className="bg-yellow-200 text-black py-2 px-4 my-2 rounded-md"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment Count
                    </button>
                </div>
                <div>
                    <button
                        className="bg-yellow-200 text-black py-2 px-4 my-2 rounded-md"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement Count
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter;
