import { Skeleton } from "@/components/ui/skeleton"

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col space-y-4 border-white border-opacity-50 border-dashed rounded-none text-white">
      <Skeleton className="h-[30px] min-w-[450px] max-w-[650px] rounded-sm bg-gray-800" />
      <div className="space-y-2">
        <Skeleton className="h-4 min-w-[125px] max-w-[125px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[500px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[300px] max-w-[400px] bg-gray-800 rounded-sm" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 min-w-[175px] max-w-[175px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[500px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[300px] max-w-[400px] bg-gray-800 rounded-sm" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 min-w-[125px] max-w-[125px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[650px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[450px] max-w-[500px] bg-gray-800 rounded-sm" />
        <Skeleton className="h-4 min-w-[300px] max-w-[400px] bg-gray-800 rounded-sm" />
      </div>
    </div>
  );
};

export default SkeletonLoader;