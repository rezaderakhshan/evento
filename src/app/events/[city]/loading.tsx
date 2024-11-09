import SkeletonCard from "@/components/skeleton-card";

const Loading = () => {
  return (
    <div className="m-auto flex max-w-[1100px] flex-wrap justify-center gap-20 px-20 py-24">
      {Array.from({ length: 6 }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
