import {NextResponse} from "next/server";
export async function POST(req){
const {name,email,phone,company,details}=await req.json();
if(!name||!email||!details)return NextResponse.json({error:"Missing fields"},{status:400});
const key=process.env.RESEND_API_KEY;
if(!key){console.log("Lead (no RESEND_API_KEY set):",{name,email,phone,company,details});return NextResponse.json({ok:true})}
const esc=s=>String(s||"").replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
body:JSON.stringify({from:process.env.CONTACT_FROM||"GrowthPilot <onboarding@resend.dev>",to:[process.env.CONTACT_TO||"growthpilottechnologies@gmail.com"],reply_to:email,subject:`New lead: ${name}`,
html:`<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone)}<br><b>Company:</b> ${esc(company)}</p><p>${esc(details)}</p>`})});
return res.ok?NextResponse.json({ok:true}):NextResponse.json({error:"Send failed"},{status:502})}
