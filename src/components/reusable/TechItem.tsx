import { TechItemType } from "@/types";


export function TechItem({ icon: Icon, text }: TechItemType) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/30 sm:px-6 sm:py-5 px-4 py-3 text-blue-900 backdrop-blur-sm transition-all hover:bg-white/40 hover:shadow-lg mx-9">
      <Icon size={22} />
      <span className="sm:text-base text-sm font-medium">{text}</span>
    </div>
  );
}