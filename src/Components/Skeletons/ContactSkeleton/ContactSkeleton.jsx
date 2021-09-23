import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ContactSkeleton = () => {
  return (
    <SkeletonTheme color="#4B5563" highlightColor="#9CA3AF">
      <div className={`flex flex-col contact mx-auto px-3 py-1`}>
      <div className={`py-1`}>
          <Skeleton width={30} height={30} />
        </div>
        <div className={`mb-3 mx-auto profile-size`}>
          <Skeleton style={{ borderRadius: "50%" }} width={`100%`} height={`100%`} />
        </div>
        <div className={`flex items-center justify-between`}>
          <div className={`flex flex-col`}>
            <Skeleton width={100} height={25} />
            <Skeleton width={150} height={20} />
          </div>
          <div>
            <Skeleton width={70} height={40} />
          </div>
        </div>
        <div className={`mt-auto w-full`}>
          <Skeleton width={`100%`} height={40} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ContactSkeleton;
