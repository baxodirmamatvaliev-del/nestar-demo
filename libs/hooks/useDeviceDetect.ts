import { useEffect, useState } from "react";

const useDeviceDetect = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const detectDevice = () => {
      setDevice(window.innerWidth <= 768 ? "mobile" : "desktop");
    };

    detectDevice();
    window.addEventListener("resize", detectDevice);

    return () => window.removeEventListener("resize", detectDevice);
  }, []);

  return device;
};

export default useDeviceDetect;
