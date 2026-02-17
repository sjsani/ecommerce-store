import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType | null; // Can be null if fetch failed
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="h-full w-full flex justify-center items-center text-center text-gray-500">
        No billboards found
      </div>
    );
  }

  return (
    <div className="h-full w-full flex justify-center items-center text-center gap-y-8 pt-10">
      <img 
        src={data.imageUrl} 
        alt={data.label} 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default Billboard;
