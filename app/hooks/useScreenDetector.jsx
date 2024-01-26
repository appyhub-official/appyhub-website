import { useEffect, useState } from "react";

const useScreenDetector = () => {
    const [width, setWidth] = useState(window.innerWidth),
        [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);

        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

      const isMobile = width <= 768,
        isTablet = width <= 1024,
        isDesktop = width > 1024,
        isHorizontal = (width / height) > 1;

    return { isMobile, isTablet, isDesktop, isHorizontal };
};

export default useScreenDetector;