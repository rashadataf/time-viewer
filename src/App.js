import React, {useEffect, useState} from 'react';
import MobileLayout from "./Layout/MobileLayout/MobileLayout";
import DesktopLayout from "./Layout/DesktopLayout/DesktopLayout";

// the App component represents the whole application
const App = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', function () {
            if (document.documentElement.clientWidth >= 768)
                setIsMobile(false);
            else
                setIsMobile(true);
        });
    })

    return (
        isMobile?<MobileLayout />:<DesktopLayout />
    );
}

export default App;
