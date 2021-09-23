import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ConatctItemSkeleton = () => {
  return (
    <SkeletonTheme color="#4B5563" highlightColor="#9CA3AF">
      <div className={`flex items-center border-gray-300`}>
        <div className={`rounded-full mr-3`}>
          <Skeleton style={{borderRadius: `50%`}} width={40} height={40} />
        </div>
        <div className={`flex flex-col justify-center`}>
          <Skeleton width={100} height={20} />
          <Skeleton width={150} height={15} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ConatctItemSkeleton;
