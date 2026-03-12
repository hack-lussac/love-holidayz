import { ShieldCheck, Smile, Hotel, Users, Headphones, Ticket } from "lucide-react"

const data = [
  {
    icon: <ShieldCheck />,
    title: "100% Secure",
    desc: "Money Safe Guarantee"
  },
  {
    icon: <Smile />,
    title: "1M+ Happy Clients",
    desc: "Trusted Worldwide"
  },
  {
    icon: <Hotel />,
    title: "650+ Hotels",
    desc: "Premium Stays & Transport"
  },
  {
    icon: <Users />,
    title: "100+ Experts",
    desc: "Local Travel Specialists"
  },
  {
    icon: <Headphones />,
    title: "24/7 Support",
    desc: "Always Available"
  },
  {
    icon: <Ticket />,
    title: "Unlimited Deals",
    desc: "Best Travel Prices"
  }
]

export default function WhyChoose() {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Flyways Trip</h2>

      <div className="why-grid">
        {data.map((item, i) => (
          <div className="why-card" key={i}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}