// ============ i18n layer (PT / EN) ============
const MONTHS = {
  pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
  en:["January","February","March","April","May","June","July","August","September","October","November","December"],
};
const MES_ABBR = {
  pt:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
  en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
};
const TYPE_LABEL = {
  pt:{Tudo:"Tudo",Medieval:"Medieval",Romana:"Romana","Templária":"Templária",Quinhentista:"Quinhentista",Torneio:"Torneio",Mercado:"Mercado","Histórica":"Histórica"},
  en:{Tudo:"All",Medieval:"Medieval",Romana:"Roman","Templária":"Templar",Quinhentista:"Renaissance",Torneio:"Tournament",Mercado:"Market","Histórica":"Historical"},
};
const REGION_LABEL = {
  pt:{"Todas as regiões":"Todas as regiões",Norte:"Norte",Centro:"Centro",Lisboa:"Lisboa",Alentejo:"Alentejo",Algarve:"Algarve",Ilhas:"Ilhas"},
  en:{"Todas as regiões":"All regions",Norte:"North",Centro:"Centre",Lisboa:"Lisbon",Alentejo:"Alentejo",Algarve:"Algarve",Ilhas:"Islands"},
};
const typeLabel   = (k,lang)=> (TYPE_LABEL[lang]||TYPE_LABEL.pt)[k] || k;
const regionLabel = (k,lang)=> (REGION_LABEL[lang]||REGION_LABEL.pt)[k] || k;

// format a date range from ISO start/end in the given language
function fmtRange(ev, lang){
  const M = MONTHS[lang] || MONTHS.pt;
  const sd = new Date(ev.start+"T00:00:00");
  const ed = new Date((ev.end||ev.start)+"T00:00:00");
  const sD=sd.getDate(), eD=ed.getDate(), sM=sd.getMonth(), eM=ed.getMonth();
  if (ev.start === (ev.end||ev.start)) return `${sD} ${M[sM]}`;
  if (sM === eM) return `${sD} – ${eD} ${M[sM]}`;
  return `${sD} ${M[sM]} – ${eD} ${M[eM]}`;
}

const STR = {
  pt:{
    nav:{ calendario:"Calendário", videos:"Vídeos", livro:"Livro de Horas", directorio:"Directório", contactos:"Contactos" },
    subLivro:["Cartazes","Livro dos Dias","Leituras"],
    subDir:["Recriadores","Animadores","Organizadores"],
    searchAria:"Procurar",
    hero:{ eyebrow:"Em destaque · Este fim de semana", titleA:"Onde a História", titleB:"volta a respirar.",
      lead:"Todas as feiras medievais, mercados romanos e recriações históricas de Portugal, num só calendário. Descobre o teu próximo salto no tempo.",
      ctaAgenda:"Ver agenda 2026", ctaRegion:"Explorar por região",
      stats:[["120+","eventos em 2026"],["18","distritos"],["2022","desde"]] },
    agenda:{ eyebrow:"Calendário 2026", title:"A Agenda do Reino", events:(n)=>`${n} eventos`,
      search:"Procurar feira ou local…", empty:"Nenhuma feira encontrada nestes domínios." },
    regions:{ eyebrow:"Por todo o país", title:"Explora por região",
      sub:"Do Minho ao Alentejo, há sempre um arraial a chamar por ti.", cta:"Ver eventos" },
    map:{ eyebrow:"O reino em mapa", title:"Onde vai acontecer",
      sub:"Toca num marcador para descobrir a feira. De norte a sul, há sempre História perto de ti." },
    footer:{ tagline:"O calendário vivo das feiras medievais, mercados romanos e recriações históricas de Portugal — desde 2022.",
      updated:"Atualizado a 26 de Maio de 2026", copyright:"© 2026 Feiras Medievais em Portugal",
      cols:[ {h:"Calendários", items:["2026","2025","2024","Arquivo 2023"]},
             {h:"Comunidade", items:["Recriadores","Animadores","Artesãos","Organizadores"]},
             {h:"Livro de Horas", items:["Cartazes","Livro dos Dias","Leituras","Vídeos"]} ] },
    detail:{ about:"Sobre o evento", programme:"No programa", hoursLbl:"Horário", entryLbl:"Entrada",
      orgLbl:"Organização", viewMap:"Ver no mapa", save:"Guardar", saved:"Guardado",
      shareLbl:"Partilhar", shareBtns:["Facebook","WhatsApp","Copiar"], related:"Também te pode interessar", country:"Portugal" },
  },
  en:{
    nav:{ calendario:"Calendar", videos:"Videos", livro:"Book of Hours", directorio:"Directory", contactos:"Contacts" },
    subLivro:["Posters","Book of Days","Readings"],
    subDir:["Reenactors","Performers","Organisers"],
    searchAria:"Search",
    hero:{ eyebrow:"Featured · This weekend", titleA:"Where History", titleB:"breathes again.",
      lead:"Every medieval fair, Roman market and historical reenactment in Portugal, in a single calendar. Find your next leap through time.",
      ctaAgenda:"See 2026 agenda", ctaRegion:"Explore by region",
      stats:[["120+","events in 2026"],["18","districts"],["2022","since"]] },
    agenda:{ eyebrow:"2026 Calendar", title:"The Kingdom's Agenda", events:(n)=>`${n} events`,
      search:"Search fair or place…", empty:"No fair found in these lands." },
    regions:{ eyebrow:"Across the country", title:"Explore by region",
      sub:"From the Minho to the Alentejo, there's always a fair calling you.", cta:"See events" },
    map:{ eyebrow:"The kingdom, mapped", title:"Where it happens",
      sub:"Tap a marker to discover the fair. From north to south, History is always near." },
    footer:{ tagline:"The living calendar of Portugal's medieval fairs, Roman markets and historical reenactments — since 2022.",
      updated:"Updated 26 May 2026", copyright:"© 2026 Medieval Fairs of Portugal",
      cols:[ {h:"Calendars", items:["2026","2025","2024","2023 Archive"]},
             {h:"Community", items:["Reenactors","Performers","Artisans","Organisers"]},
             {h:"Book of Hours", items:["Posters","Book of Days","Readings","Videos"]} ] },
    detail:{ about:"About the event", programme:"What's on", hoursLbl:"Opening hours", entryLbl:"Admission",
      orgLbl:"Organisation", viewMap:"View on map", save:"Save", saved:"Saved",
      shareLbl:"Share", shareBtns:["Facebook","WhatsApp","Copy"], related:"You might also like", country:"Portugal" },
  },
};

const LangContext = React.createContext({lang:"pt"});
const useL = ()=> React.useContext(LangContext);

Object.assign(window, { STR, MONTHS, MES_ABBR, typeLabel, regionLabel, fmtRange, LangContext, useL });
