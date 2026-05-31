// ---------- icons ----------
const Icon = ({d, size=18, sw=1.7, fill="none", style}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{d}</svg>
);
const IconCal   = (p)=><Icon {...p} d={<><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></>}/>;
const IconPin   = (p)=><Icon {...p} d={<><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></>}/>;
const IconSearch= (p)=><Icon {...p} d={<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></>}/>;
const IconArrow = (p)=><Icon {...p} d={<><path d="M5 12h14M13 6l6 6-6 6"/></>}/>;
const IconHeart = ({filled, ...p})=><Icon {...p} fill={filled?"currentColor":"none"} d={<path d="M12 20.5 4.5 13a4.6 4.6 0 0 1 6.5-6.5l1 1 1-1A4.6 4.6 0 0 1 19.5 13Z"/>}/>;
const IconGrid  = (p)=><Icon {...p} d={<><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></>}/>;
const IconRows  = (p)=><Icon {...p} d={<><rect x="3.5" y="4.5" width="17" height="5" rx="1"/><rect x="3.5" y="14.5" width="17" height="5" rx="1"/></>}/>;
const IconMenu  = (p)=><Icon {...p} d={<><path d="M3 6h18M3 12h18M3 18h18"/></>}/>;

// ---------- heraldic crest ----------
const Crest = ({size=34, color="var(--accent)"}) => (
  <svg width={size} height={size} viewBox="0 0 40 44" fill="none" aria-hidden="true">
    <path d="M20 2 36 7v15c0 11-8 17-16 20C12 39 4 33 4 22V7L20 2Z"
          fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 2 36 7v15c0 11-8 17-16 20C12 39 4 33 4 22V7L20 2Z"
          fill="none" stroke="oklch(0.985 0.01 88 / .5)" strokeWidth="1" strokeLinejoin="round"
          transform="scale(0.82) translate(4.3,4.6)"/>
    <path d="M20 11v20M11.5 19.5h17" stroke="oklch(0.985 0.01 88)" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="20" cy="19.5" r="3.1" fill="var(--gold)" stroke="oklch(0.985 0.01 88)" strokeWidth="1.2"/>
  </svg>
);

// ---------- type colors ----------
const TYPE_STYLE = {
  "Medieval":  {bg:"oklch(0.47 0.13 28 / .12)",  fg:"oklch(0.42 0.13 28)"},
  "Romana":    {bg:"oklch(0.55 0.13 45 / .14)",  fg:"oklch(0.46 0.13 45)"},
  "Templária": {bg:"oklch(0.50 0.15 18 / .13)",  fg:"oklch(0.43 0.16 18)"},
  "Histórica": {bg:"oklch(0.50 0.05 250 / .13)", fg:"oklch(0.44 0.06 250)"},
  "Torneio":   {bg:"oklch(0.62 0.10 76 / .18)",  fg:"oklch(0.46 0.09 74)"},
  "Mercado":   {bg:"oklch(0.52 0.09 145 / .14)", fg:"oklch(0.42 0.09 145)"},
  "Quinhentista": {bg:"oklch(0.50 0.11 320 / .13)", fg:"oklch(0.44 0.12 320)"},
};
const TypeBadge = ({type, solid}) => {
  const {lang} = useL();
  const s = TYPE_STYLE[type] || TYPE_STYLE["Medieval"];
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",
      fontFamily:"var(--sans)",fontSize:10.5,fontWeight:800,letterSpacing:".12em",
      textTransform:"uppercase",padding:"5px 10px",borderRadius:2,
      background: solid ? "rgba(255,250,242,.92)" : s.bg,
      color: s.fg,
      backdropFilter: solid ? "blur(4px)" : "none",
    }}>{typeLabel(type, lang)}</span>
  );
};

// ---------- image with graceful parchment fallback ----------
function EventImage({src, alt, type}){
  const [ok, setOk] = React.useState(!!src);
  const s = TYPE_STYLE[type] || TYPE_STYLE["Medieval"];
  if (ok) {
    return <img src={src} alt={alt} onError={()=>setOk(false)}
                style={{width:"100%",height:"100%",objectFit:"cover"}}/>;
  }
  return (
    <div style={{
      width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",
      background:`linear-gradient(135deg, ${s.bg}, oklch(0.92 0.02 80))`,
      position:"relative",overflow:"hidden",
    }}>
      <div style={{position:"absolute",inset:0,opacity:.5,
        backgroundImage:"repeating-linear-gradient(135deg, transparent 0 13px, oklch(0.85 0.02 78 / .5) 13px 14px)"}}/>
      <Crest size={46} color={s.fg}/>
    </div>
  );
}

