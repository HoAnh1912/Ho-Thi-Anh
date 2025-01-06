import { CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";

const FallbackLoader: FC<{ className?: string }> = ({ className = "" }) => {
  const Loc = useLocation();
  const [isLoading, setIsLoading] = useState<number>(0);

  useEffect(() => {
    setIsLoading(0);
    return () => {
      setIsLoading(100);
    };
  }, [Loc.pathname]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading < 95) {
        setIsLoading(isLoading + 1);
      }
    }, 30);
  }, [isLoading]);

  return (
    <div className="flex_center w-full h-[calc(100%-20%)]">
      <CircularProgress
        key={Loc.pathname}
        sx={{ color: "#C99C33", zIndex: 9999 }}
        className={`h-8 w-8 ${className} ${isLoading === -1 && "hidden"}`}
      />
    </div>
  );
};

export default FallbackLoader;
