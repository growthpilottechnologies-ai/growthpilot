import {SITE} from "@/lib/data";
export default function Footer(){return(<><footer><div className="w"><div className="g g2"><div><img src="/logo.png" alt="GrowthPilot" style={{height:60,borderRadius:8,background:"#fff"}}/><p>Web, software and growth solutions for ambitious businesses.</p></div>
<div><b style={{color:"#fff"}}>Contact</b><p>📞 <a href={`tel:${SITE.phone.replace(/\s/g,"")}`}>{SITE.phone}</a><br/>✉️ <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br/>Skype: {SITE.skype}</p></div>
<div><b style={{color:"#fff"}}>Follow us</b><p className="soc">{SITE.socials.map(([n,u])=><a key={n} href={u} target="_blank" rel="noopener noreferrer">{n}</a>)}</p></div></div>
<p className="c" style={{marginTop:24,color:"#8793b8"}}>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></div></footer>
<div className="fab"><a href={`tel:${SITE.phone.replace(/\s/g,"")}`} style={{background:"#16a34a"}} aria-label="Call">📞</a><a href="https://wa.me/918273981653" target="_blank" rel="noopener noreferrer" style={{background:"#25d366"}} aria-label="WhatsApp">💬</a></div></>)}
