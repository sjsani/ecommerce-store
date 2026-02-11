import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType[] | null; // Can be null if fetch failed
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-full w-full flex justify-center items-center text-center text-gray-500">
        No billboards found
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
      {data.map((billboard) => (
        <div key={billboard.id} className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {billboard.label || "Untitled Billboard"}
        </div>
      ))}
    </div>
  );
};

export default Billboard;
