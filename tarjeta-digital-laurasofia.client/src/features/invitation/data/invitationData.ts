import type { Photo, TimelineEvent } from "../../../types/invitation"

export const photos: Photo[] = [
  { src: "/assets/placeholder1.jpg", alt: "Angelly 1" },
  { src: "/assets/placeholder2.jpg", alt: "Angelly 2" },
  { src: "/assets/placeholder3.jpg", alt: "Angelly 3" },
  { src: "/assets/placeholder4.jpg", alt: "Angelly 4" },
]

export const itineraryEvents: TimelineEvent[] = [
  { time: "6:00 PM", title: "Recepción de invitados", description: "Bienvenida en la entrada principal" },
  { time: "7:00 PM", title: "Ceremonia religiosa", description: "Agradecimiento y bendición" },
  { time: "8:00 PM", title: "Cena", description: "Servicio de banquete para todos los invitados" },
  { time: "9:00 PM", title: "Vals", description: "Baile tradicional de la quinceañera" },
  { time: "10:00 PM", title: "Fiesta", description: "Música y baile para todos los invitados" },
  { time: "12:00 AM", title: "Pastel y brindis", description: "Momento especial para compartir" },
]
