import Link from "next/link";import {notFound} from "next/navigation";import {SERVICES,ICONS,SERVICE_IMG} from "@/lib/data";import ServiceCard from "@/components/ServiceCard";
export const dynamicParams=false;
export function generateStaticParams(){return SERVICES.map(s=>({slug:s.slug}))}
export function generateMetadata({params}){const s=SERVICES.find(x=>x.slug===params.slug);return s?{title:`${s.title} | GrowthPilot Technologies`,description:s.summary}:{}}
export default function Service({params}){const s=SERVICES.find(x=>x.slug===params.slug);if(!s)notFound();const k=SERVICE_IMG[s.slug];
return(<><section><div className="w g g3" style={{alignItems:"center"}}><div><Link className="gold" href="/services" style={{fontSize:14}}>← All services</Link><h1>{ICONS[s.slug]} {s.title}</h1><p className="mut" style={{fontSize:18}}>{s.summary}</p><ul className="tick">{s.points.map(p=><li key={p}>{p}</li>)}</ul><p style={{display:"flex",gap:12,flexWrap:"wrap"}}><Link className="btn" href="/contact">Request a Quote</Link><Link className="btn ol" href="/pricing">View Pricing</Link></p></div>
{k?<img className="im" src={`/images/${k}.webp`} alt={s.title} style={{aspectRatio:"4/3"}}/>:<div className="pfl" style={{aspectRatio:"4/3",fontSize:88}}>{ICONS[s.slug]}</div>}</div></section>
<section className="soft"><div className="w"><h2 className="c">Related services</h2><br/><div className="g g2">{SERVICES.filter(x=>x.slug!==s.slug).slice(0,4).map(x=><ServiceCard key={x.slug} s={x}/>)}</div></div></section></>)}
