import React, { useState } from 'react';

import useDarkMode from '../../hooks/useDarkMode';

export interface ToggleProps {
    toggled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ toggled }) => {
    const { isDarkMode, enableDarkMode, disableDarkMode } = useDarkMode();
    const [isOn, setIsOn] = useState(toggled || isDarkMode);

    console.log('isOn', isOn, 'toggled', toggled, 'isDarkMode', isDarkMode);

    const handleToggle = () => {
        console.log('handled', isOn, isDarkMode);
        if (isOn) disableDarkMode();
        if (!isOn) enableDarkMode();
        setIsOn(!isOn);
    };

    return (
        <label className="relative inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={isOn} onChange={handleToggle} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600" />
        </label>
    );
};

export default Toggle;
