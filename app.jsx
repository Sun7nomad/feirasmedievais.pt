const { useState, useEffect, useMemo } = React;

/* ============ HERO ============ */
function Hero({featured, onExplore, onRegion, onOpen}){
  const {L, lang} = useL();
  const fsd = new Date(featured.start+"T00:00:00");
  return (
    <section id="top" style={{position:"relative",paddingTop:24,paddingBottom:56}}>
      <div className="wrap">
        <div className="hero-grid" style={{display:"grid",gridTemplateColumns:"1fr 0.92fr",gap:56,alignItems:"center"}}>
          {/* left */}
          <div>
            <span className="eyebrow">{L.hero.eyebrow}</span>
            <h1 className="serif hero-h1" style={{fontSize:"clamp(46px,5.6vw,82px)",lineHeight:.98,fontWeight:600,
              letterSpacing:"-.01em",margin:"22px 0 0",color:"var(--ink)"}}>
              {L.hero.titleA}<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>{L.hero.titleB}</span>
            </h1>
            <p style={{fontSize:18,lineHeight:1.6,color:"var(--ink-soft)",maxWidth:480,margin:"26px 0 0"}}>
              {L.hero.lead}
            </p>
            <div style={{display:"flex",gap:14,marginTop:34,flexWrap:"wrap"}}>
              <button className="btn btn-primary" onClick={onExplore}>{L.hero.ctaAgenda} <IconArrow size={17}/></button>
              <button className="btn btn-ghost" onClick={onRegion}>{L.hero.ctaRegion}</button>
            </div>
            <div className="hero-stats" style={{display:"flex",gap:38,marginTop:46}}>
              {L.hero.stats.map(([n,l])=>(
                <div key={l}>
                  <div className="display" style={{fontSize:30,fontWeight:700,color:"var(--ink)",lineHeight:1}}>{n}</div>
                  <div style={{fontSize:12.5,color:"var(--ink-faint)",marginTop:6,letterSpacing:".04em"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* right — featured card */}
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",inset:"-14px -14px auto auto",width:"58%",height:"62%",
              border:"1px solid var(--line-strong)",borderRadius:8,zIndex:0}}/>
            <article onClick={onOpen} style={{position:"relative",zIndex:1,background:"var(--bg-card)",borderRadius:8,
              overflow:"hidden",boxShadow:"var(--shadow-lg)",border:"1px solid var(--line)",cursor:"pointer"}}>
              <div style={{position:"relative",aspectRatio:"4/3.1",overflow:"hidden"}}>
                <EventImage src={featured.img} alt={featured.title} type={featured.type}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 45%,rgba(35,20,12,.72))"}}/>
                <div style={{position:"absolute",top:16,left:16}}><TypeBadge type={featured.type} solid/></div>
                <div style={{position:"absolute",top:14,right:14,background:"var(--bg-card)",borderRadius:5,
                  textAlign:"center",padding:"8px 14px",boxShadow:"var(--shadow-sm)",lineHeight:1}}>
                  <div className="display" style={{fontSize:24,fontWeight:700,color:"var(--accent)"}}>{fsd.getDate()}</div>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--ink-faint)",marginTop:3}}>{MES_ABBR[lang][fsd.getMonth()]}</div>
                </div>
                <div style={{position:"absolute",left:22,right:22,bottom:18,color:"#fdf6ec"}}>
                  <div style={{fontFamily:"var(--serif)",fontSize:33,fontWeight:600,lineHeight:1.04}}>{featured.title}</div>
                  <div className="serif" style={{fontStyle:"italic",fontSize:18,opacity:.92,marginTop:4}}>{featured.theme}</div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 22px"}}>
                <div style={{display:"flex",gap:20}}>
                  <span style={{display:"flex",alignItems:"center",gap:8,fontSize:13.5,fontWeight:600,color:"var(--ink-soft)"}}><IconCal size={16}/>{fmtRange(featured,lang)}</span>
                  <span style={{display:"flex",alignItems:"center",gap:8,fontSize:13.5,fontWeight:600,color:"var(--ink-soft)"}}><IconPin size={16}/>{featured.place}</span>
                </div>
                <IconArrow size={20} style={{color:"var(--accent)"}}/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ EVENT CARD ============ */
function EventCard({ev, list, fav, onFav, onOpen}){
  const {lang} = useL();
  const sd=new Date(ev.start+"T00:00:00");
  const d=String(sd.getDate()), m=MES_ABBR[lang][sd.getMonth()];
  const range=fmtRange(ev,lang);
  if (list){
    return (
      <article className="ev-list" onClick={onOpen} style={{display:"grid",gridTemplateColumns:"180px 1fr auto",gap:22,
        alignItems:"center",background:"var(--bg-card)",border:"1px solid var(--line)",borderRadius:8,
        overflow:"hidden",boxShadow:"var(--shadow-sm)",cursor:"pointer",transition:"box-shadow .2s, transform .2s"}}
        onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-md)";e.currentTarget.style.transform="translateY(-2px)";}}
        onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--shadow-sm)";e.currentTarget.style.transform="none";}}>
        <div style={{aspectRatio:"180/120",overflow:"hidden",alignSelf:"stretch"}}><EventImage src={ev.img} alt={ev.title} type={ev.type}/></div>
        <div style={{padding:"16px 0"}}>
          <TypeBadge type={ev.type}/>
          <h3 className="serif" style={{fontSize:24,fontWeight:600,margin:"8px 0 2px",lineHeight:1.05}}>{ev.title}</h3>
          <div className="serif" style={{fontStyle:"italic",fontSize:16,color:"var(--ink-faint)"}}>{ev.theme}</div>
          <div style={{display:"flex",gap:20,marginTop:10}}>
            <span style={{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:600,color:"var(--ink-soft)"}}><IconCal size={15}/>{range}</span>
            <span style={{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:600,color:"var(--ink-soft)"}}><IconPin size={15}/>{ev.place}</span>
          </div>
        </div>
        <div style={{padding:"0 22px"}}>
          <FavBtn fav={fav} onFav={onFav}/>
        </div>
      </article>
    );
  }
  return (
    <article className="ev-card" onClick={onOpen} style={{background:"var(--bg-card)",border:"1px solid var(--line)",borderRadius:8,
      overflow:"hidden",boxShadow:"var(--shadow-sm)",transition:"box-shadow .22s, transform .22s",cursor:"pointer",
      display:"flex",flexDirection:"column"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-lg)";e.currentTarget.style.transform="translateY(-4px)";}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--shadow-sm)";e.currentTarget.style.transform="none";}}>
      <div style={{position:"relative",aspectRatio:"3/2",overflow:"hidden"}}>
        <EventImage src={ev.img} alt={ev.title} type={ev.type}/>
        <div style={{position:"absolute",top:12,left:12}}><TypeBadge type={ev.type} solid/></div>
        <div style={{position:"absolute",top:11,right:11}}><FavBtn fav={fav} onFav={onFav} floating/></div>
        <div style={{position:"absolute",left:12,bottom:12,background:"var(--bg-card)",borderRadius:5,
          textAlign:"center",padding:"7px 11px",boxShadow:"var(--shadow-sm)",lineHeight:1}}>
          <div className="display" style={{fontSize:18,fontWeight:700,color:"var(--accent)"}}>{d}</div>
          <div style={{fontSize:8.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--ink-faint)",marginTop:3}}>{m}</div>
        </div>
      </div>
      <div style={{padding:"17px 19px 20px",flex:1,display:"flex",flexDirection:"column"}}>
        <h3 className="serif" style={{fontSize:23,fontWeight:600,lineHeight:1.05,margin:0}}>{ev.title}</h3>
        <div className="serif" style={{fontStyle:"italic",fontSize:16,color:"var(--ink-faint)",marginTop:3}}>{ev.theme}</div>
        <div style={{marginTop:"auto",paddingTop:15,borderTop:"1px solid var(--line)",display:"flex",alignItems:"center",
          justifyContent:"space-between",gap:10}}>
          <span style={{display:"flex",alignItems:"center",gap:7,fontSize:12.5,fontWeight:600,color:"var(--ink-soft)"}}><IconCal size={14}/>{range}</span>
          <span style={{display:"flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--ink-soft)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}><IconPin size={14}/>{ev.place}</span>
        </div>
      </div>
    </article>
  );
}
function FavBtn({fav, onFav, floating}){
  const {L} = useL();
  return (
    <button onClick={(e)=>{e.stopPropagation();onFav();}} aria-label={L.detail.save}
      style={{width:floating?34:40,height:floating?34:40,borderRadius:"50%",
      border:floating?"none":"1px solid var(--line-strong)",
      background:floating?"rgba(255,250,242,.92)":"transparent",backdropFilter:floating?"blur(4px)":"none",
      display:"grid",placeItems:"center",color:fav?"var(--accent)":"var(--ink-soft)",transition:"all .15s"}}>
      <IconHeart size={floating?17:18} filled={fav}/>
    </button>
  );
}

/* ============ AGENDA ============ */
const TYPES = ["Tudo","Medieval","Romana","Templária","Quinhentista","Torneio","Mercado","Histórica"];
const REGIONS = ["Todas as regiões","Norte","Centro","Lisboa","Alentejo","Algarve","Ilhas"];

function Agenda({list, setList, fns, onOpen}){
  const {L, lang} = useL();
  const {type,setType,region,setRegion,q,setQ,favs,toggleFav,results} = fns;
  return (
    <section id="agenda" style={{paddingTop:24}}>
      <div className="wrap">
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
          <div>
            <span className="eyebrow">{L.agenda.eyebrow}</span>
            <h2 className="serif" style={{fontSize:"clamp(34px,4vw,52px)",fontWeight:600,lineHeight:1,margin:"14px 0 0"}}>{L.agenda.title}</h2>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <span style={{fontSize:13,color:"var(--ink-faint)",fontWeight:600}}>{L.agenda.events(results.length)}</span>
            <div style={{display:"flex",border:"1px solid var(--line-strong)",borderRadius:5,overflow:"hidden"}}>
              {[["grid",IconGrid],["list",IconRows]].map(([v,Ic])=>(
                <button key={v} onClick={()=>setList(v==="list")}
                  style={{width:40,height:38,display:"grid",placeItems:"center",border:"none",
                  background:(list?"list":"grid")===v?"var(--ink)":"transparent",
                  color:(list?"list":"grid")===v?"var(--bg)":"var(--ink-soft)",transition:"all .15s"}}>
                  <Ic size={17}/>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* filter bar */}
        <div style={{display:"flex",alignItems:"center",gap:14,marginTop:28,flexWrap:"wrap",
          paddingBottom:24,borderBottom:"1px solid var(--line)"}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",flex:1,minWidth:260}}>
            {TYPES.map(tp=>(
              <button key={tp} onClick={()=>setType(tp)} style={{
                padding:"9px 16px",borderRadius:30,fontSize:13,fontWeight:700,letterSpacing:".01em",
                border:`1px solid ${type===tp?"var(--accent)":"var(--line-strong)"}`,
                background:type===tp?"var(--accent)":"transparent",
                color:type===tp?"#fdf6ec":"var(--ink-soft)",transition:"all .15s"}}>{typeLabel(tp,lang)}</button>
            ))}
          </div>
          <select value={region} onChange={e=>setRegion(e.target.value)} style={{
            padding:"10px 16px",borderRadius:5,border:"1px solid var(--line-strong)",
            background:"var(--bg-card)",color:"var(--ink)",fontFamily:"var(--sans)",fontSize:13,fontWeight:600,cursor:"pointer"}}>
            {REGIONS.map(r=><option key={r} value={r}>{regionLabel(r,lang)}</option>)}
          </select>
          <div className="agenda-search-wrap" style={{position:"relative"}}>
            <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"var(--ink-faint)"}}><IconSearch size={16}/></span>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder={L.agenda.search} className="agenda-search"
              style={{padding:"10px 14px 10px 38px",borderRadius:5,border:"1px solid var(--line-strong)",
              background:"var(--bg-card)",color:"var(--ink)",fontFamily:"var(--sans)",fontSize:13,width:220}}/>
          </div>
        </div>

        {/* results */}
        {results.length===0 ? (
          <div style={{textAlign:"center",padding:"80px 0",color:"var(--ink-faint)"}}>
            <Crest size={48} color="var(--line-strong)"/>
            <p className="serif" style={{fontSize:22,fontStyle:"italic",marginTop:16}}>{L.agenda.empty}</p>
          </div>
        ) : list ? (
          <div style={{display:"flex",flexDirection:"column",gap:14,marginTop:28}}>
            {results.map(ev=><EventCard key={ev.id} ev={ev} list fav={favs.has(ev.id)} onFav={()=>toggleFav(ev.id)} onOpen={()=>onOpen(ev)}/>)}
          </div>
        ) : (
          <div className="ev-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:26,marginTop:30}}>
            {results.map(ev=><EventCard key={ev.id} ev={ev} fav={favs.has(ev.id)} onFav={()=>toggleFav(ev.id)} onOpen={()=>onOpen(ev)}/>)}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============ REGIONS BAND ============ */
const REGION_NOTES = {
  Norte:"Guimarães · Braga · Gaia", Centro:"Tomar · Óbidos · Leiria",
  Lisboa:"Sintra · Palmela · V. F. Xira", Alentejo:"Beja · Évora · Elvas",
  Algarve:"Silves · Castro Marim · Loulé", Ilhas:"Machico · Ribeira Grande",
};
function RegionsBand({onPick}){
  const {L, lang} = useL();
  const order = ["Norte","Centro","Lisboa","Alentejo","Algarve","Ilhas"];
  const counts = {};
  EVENTS.forEach(ev=>{ counts[ev.region]=(counts[ev.region]||0)+1; });
  const regions = order.filter(r=>counts[r]).map(r=>({name:r, n:counts[r], note:REGION_NOTES[r]}));
  return (
    <section id="regioes" style={{marginTop:96,background:"var(--bg-panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",padding:"72px 0"}}>
      <div className="wrap">
        <div style={{textAlign:"center",maxWidth:560,margin:"0 auto 44px"}}>
          <span className="eyebrow" style={{justifyContent:"center"}}>{L.regions.eyebrow}</span>
          <h2 className="serif" style={{fontSize:"clamp(32px,3.6vw,46px)",fontWeight:600,margin:"14px 0 12px",lineHeight:1.02}}>{L.regions.title}</h2>
          <p style={{color:"var(--ink-soft)",fontSize:16.5,margin:0}}>{L.regions.sub}</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="reg-grid">
          {regions.map(r=>(
            <button key={r.name} onClick={()=>onPick(r.name)} style={{textAlign:"left",
              background:"var(--bg-card)",border:"1px solid var(--line)",borderRadius:8,padding:"30px 30px 26px",
              boxShadow:"var(--shadow-sm)",transition:"all .2s",cursor:"pointer"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="var(--shadow-lg)";e.currentTarget.style.borderColor="var(--accent)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="var(--shadow-sm)";e.currentTarget.style.borderColor="var(--line)";}}>
              <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between"}}>
                <h3 className="display" style={{fontSize:22,fontWeight:700,letterSpacing:".02em"}}>{regionLabel(r.name,lang)}</h3>
                <span className="serif" style={{fontSize:34,fontWeight:600,color:"var(--accent)",lineHeight:1}}>{r.n}</span>
              </div>
              <p style={{margin:"6px 0 0",fontSize:13.5,color:"var(--ink-faint)"}}>{r.note}</p>
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:20,fontSize:12.5,fontWeight:700,
                letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent)"}}>{L.regions.cta} <IconArrow size={15}/></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TWEAKS ============ */
const ACCENTS = {
  "Vinho":     {a:"oklch(0.470 0.130 28)", d:"oklch(0.380 0.120 28)"},
  "Floresta":  {a:"oklch(0.440 0.090 150)", d:"oklch(0.360 0.085 150)"},
  "Tinta":     {a:"oklch(0.420 0.110 255)", d:"oklch(0.340 0.100 255)"},
  "Ocre":      {a:"oklch(0.520 0.110 65)", d:"oklch(0.430 0.105 62)"},
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "Vinho",
  "headingFont": "Cormorant Garamond",
  "texture": true
}/*EDITMODE-END*/;

const TW = {
  pt:{ sec:"Identidade visual", accent:"Cor de acento", font:"Tipo de título", tex:"Textura de pergaminho" },
  en:{ sec:"Visual identity", accent:"Accent colour", font:"Heading typeface", tex:"Parchment texture" },
};

/* ============ APP ============ */
function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useState(()=> localStorage.getItem("fm_lang") || "pt");
  const [list, setList] = useState(false);
  const [type, setType] = useState("Tudo");
  const [region, setRegion] = useState("Todas as regiões");
  const [q, setQ] = useState("");
  const [favs, setFavs] = useState(()=>new Set());
  const [selected, setSelected] = useState(null);

  const setLang = (l)=>{ setLangState(l); try{localStorage.setItem("fm_lang", l);}catch(e){} };
  const L = STR[lang] || STR.pt;
  useEffect(()=>{ document.documentElement.lang = lang; },[lang]);

  // apply tweaks to :root
  useEffect(()=>{
    const r = document.documentElement.style;
    const ac = ACCENTS[t.accent] || ACCENTS["Vinho"];
    r.setProperty("--accent", ac.a);
    r.setProperty("--accent-deep", ac.d);
    r.setProperty("--serif", `'${t.headingFont}', serif`);
    document.body.classList.toggle("tex", !!t.texture);
  },[t.accent, t.headingFont, t.texture]);

  const toggleFav = (id)=>setFavs(p=>{const n=new Set(p); n.has(id)?n.delete(id):n.add(id); return n;});

  const results = useMemo(()=>{
    return EVENTS.filter(e=>{
      if(type!=="Tudo" && e.type!==type) return false;
      if(region!=="Todas as regiões" && e.region!==region) return false;
      if(q.trim()){
        const s=(e.title+" "+e.place+" "+e.theme).toLowerCase();
        if(!s.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  },[type,region,q]);

  const featured = EVENTS.find(e=>e.featured) || EVENTS[0];
  const scrollTo = (id)=>{ const el=document.getElementById(id); if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70, behavior:"smooth"}); };
  const goAgenda = ()=>scrollTo("agenda");
  const focusSearch = ()=>{goAgenda(); setTimeout(()=>document.querySelector('#agenda input')?.focus(),500);};
  const tw = TW[lang] || TW.pt;

  return (
    <LangContext.Provider value={{lang, setLang, L}}>
      <Header onSearch={focusSearch}/>
      <Hero featured={featured} onExplore={goAgenda} onRegion={()=>scrollTo("regioes")} onOpen={()=>setSelected(featured)}/>
      <Agenda list={list} setList={setList} onOpen={setSelected}
        fns={{type,setType,region,setRegion,q,setQ,favs,toggleFav,results}}/>
      <EventsMap onOpen={setSelected}/>
      <RegionsBand onPick={(r)=>{setRegion(r); setType("Tudo"); goAgenda();}}/>
      <Footer/>

      {selected && (
        <EventDetail ev={selected} onClose={()=>setSelected(null)} onOpen={setSelected}
          fav={favs.has(selected.id)} onFav={()=>toggleFav(selected.id)}/>
      )}

      <TweaksPanel>
        <TweakSection label={tw.sec}/>
        <TweakColor label={tw.accent} value={ACCENTS[t.accent].a}
          options={Object.values(ACCENTS).map(v=>v.a)}
          onChange={(v)=>{const k=Object.keys(ACCENTS).find(k=>ACCENTS[k].a===v); setTweak('accent', k||'Vinho');}}/>
        <TweakRadio label={tw.font} value={t.headingFont}
          options={["Cormorant Garamond","Cinzel"]}
          onChange={(v)=>setTweak('headingFont', v)}/>
        <TweakToggle label={tw.tex} value={t.texture}
          onChange={(v)=>setTweak('texture', v)}/>
      </TweaksPanel>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
