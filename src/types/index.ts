import type { ForwardRefExoticComponent } from "react";
import type { LucideProps } from "lucide-react";

export interface TechItemType {
  icon: ForwardRefExoticComponent<LucideProps>; // Matches Lucide icons
  text: string;
}
