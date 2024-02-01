import { Html, useProgress } from '@react-three/drei';

import './Loader.scss';

export default function Loader() {
    const { progress } = useProgress();

    if (progress === 100) return <></>;

    return (
        <Html fullscreen className="relative flex justify-center align-center">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </Html>
    )
}
