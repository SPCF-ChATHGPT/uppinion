import { HashLoader } from "react-spinners";
import colors from "../utils/colors"

export default function Loading() {
  const loaderProps = {
    color: colors.primary,
    loading: true,
  };

  const cssOverride = {
    width: "20%",
    height: "20%",
  };
  return (
    <>
      <div className="w-screen h-full bg-white px-4 mx-auto fixed top-0 left-0 z-50 flex justify-center items-center">
        <HashLoader
          color={loaderProps.color}
          loading={loaderProps.loading}
          cssOverride={cssOverride}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}
