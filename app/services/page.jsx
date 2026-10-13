import ServiceCard from "@/components/ServiceCard";import {SERVICES} from "@/lib/data";
export const metadata={title:"Services | GrowthPilot Technologies"};
export default function Services(){return(<section><div className="w"><div className="c"><h1>Our Services</h1><p className="mut sub">18 services under one roof.</p></div><div className="g g2">{SERVICES.map(s=><ServiceCard key={s.slug} s={s}/>)}</div></div></section>)}
