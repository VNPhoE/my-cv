import { Mail, Phone, MapPin, Github } from "lucide-react"

interface ContactInfoProps {
  phone: string;
  email: string;
  location: string;
  github: string;
}

export function ContactInfo({ phone, email, location, github }: ContactInfoProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <span>{email}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Github className="h-4 w-4" />
        <a href={github} className="hover:underline">
          {github}
        </a>
      </div>
    </div>
  )
}