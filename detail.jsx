// ---------- content generator (plausible per-type detail content, PT + EN) ----------
const DETAIL = {
  pt:{
    "Medieval": { about:(p)=>`As ruas de ${p} recuam a tempos de cavaleiros e damas. Mercadores, música, fogueiras e o aroma a especiarias transformam a vila num retrato vivo da Idade Média, com recriadores de todo o país.`,
      highlights:["Cortejo de época e entrada real","Torneio de cavaleiros a cavalo","Mercado de mesteres e artesãos","Tasquinhas e banquete medieval","Música, malabares e cuspidores de fogo"] },
    "Romana": { about:(p)=>`${p} regressa ao Império Romano. Legionários, mercadores e artesãos recriam o quotidiano da Roma antiga, entre tendas, ofícios e o estrondo dos combates na arena.`,
      highlights:["Acampamento e marcha de legionários","Combates de gladiadores na arena","Mercado e ofícios romanos","Cozinha e banquete da Roma antiga","Demonstrações de vida quotidiana"] },
    "Templária": { about:(p)=>`Em ${p}, a memória dos Cavaleiros do Templo ganha vida. Recriações da Ordem, acampamentos militares e cerimónias solenes evocam os tempos da fundação de Portugal.`,
      highlights:["Recriação da Ordem do Templo","Cortejo e cerimónia templária","Acampamento e treino militar","Justas e combate a cavalo","Mercado medieval e tabernas"] },
    "Torneio": { about:(p)=>`O torneio enche ${p} de aço e galope. Cavaleiros medem forças em provas equestres e de combate, perante a corte e o povo, num espetáculo de bravura e perícia.`,
      highlights:["Justas equestres em lista","Combate de armas e a pé","Provas de arco e besta históricos","Mostra de armaria e esgrima antiga","Cortejo e apresentação dos cavaleiros"] },
    "Mercado": { about:(p)=>`Um mercado histórico instala-se em ${p}: bancas de mesteres, produtos da terra, tabernas e a azáfama de outros tempos, com demonstrações ao vivo dos antigos ofícios.`,
      highlights:["Bancas de ofícios e mesteres","Produtos regionais e doçaria conventual","Tabernas e petiscos de época","Música e animação de rua","Demonstrações de artesanato"] },
    "Histórica": { about:(p)=>`${p} acolhe uma recriação histórica que dá vida a um capítulo do passado, com acampamentos, demonstrações e animação de época para toda a família.`,
      highlights:["Acampamento e vida de época","Demonstrações e recriações históricas","Mercado e ofícios tradicionais","Música e cortejo","Animação para toda a família"] },
    "Quinhentista": { about:(p)=>`${p} celebra o século XVI, a era dos Descobrimentos. Trajes quinhentistas, mercadores, naus e a corte renascentista enchem as ruas de cor e fausto.`,
      highlights:["Cortejo quinhentista e corte renascentista","Mercado de especiarias e Descobrimentos","Música e dança do século XVI","Ofícios e mesteres da época","Tabernas e iguarias quinhentistas"] },
  },
  en:{
    "Medieval": { about:(p)=>`The streets of ${p} travel back to an age of knights and ladies. Merchants, music, bonfires and the scent of spices turn the town into a living portrait of the Middle Ages, with reenactors from across the country.`,
      highlights:["Period parade and royal entrance","Mounted knights' tournament","Craft and trade market","Taverns and a medieval banquet","Music, jugglers and fire-breathers"] },
    "Romana": { about:(p)=>`${p} returns to the Roman Empire. Legionaries, merchants and artisans recreate daily life in ancient Rome, among tents, crafts and the roar of combat in the arena.`,
      highlights:["Legionary camp and march","Gladiator fights in the arena","Roman market and crafts","Cuisine and an ancient Roman banquet","Daily-life demonstrations"] },
    "Templária": { about:(p)=>`In ${p}, the memory of the Knights Templar comes alive. Order reenactments, military camps and solemn ceremonies evoke the dawn of Portugal.`,
      highlights:["Knights Templar reenactment","Templar parade and ceremony","Military camp and drills","Jousts and mounted combat","Medieval market and taverns"] },
    "Torneio": { about:(p)=>`The tournament fills ${p} with steel and gallop. Knights test their strength in equestrian and combat trials, before the court and the people, in a display of bravery and skill.`,
      highlights:["Equestrian jousts in the lists","Armed and on-foot combat","Historical archery and crossbow","Armoury and old-fencing display","Knights' parade and presentation"] },
    "Mercado": { about:(p)=>`A historical market settles in ${p}: craft stalls, local produce, taverns and the bustle of times gone by, with live demonstrations of the old trades.`,
      highlights:["Craft and trade stalls","Regional produce and convent sweets","Taverns and period bites","Music and street entertainment","Handicraft demonstrations"] },
    "Histórica": { about:(p)=>`${p} hosts a historical reenactment that brings a chapter of the past to life, with camps, demonstrations and period entertainment for the whole family.`,
      highlights:["Camp and period life","Historical demonstrations and reenactments","Market and traditional crafts","Music and parade","Family-friendly entertainment"] },
    "Quinhentista": { about:(p)=>`${p} celebrates the 16th century, the Age of Discovery. Renaissance costumes, merchants, caravels and the royal court fill the streets with colour and splendour.`,
      highlights:["Renaissance court and parade","Spice and Discoveries market","16th-century music and dance","Period crafts and trades","Taverns and Renaissance delicacies"] },
  },
};
const PRACT = {
  pt:{ hours:"Sex 18h – 24h · Sáb e Dom 10h – 24h", entry:"Trajados a rigor: entrada gratuita · Bilhete geral: €3", org:(t)=>`Organização: Município de ${t} · grupos de recriação convidados` },
  en:{ hours:"Fri 6pm – 12am · Sat & Sun 10am – 12am", entry:"In period costume: free · General ticket: €3", org:(t)=>`Organised by ${t} Town Council · guest reenactment groups` },
};
function detailOf(ev, lang){
  const dd = (DETAIL[lang]||DETAIL.pt);
  const d = dd[ev.type] || dd["Medieval"];
  const pr = PRACT[lang]||PRACT.pt;
  const town = ev.place.split(",")[0];
  return { about:d.about(town), highlights:d.highlights, hours:pr.hours, entry:pr.entry, org:pr.org(town) };
}

