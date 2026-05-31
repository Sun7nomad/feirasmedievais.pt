// ---------- Interactive Leaflet map of Portugal ----------
function EventsMap({onOpen}){
  const {L: T, lang} = useL();
  const elRef = React.useRef(null);
  const mapRef = React.useRef(null);

  React.useEffect(()=>{
    if(!window.L || !elRef.current || mapRef.current) return;
    const map = L.map(elRef.current, {
      scrollWheelZoom:false, zoomControl:true, attributionControl:true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      subdomains:"abcd", maxZoom:18,
      attribution:'&copy; OpenStreetMap &copy; CARTO',
    }).addTo(map);

    const pts=[];
    const cluster = (L.markerClusterGroup ? L.markerClusterGroup({
      maxClusterRadius:44, showCoverageOnHover:false,
      iconCreateFunction:(c)=>L.divIcon({
        html:`<div class="mapcluster"><span>${c.getChildCount()}</span></div>`,
        className:"", iconSize:[42,42],
      }),
    }) : null);
    EVENTS.forEach(ev=>{
      if(ev.lat==null) return;
      const sd=new Date(ev.start+"T00:00:00");
      const icon = L.divIcon({
        className:"", html:`<div class="mappin"><b>${sd.getDate()}</b><i>${MES_ABBR[lang][sd.getMonth()]}</i></div>`,
        iconSize:[44,52], iconAnchor:[22,50],
      });
      const m=L.marker([ev.lat,ev.lng],{icon});
      m.bindTooltip(`<b>${ev.title}</b><br>${ev.place}`,{direction:"top",offset:[0,-46],opacity:1,className:"map-tt"});
      m.on("click",()=>onOpen(ev));
      if(cluster) cluster.addLayer(m); else m.addTo(map);
      pts.push([ev.lat,ev.lng]);
    });
    if(cluster) map.addLayer(cluster);
    // fit to mainland Portugal by default (islands reachable by zooming out)
    map.fitBounds([[36.95,-9.55],[42.15,-6.15]],{padding:[30,30]});
    setTimeout(()=>map.invalidateSize(),200);

    return ()=>{ map.remove(); mapRef.current=null; };
  },[lang]);

  return (
    <section id="mapa" style={{paddingTop:96}}>
      <div className="wrap">
        <div style={{textAlign:"center",maxWidth:580,margin:"0 auto 38px"}}>
          <span className="eyebrow" style={{justifyContent:"center"}}>{T.map.eyebrow}</span>
          <h2 className="serif" style={{fontSize:"clamp(32px,3.8vw,48px)",fontWeight:600,margin:"14px 0 12px",lineHeight:1.02}}>{T.map.title}</h2>
          <p style={{color:"var(--ink-soft)",fontSize:16.5,margin:0}}>{T.map.sub}</p>
        </div>
        <div style={{position:"relative",borderRadius:12,overflow:"hidden",border:"1px solid var(--line)",
          boxShadow:"var(--shadow-md)"}}>
          <div ref={elRef} className="map-box" style={{height:560,width:"100%",background:"var(--bg-panel)"}}></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EventsMap });