// ---------- header ----------
function Header({onSearch}){
  const {lang, setLang, L} = useL();
  const NAV = [
    {label:L.nav.calendario, sub:["2026","2025","2024","2023"]},
    {label:L.nav.videos},
    {label:L.nav.livro, sub:L.subLivro},
    {label:L.nav.directorio, sub:L.subDir},
    {label:L.nav.contactos},
  ];
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(()=>{
    const f=()=>setScrolled(window.scrollY>20);
    window.addEventListener("scroll",f); f();
    return ()=>window.removeEventListener("scroll",f);
  },[]);
  return (
    <header style={{
      position:"sticky",top:0,zIndex:50,
      background: (scrolled||menuOpen) ? "oklch(0.966 0.013 84 / .92)" : "transparent",
      backdropFilter: (scrolled||menuOpen) ? "blur(12px) saturate(1.1)" : "none",
      borderBottom: `1px solid ${(scrolled||menuOpen) ? "var(--line)" : "transparent"}`,
      transition:"all .3s ease",
    }}>
      <div className="wrap" style={{display:"flex",alignItems:"center",gap:28,height:78}}>
        <a href="#top" style={{display:"flex",alignItems:"center",gap:13,flexShrink:0}}>
          <Crest size={36}/>
          <div style={{lineHeight:1.05}}>
            <div className="display" style={{fontSize:18,fontWeight:700,letterSpacing:".04em",color:"var(--ink)"}}>FEIRAS MEDIEVAIS</div>
            <div className="logo-sub" style={{fontSize:10.5,letterSpacing:".34em",color:"var(--ink-faint)",fontWeight:600,textTransform:"uppercase",marginTop:1}}>Portugal · Recriações</div>
          </div>
        </a>
        <nav style={{display:"flex",alignItems:"center",gap:4,marginLeft:"auto"}} className="mainnav">
          {NAV.map(n=>(
            <div key={n.label} style={{position:"relative"}}
                 onMouseEnter={()=>setOpen(n.label)} onMouseLeave={()=>setOpen(null)}>
              <button style={{
                background:"none",border:"none",padding:"10px 14px",
                fontFamily:"var(--sans)",fontSize:13.5,fontWeight:600,letterSpacing:".02em",
                color: open===n.label ? "var(--accent)" : "var(--ink)",
                transition:"color .15s",display:"flex",alignItems:"center",gap:6,
              }}>{n.label}{n.sub && <span style={{fontSize:9,opacity:.5,marginTop:2}}>▾</span>}</button>
              {n.sub && open===n.label && (
                <div style={{position:"absolute",top:"100%",left:6,minWidth:170,
                  background:"var(--bg-card)",border:"1px solid var(--line)",borderRadius:6,
                  boxShadow:"var(--shadow-lg)",padding:6,display:"flex",flexDirection:"column"}}>
                  {n.sub.map(s=>(
                    <a key={s} href="#" style={{padding:"9px 13px",fontSize:13,fontWeight:600,
                      color:"var(--ink-soft)",borderRadius:4,transition:"all .12s"}}
                      onMouseEnter={e=>{e.currentTarget.style.background="var(--bg-panel)";e.currentTarget.style.color="var(--accent)";}}
                      onMouseLeave={e=>{e.currentTarget.style.background="none";e.currentTarget.style.color="var(--ink-soft)";}}>{s}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button onClick={onSearch} aria-label={L.searchAria} className="search-btn" style={{
          width:40,height:40,borderRadius:"50%",border:"1px solid var(--line-strong)",
          background:"transparent",color:"var(--ink)",display:"grid",placeItems:"center",
          transition:"all .15s",flexShrink:0}}
          onMouseEnter={e=>{e.currentTarget.style.background="var(--ink)";e.currentTarget.style.color="var(--bg)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="var(--ink)";}}>
          <IconSearch size={17}/>
        </button>
        <div style={{display:"flex",border:"1px solid var(--line-strong)",borderRadius:30,overflow:"hidden",flexShrink:0}}>
          {["pt","en"].map(lc=>(
            <button key={lc} onClick={()=>setLang(lc)} style={{
              padding:"7px 12px",border:"none",fontFamily:"var(--sans)",fontSize:12,fontWeight:800,letterSpacing:".06em",
              background: lang===lc ? "var(--ink)" : "transparent", color: lang===lc ? "var(--bg)" : "var(--ink-soft)",
              transition:"all .15s"}}>{lc.toUpperCase()}</button>
          ))}
        </div>
        <button className="menu-btn" aria-label="Menu" onClick={()=>setMenuOpen(o=>!o)} style={{
          display:"none",width:44,height:44,borderRadius:8,border:"1px solid var(--line-strong)",
          background:menuOpen?"var(--ink)":"transparent",color:menuOpen?"var(--bg)":"var(--ink)",
          placeItems:"center",flexShrink:0}}>
          <IconMenu size={20}/>
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{display:"none",borderTop:"1px solid var(--line)",
          background:"var(--bg)",maxHeight:"calc(100vh - 78px)",overflowY:"auto"}}>
          <div className="wrap" style={{padding:"14px 20px 28px"}}>
            {NAV.map(n=>(
              <div key={n.label} style={{padding:"6px 0",borderBottom:"1px solid var(--line)"}}>
                <div className="display" style={{fontSize:16,fontWeight:700,letterSpacing:".03em",color:"var(--ink)",padding:"10px 0"}}>{n.label}</div>
                {n.sub && (
                  <div style={{display:"flex",flexWrap:"wrap",gap:8,paddingBottom:10}}>
                    {n.sub.map(s=>(
                      <a key={s} href="#" onClick={()=>setMenuOpen(false)} style={{fontSize:13,fontWeight:600,
                        color:"var(--ink-soft)",padding:"7px 13px",border:"1px solid var(--line)",borderRadius:20,
                        background:"var(--bg-card)"}}>{s}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- footer ----------
function Footer(){
  const {L} = useL();
  const cols = L.footer.cols;
  return (
    <footer style={{background:"oklch(0.235 0.022 52)",color:"oklch(0.90 0.02 80)",marginTop:96}}>
      <div className="wrap" style={{paddingTop:64,paddingBottom:40}}>
        <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:40}} className="footgrid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
              <Crest size={34} color="var(--gold)"/>
              <div className="display" style={{fontSize:17,fontWeight:700,letterSpacing:".04em"}}>FEIRAS MEDIEVAIS</div>
            </div>
            <p className="serif" style={{fontSize:17,lineHeight:1.5,color:"oklch(0.78 0.02 80)",maxWidth:300,margin:0}}>
              {L.footer.tagline}
            </p>
            <div style={{display:"flex",gap:10,marginTop:22}}>
              {["Facebook","Instagram","YouTube"].map(s=>(
                <a key={s} href="#" style={{fontSize:11.5,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",
                  padding:"8px 13px",border:"1px solid oklch(0.45 0.02 60)",borderRadius:3,color:"oklch(0.85 0.02 80)",
                  transition:"all .15s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gold)";e.currentTarget.style.color="var(--gold)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="oklch(0.45 0.02 60)";e.currentTarget.style.color="oklch(0.85 0.02 80)";}}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".18em",textTransform:"uppercase",color:"var(--gold)",marginBottom:16}}>{c.h}</div>
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                {c.items.map(i=>(
                  <a key={i} href="#" style={{fontSize:13.5,color:"oklch(0.80 0.02 80)",transition:"color .12s"}}
                    onMouseEnter={e=>e.currentTarget.style.color="#fff"}
                    onMouseLeave={e=>e.currentTarget.style.color="oklch(0.80 0.02 80)"}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:52,paddingTop:24,borderTop:"1px solid oklch(0.36 0.02 55)",
          display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,
          fontSize:12.5,color:"oklch(0.68 0.02 70)"}}>
          <span>{L.footer.copyright}</span>
          <span>{L.footer.updated}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  IconCal, IconPin, IconSearch, IconArrow, IconHeart, IconGrid, IconRows, IconMenu,
  Crest, TypeBadge, TYPE_STYLE, EventImage, Header, Footer,
});
