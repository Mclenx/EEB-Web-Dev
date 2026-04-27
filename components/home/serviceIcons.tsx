import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  Gauge,
  Languages,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

import type { ServiceId } from "@/components/home/ServicesSection";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  webDesign: MonitorSmartphone,
  bilingual: Languages,
  seoPerformance: Gauge,
  automation: Workflow,
  visualDirection: Aperture,
};