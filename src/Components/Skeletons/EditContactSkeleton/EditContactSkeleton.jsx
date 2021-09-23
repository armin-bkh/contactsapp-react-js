import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const EditContactSkeleton = () => {
  return (
    <SkeletonTheme color="#4B5563" highlightColor="#9CA3AF">
      <div className={`flex flex-col h-screen px-3`}>
        <div>
          <div className={`w-full mb-3`}>
            <Skeleton width={`100%`} height={30} />
          </div>
          <div className={`w-full mb-3`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`w-full mt-auto`}>
          <Skeleton width={`100%`} height={40} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default EditContactSkeleton;
