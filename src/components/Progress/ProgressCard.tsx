export type ProgressCardProps = {
  progress: number;
  message: string;
  icon: React.ReactNode;
};

export default function ProgressCard({}: ProgressCardProps) {
  return (
    <div className="w-fit h-[60%] bg-[#fff]/70 border-2 border-black-10 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-lg flex items-center justify-between pr-10 pl-5">
        
    </div>
  );
}
