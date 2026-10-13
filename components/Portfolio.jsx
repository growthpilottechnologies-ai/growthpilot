"use client";import {useState,useEffect} from "react";import {PF,CATS,wurl} from "@/lib/portfolio";
export default function Portfolio(){const [cat,setCat]=useState("All");const [open,setOpen]=useState(null);
useEffect(()=>{const k=e=>{if(e.key==="Escape")setOpen(null)};addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[]);
useEffect(()=>{document.body.style.overflow=open===null?"":"hidden"},[open]);
const p=open===null?null:PF[open];
return(<><div className="tabs">{CATS.map(c=><button key={c} className={c===cat?"on":""} onClick={()=>setCat(c)}>{c}</button>)}</div>
<div className="g g2">{PF.map((x,i)=>(cat==="All"||x[2]===cat)&&<div key={x[0]} className="card pfc" role="button" tabIndex={0} onClick={()=>setOpen(i)} onKeyDown={e=>e.key==="Enter"&&setOpen(i)}><div className="thumb"><img src={`/portfolio/${x[0]}-0.webp`} alt={`${x[1]} website`} loading="lazy"/><span className="ov">View full page ↗</span></div><div style={{padding:"14px 6px 4px"}}><span className="tag">{x[2]}</span><h3 style={{margin:"8px 0 2px",fontSize:18}}>{x[1]}</h3><div className="mut" style={{fontSize:13}}>{x[3]}</div></div></div>)}</div>
{p&&<div id="mod" className="open" onClick={e=>e.target.id==="mod"&&setOpen(null)}><div className="mbox"><div className="mbar"><span className="dots"><i/><i/><i/></span><b>{p[1]} · {p[3]}</b><span className="hint">Scroll to see the full page ↓</span><a className="btn" style={{padding:"7px 14px",fontSize:13}} href={wurl(p[3])} target="_blank" rel="noopener noreferrer">Visit live site ↗</a><button onClick={()=>setOpen(null)} aria-label="Close">✕</button></div>
<div className="mbody">{Array.from({length:p[4]},(_,n)=><img key={n} src={`/portfolio/${p[0]}-${n}.webp`} alt={`${p[1]} full page`} loading="lazy"/>)}</div></div></div>}</>)}