// ---------- Event detail modal ----------
function EventDetail({ev, onClose, onOpen, fav, onFav}){
  const {L, lang} = useL();
  React.useEffect(()=>{
    const onKey=(e)=>{ if(e.key==="Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev=document.body.style.overflow;
    document.body.style.overflow="hidden";
    return ()=>{ document.removeEventListener("keydown", onKey); document.body.style.overflow=prev; };
  },[onClose]);

  const info = detailOf(ev, lang);
  const sd=new Date(ev.start+"T00:00:00");
  const related = EVENTS.filter(e=>e.id!==ev.id && (e.type===ev.type || e.region===ev.region)).slice(0,3);
  const share=(net)=>{ /* prototype */ };

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,
      background:"oklch(0.18 0.02 50 / .55)",backdropFilter:"blur(6px)",
      display:"flex",alignItems:"flex-start",justifyContent:"center",
      padding:"40px 20px",overflowY:"auto",animation:"fadeIn .2s ease"}}>
      <article onClick={e=>e.stopPropagation()} style={{
        width:"min(960px,100%)",background:"var(--bg)",borderRadius:12,overflow:"hidden",
        boxShadow:"var(--shadow-lg)",border:"1px solid var(--line)",animation:"slideUp .28s cubic-bezier(.2,.7,.3,1)"}}>
        {/* hero */}
        <div style={{position:"relative",aspectRatio:"16/7",overflow:"hidden"}}>
          <EventImage src={ev.img} alt={ev.title} type={ev.type}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(30,16,10,.15) 0%,transparent 30%,rgba(30,16,10,.78) 100%)"}}/>
          <button onClick={onClose} aria-label="Fechar" style={{position:"absolute",top:16,right:16,
            width:40,height:40,borderRadius:"50%",border:"none",background:"rgba(255,250,242,.92)",
            backdropFilter:"blur(4px)",display:"grid",placeItems:"center",color:"var(--ink)",fontSize:20,lineHeight:1}}>×</button>
          <div style={{position:"absolute",top:16,left:16}}><TypeBadge type={ev.type} solid/></div>
          <div style={{position:"absolute",left:30,right:30,bottom:24,color:"#fdf6ec"}}>
            <div className="serif" style={{fontStyle:"italic",fontSize:18,opacity:.92}}>{ev.theme}</div>
            <h2 className="serif" style={{fontSize:"clamp(32px,4.4vw,52px)",fontWeight:600,lineHeight:1.02,margin:"4px 0 0"}}>{ev.title}</h2>
          </div>
        </div>

        {/* body */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:0}} className="detail-body">
          <div className="detail-pad" style={{padding:"34px 36px"}}>
            <span className="eyebrow">{L.detail.about}</span>
            <p style={{fontSize:17.5,lineHeight:1.66,color:"var(--ink-soft)",margin:"16px 0 30px"}}>{info.about}</p>

            <span className="eyebrow">{L.detail.programme}</span>
            <ul style={{listStyle:"none",padding:0,margin:"16px 0 0",display:"grid",gap:1}}>
              {info.highlights.map((h,i)=>(
                <li key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 0",
                  borderBottom:i<info.highlights.length-1?"1px solid var(--line)":"none"}}>
                  <span className="display" style={{fontSize:13,fontWeight:700,color:"var(--accent)",
                    width:26,flexShrink:0}}>{String(i+1).padStart(2,"0")}</span>
                  <span style={{fontSize:16,color:"var(--ink)"}}>{h}</span>
                </li>
              ))}
            </ul>

            <div style={{display:"flex",gap:24,marginTop:32,flexWrap:"wrap"}}>
              <div style={{flex:"1 1 200px"}}>
                <div className="lbl">{L.detail.hoursLbl}</div>
                <div className="val">{info.hours}</div>
              </div>
              <div style={{flex:"1 1 200px"}}>
                <div className="lbl">{L.detail.entryLbl}</div>
                <div className="val">{info.entry}</div>
              </div>
            </div>
            <div style={{marginTop:22}}>
              <div className="lbl">{L.detail.orgLbl}</div>
              <div className="val">{info.org}</div>
            </div>
          </div>

          {/* sidebar */}
          <aside className="detail-aside" style={{background:"var(--bg-panel)",borderLeft:"1px solid var(--line)",padding:"32px 28px"}}>
            <div style={{textAlign:"center",paddingBottom:22,borderBottom:"1px solid var(--line)"}}>
              <div className="display" style={{fontSize:46,fontWeight:700,color:"var(--accent)",lineHeight:1}}>{sd.getDate()}</div>
              <div style={{fontSize:13,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"var(--ink-soft)",marginTop:4}}>{MONTHS[lang][sd.getMonth()]} {sd.getFullYear()}</div>
              <div style={{fontSize:14,color:"var(--ink-faint)",marginTop:8}}>{fmtRange(ev,lang)}</div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:16,padding:"22px 0",borderBottom:"1px solid var(--line)"}}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                <IconPin size={18} style={{color:"var(--accent)",marginTop:2,flexShrink:0}}/>
                <div><div style={{fontWeight:700,fontSize:15}}>{ev.place}</div><div style={{fontSize:13,color:"var(--ink-faint)"}}>{regionLabel(ev.region,lang)}, {L.detail.country}</div></div>
              </div>
            </div>

            <button className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:22}}
              onClick={()=>{ onClose(); setTimeout(()=>{const m=document.getElementById("mapa"); if(m) window.scrollTo({top:m.getBoundingClientRect().top+window.scrollY-70,behavior:"smooth"});},60); }}>
              <IconPin size={16}/> {L.detail.viewMap}
            </button>
            <div style={{display:"flex",gap:10,marginTop:12}}>
              <button className="btn btn-ghost" style={{flex:1,justifyContent:"center"}} onClick={onFav}>
                <IconHeart size={16} filled={fav}/> {fav?L.detail.saved:L.detail.save}
              </button>
            </div>

            <div style={{marginTop:24}}>
              <div className="lbl" style={{marginBottom:10}}>{L.detail.shareLbl}</div>
              <div style={{display:"flex",gap:8}}>
                {L.detail.shareBtns.map(s=>(
                  <button key={s} onClick={()=>share(s)} style={{flex:1,padding:"10px 6px",fontSize:11.5,fontWeight:700,
                    letterSpacing:".03em",border:"1px solid var(--line-strong)",borderRadius:5,background:"var(--bg-card)",
                    color:"var(--ink-soft)",transition:"all .15s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--line-strong)";e.currentTarget.style.color="var(--ink-soft)";}}>{s}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* related */}
        {related.length>0 && (
          <div style={{padding:"30px 36px 40px",borderTop:"1px solid var(--line)",background:"var(--bg-card)"}}>
            <span className="eyebrow">{L.detail.related}</span>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginTop:18}} className="rel-grid">
              {related.map(r=>(
                <button key={r.id} onClick={()=>onOpen(r)} style={{textAlign:"left",border:"1px solid var(--line)",
                  borderRadius:8,overflow:"hidden",background:"var(--bg)",cursor:"pointer",transition:"all .18s",display:"flex",flexDirection:"column"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="var(--shadow-md)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                  <div style={{aspectRatio:"3/1.7",overflow:"hidden"}}><EventImage src={r.img} alt={r.title} type={r.type}/></div>
                  <div style={{padding:"12px 14px"}}>
                    <div className="serif" style={{fontSize:18,fontWeight:600,lineHeight:1.08}}>{r.title}</div>
                    <div style={{fontSize:12,color:"var(--ink-faint)",marginTop:4}}>{fmtRange(r,lang)} · {r.place.split(",")[0]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

Object.assign(window, { EventDetail, detailOf });
