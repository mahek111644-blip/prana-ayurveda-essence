import { Shield, CheckCircle, Award, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CertificationBadgeProps {
  className?: string;
  certifications?: string[];
}

const CertificationBadge = ({ className = "", certifications = ["Organic", "Ayush"] }: CertificationBadgeProps) => {
  const certificationIcons: Record<string, { icon: any; color: string; description: string }> = {
    Organic: {
      icon: Leaf,
      color: "text-green-600",
      description: "100% Organic & Natural ingredients",
    },
    Ayush: {
      icon: Shield,
      color: "text-blue-600",
      description: "Certified by AYUSH Ministry",
    },
    GMP: {
      icon: CheckCircle,
      color: "text-purple-600",
      description: "Good Manufacturing Practice certified",
    },
    ISO: {
      icon: Award,
      color: "text-orange-600",
      description: "ISO 9001:2015 Quality certified",
    },
  };

  return (
    <TooltipProvider>
      <div className={`flex gap-1 ${className}`}>
        {certifications.map((cert) => {
          const config = certificationIcons[cert];
          if (!config) return null;

          const Icon = config.icon;

          return (
            <Tooltip key={cert}>
              <TooltipTrigger asChild>
                <Badge
                  variant="secondary"
                  className="bg-white/95 backdrop-blur-sm hover:bg-white transition-colors cursor-help"
                >
                  <Icon className={`h-4 w-4 ${config.color}`} />
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{cert} Certified</p>
                <p className="text-xs text-muted-foreground">{config.description}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default CertificationBadge;
