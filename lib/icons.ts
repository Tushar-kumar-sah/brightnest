import {
    Shield,
    Cable,
    Wifi,
    Phone,
    Video,
    Printer,
    Lightbulb,
    Zap,
    Clock,
    Award,
    TrendingUp,
    Search,
    Pencil,
    CheckCircle,
    // Social & Contact
    MapPin,
    Mail,
    Linkedin,
    Facebook,
    // About Page
    Users,
    Target,
    Globe,
    ArrowRight,
    LucideIcon
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
    Shield,
    Cable,
    Wifi,
    Phone,
    Video,
    Printer,
    Lightbulb,
    Zap,
    Clock,
    Award,
    TrendingUp,
    Search,
    Pencil,
    CheckCircle,
    MapPin,
    Mail,
    Linkedin,
    Facebook,
    Users,
    Target,
    Globe,
    ArrowRight,
    // Lowercase aliases for process steps
    search: Search,
    pencil: Pencil,
    zap: Zap,
    shield: Shield,
}

export const getIcon = (name: string): LucideIcon | null => {
    return iconMap[name] || null
}
