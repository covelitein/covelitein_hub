import { TechItemType } from "@/types";


export function TechItem({ icon: Icon, text }: TechItemType) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/30 px-6 py-5 text-blue-900 backdrop-blur-sm transition-all hover:bg-white/40 hover:shadow-lg mx-9">
      <Icon size={24} />
      <span className="text-base font-medium">{text}</span>
    </div>
  );
}