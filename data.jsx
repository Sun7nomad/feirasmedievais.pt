// All 2026 events scraped from feirasmedievais.pt (Calendário 2026, updated 26 May 2026)
const IMG = "https://feirasmedievais.pt/wp-content/uploads/2026/05/";

// e(id,title,theme,type,start,end,place,region,lat,lng,img)
const e=(id,title,theme,type,start,end,place,region,lat,lng,img)=>({id,title,theme,type,start,end,place,region,lat,lng,img:img||null});

const EVENTS = [
  // ---- Maio ----
  { ...e("redondo","Redondo Medieval","Nas Cortes de D. Dinis","Medieval","2026-05-29","2026-05-31","Redondo","Alentejo",38.649,-7.546, IMG+"Redondo-Medieval-29-de-Maio-de-2026-Redondo-1-400x250.jpg"), featured:true },
  e("beja","Beja Romana","Pax Julia revive o Império","Romana","2026-05-29","2026-05-31","Beja","Alentejo",38.015,-7.863, IMG+"Beja-Romana-29-de-Maio-de-2026-Beja-400x250.jpg"),
  e("dume","Dume Sueva","O reino suevo do Norte","Histórica","2026-05-30","2026-05-31","Dume, Braga","Norte",41.565,-8.43, IMG+"Dume-Sueva-30-de-Maio-de-2026-Dume-400x250.jpg"),
  e("bemposta","Foral da Vila da Bemposta","Recriação do foral medieval","Medieval","2026-05-30","2026-05-31","Bemposta, Penamacor","Centro",40.05,-7.05, IMG+"Foral-da-Vila-da-Bemposta-30-de-Maio-de-2026-Bemposta-400x250.jpg"),
  e("santamarinha","Santa Marinha · Vila Medieval","Mercado e arraial na serra","Medieval","2026-05-30","2026-05-31","Santa Marinha, Seia","Centro",40.42,-7.70, IMG+"Santa-Marinha-Vila-Medieval-Seia-30-de-Maio-de-2026-400x250.jpg"),
  e("torneio-ansiaes","Torneio Medieval de Carrazeda de Ansiães","IV Torneio de Ansiães","Torneio","2026-05-30","2026-06-01","Carrazeda de Ansiães","Norte",41.242,-7.305),
  e("ansiaes","Feira Medieval de Ansiães","Cavaleiros e artesãos junto ao Douro","Medieval","2026-05-30","2026-05-31","Carrazeda de Ansiães","Norte",41.242,-7.305, IMG+"Feira-Medieval-de-Ansiaes-30-de-Maio-de-2026-Carrazeda-de-Ansiaes-400x250.jpg"),
  e("arco-obidos","Campeonato de Arco e Besta de Óbidos","Roteiro dos Castelos","Torneio","2026-05-30","2026-05-30","Óbidos","Centro",39.36,-9.157),
  e("spaio","Feira Medieval de S. Paio de Figueiredo","A Morte do Conde D. Henrique","Medieval","2026-05-31","2026-06-02","Figueiredo, Guimarães","Norte",41.47,-8.27, IMG+"Feira-Medieval-de-S.-Paio-de-Figueiredo-31-de-Maio-de-2026-Figueiredo-Guimaraes-400x250.jpg"),

  // ---- Junho ----
  e("belmonte","Dias Romanos · Belmonte","Torre de Centum Cellas","Romana","2026-06-04","2026-06-10","Colmeal da Torre, Belmonte","Centro",40.36,-7.35),
  e("andorinho","Feira Medieval de Vilar de Andorinho","Arraial à beira-rio","Medieval","2026-06-04","2026-06-07","Vila Nova de Gaia","Norte",41.10,-8.58),
  e("lousada","Mercado Histórico de Lousada","Ofícios e mesteres","Mercado","2026-06-04","2026-06-07","Lousada","Norte",41.277,-8.285),
  e("soure","Origem Templária · Soure 1111","Os primeiros Templários em Portugal","Templária","2026-06-05","2026-06-07","Soure","Centro",40.058,-8.627, IMG+"Origem-Templaria-Soure-1111-5-de-Junho-de-2026-Soure-400x250.jpg"),
  e("lobelhe","Feira Medieval de Lobelhe do Mato","Solar e muralha na Beira Interior","Medieval","2026-06-05","2026-06-07","Lobelhe do Mato, Mangualde","Centro",40.55,-7.78),
  e("trofeu-obidos","Grande Troféu Ibérico · Óbidos 2026","Arco, besta e cavalaria na vila medieval","Torneio","2026-06-05","2026-06-07","Óbidos","Centro",39.36,-9.157),
  e("pinhel","Feira Medieval de Pinhel","A Cidade do Falcão","Medieval","2026-06-05","2026-06-07","Pinhel, Guarda","Centro",40.77,-7.06),
  e("vfxira","Mercado Medieval de Vila Franca de Xira","Tenda e arraial nas margens do Tejo","Mercado","2026-06-05","2026-06-07","Vila Franca de Xira","Lisboa",38.955,-8.99),
  e("torrao","Torrão Quinhentista","Alcácer do Sal","Quinhentista","2026-06-05","2026-06-07","Torrão, Alcácer do Sal","Alentejo",38.29,-8.21),
  e("machico","Mercado Quinhentista de Machico","Os Descobrimentos chegam à Madeira","Quinhentista","2026-06-05","2026-06-07","Machico, Madeira","Ilhas",32.71,-16.77),
  e("esgueira","Festas Quinhentistas da Esgueira","A corte quinhentista em terras de Aveiro","Quinhentista","2026-06-05","2026-06-07","Esgueira, Aveiro","Centro",40.65,-8.62),
  e("aguiar","Crónicas de Aguiar","Aguiar da Beira","Medieval","2026-06-05","2026-06-07","Aguiar da Beira","Centro",40.81,-7.54),
  e("lobrigos","Feira Medieval de São João de Lobrigos","Arraial medieval nas margens do Douro","Medieval","2026-06-05","2026-06-07","Santa Marta de Penaguião","Norte",41.18,-7.78),
  e("seide","Feira Medieval de Seide","Ofícios e cavalaria no Minho","Medieval","2026-06-06","2026-06-06","Seide, Vila Nova de Famalicão","Norte",41.40,-8.52),
  e("sanfins","Sanfins Medieval","XIII Encontro Galaico-Minhoto","Histórica","2026-06-06","2026-06-07","Sanfins, Valença","Norte",42.03,-8.64),
  e("alhosvedros","Feira Medieval de Alhos Vedros","550 anos da Batalha de Toro","Medieval","2026-06-10","2026-06-14","Alhos Vedros, Moita","Lisboa",38.65,-9.02),
  e("afonsina","Feira Afonsina de Guimarães","A Investidura de Afonso Henriques","Medieval","2026-06-11","2026-06-14","Guimarães","Norte",41.444,-8.296),
  e("montemornovo","Feira Medieval Castelo de Montemor-o-Novo","O castelo alentejano ganha vida","Medieval","2026-06-12","2026-06-14","Montemor-o-Novo","Alentejo",38.648,-8.21),
  e("moalde","Moalde Medieval de São Mamede Infesta","Mercado e recriação no Grande Porto","Medieval","2026-06-12","2026-06-14","São Mamede Infesta, Matosinhos","Norte",41.20,-8.61),
  e("lamego","Feira Medieval de Lamego","D. Afonso Henriques e as Cortes de Lamego","Medieval","2026-06-12","2026-06-14","Castelo de Lamego","Norte",41.10,-7.81),
  e("carvalhal","Feira Medieval do Carvalhal","Cavaleiros e mesteres na Estremadura","Medieval","2026-06-12","2026-06-14","Carvalhal, Bombarral","Centro",39.27,-9.18),
  e("aldeiagalega","Feira Quinhentista de Aldeia Galega","XI Edição","Quinhentista","2026-06-12","2026-06-14","Merceana, Alenquer","Lisboa",39.07,-9.13),
  e("arco-ourem","Campeonato de Arco e Besta de Ourém","Roteiro dos Castelos","Torneio","2026-06-14","2026-06-14","Castelo de Ourém","Centro",39.66,-8.59),
  e("doisportos","Feira Medieval de Casal de São Pedro","Dois Portos","Medieval","2026-06-19","2026-06-21","Dois Portos, Torres Vedras","Lisboa",39.07,-9.18),
  e("trancoso","Feira Medieval de Trancoso","A cidade medieval da Beira Alta","Medieval","2026-06-26","2026-06-28","Trancoso","Centro",40.78,-7.35),
  e("beato","Feira Medieval do Beato","Feira histórica às portas de Lisboa","Medieval","2026-06-26","2026-06-28","Beato, Lisboa","Lisboa",38.73,-9.10),
  e("quintela","Feira Medieval da Torre da Quintela","Vila Marim","Medieval","2026-06-27","2026-06-28","Vila Marim, Vila Real","Norte",41.27,-7.79),
  e("arco-mmvelho","Campeonato de Arco e Besta de Montemor-o-Velho","Roteiro dos Castelos","Torneio","2026-06-29","2026-06-29","Castelo de Montemor-o-Velho","Centro",40.17,-8.68),

  // ---- Julho ----
  e("elvas","Festival Medieval de Elvas","Nas muralhas da fronteira alentejana","Medieval","2026-07-02","2026-07-05","Elvas","Alentejo",38.88,-7.16),
  e("luzdasvelas","Mercado de Culturas · À Luz das Velas","Mostra da Culturalidade Lusófona","Mercado","2026-07-02","2026-07-05","Lagoa","Algarve",37.13,-8.45),
  e("penedono","Feira Medieval de Penedono","O castelo dos Fantasmas da Beira","Medieval","2026-07-03","2026-07-05","Penedono","Centro",40.99,-7.40),
  e("cambra","Mercado Medieval de Cambra","Ofícios e produtos da Beira Baixa","Mercado","2026-07-03","2026-07-05","Cambra, Vouzela","Centro",40.72,-8.16),
  e("serradelrei","Feira Medieval de Serra D'el Rei","Entre castelo e Atlântico","Medieval","2026-07-03","2026-07-05","Serra D'el Rei, Peniche","Centro",39.32,-9.30),
  e("azambuja","Mercado Medieval de Azambuja","Ponto de encontro do Ribatejo","Mercado","2026-07-04","2026-07-04","Azambuja","Lisboa",39.07,-8.87),
  e("ribeiragrande","Feira Quinhentista da Ribeira Grande","O século XVI no coração dos Açores","Quinhentista","2026-07-09","2026-07-12","Ribeira Grande, Açores","Ilhas",37.82,-25.51),
  e("sintra","Feira Medieval de Sintra","À sombra do Palácio Nacional","Medieval","2026-07-09","2026-07-12","Praça D. Fernando II, Sintra","Lisboa",38.80,-9.39),
  { ...e("tomar-festa","Festa Templária de Tomar","A cidade dos Templários","Templária","2026-07-09","2026-07-12","Tomar","Centro",39.604,-8.41, IMG+"Festa-Templaria-de-Tomar-9-de-Julho-de-2026-Tomar-400x250.jpg") },
  e("valdevez","O Recontro de Valdevez","O duelo que traçou as fronteiras de Portugal","Histórica","2026-07-10","2026-07-12","Paço da Giela, Arcos de Valdevez","Norte",41.85,-8.42),
  e("moes","Feira Medieval de Mões","Aldeia medieval nas serras de Castro Daire","Medieval","2026-07-10","2026-07-12","Mões, Castro Daire","Centro",40.93,-7.85),
  e("mindelo","Feira Medieval do Mindelo","XIII Edição","Medieval","2026-07-10","2026-07-12","Mindelo, Vila do Conde","Norte",41.31,-8.73),
  e("pirata-leca","Festival Pirata de Leça da Palmeira","Corso e navegação no forte atlântico","Histórica","2026-07-10","2026-07-13","Forte das Neves, Leça da Palmeira","Norte",41.20,-8.71),
  e("arco-alcanede","Campeonato de Arco e Besta de Alcanede","Roteiro dos Castelos","Torneio","2026-07-12","2026-07-12","Castelo de Alcanede","Centro",39.42,-8.85),
  e("avenidasnovas","Feira Medieval das Avenidas Novas","Feira medieval no coração da capital","Medieval","2026-07-14","2026-07-17","Avenidas Novas, Lisboa","Lisboa",38.74,-9.15),
  e("obidos","Mercado Medieval de Óbidos","O maior mercado medieval de Portugal","Mercado","2026-07-16","2026-07-26","Óbidos","Centro",39.36,-9.157),
  e("galaicofolia","Galaicofolia","Castro de S. Lourenço","Histórica","2026-07-16","2026-07-19","Vila Chã, Esposende","Norte",41.55,-8.77),
  e("canelas","Jornadas Medievais de Canelas do Douro","Vinhas e cavaleiros no coração do Douro","Medieval","2026-07-17","2026-07-19","Canelas, Peso da Régua","Norte",41.16,-7.78),
  e("oitocentista-vimeiro","Feira Oitocentista do Vimeiro","Portugal do século XIX em desfile","Histórica","2026-07-17","2026-07-19","Vimeiro, Lourinhã","Lisboa",39.18,-9.30),
  e("salir","Salir do Tempo","Época Romana","Romana","2026-07-17","2026-07-19","Salir, Loulé","Algarve",37.25,-8.05),
  e("batalha-vimeiro","Recriação da Batalha do Vimeiro 1808","A derrota de Junot que libertou Portugal","Histórica","2026-07-17","2026-07-19","Vimeiro, Lourinhã","Lisboa",39.18,-9.30),
  e("leiria","Leiria Medieval","Ao pé do castelo de D. Afonso Henriques","Medieval","2026-07-17","2026-07-19","Praça da República, Leiria","Centro",39.745,-8.807),
  e("constantim","Feira Medieval de Constantim","Aldeia medieval em Trás-os-Montes","Medieval","2026-07-18","2026-07-19","Constantim, Vila Real","Norte",41.35,-7.69),
  e("canha","Feira Medieval de Canha","Na planície da Margem Sul","Medieval","2026-07-24","2026-07-26","Canha, Montijo","Lisboa",38.77,-8.62),
  e("anadia","Mercado Medieval de Anadia","Vinhos e saberes medievais da Bairrada","Mercado","2026-07-24","2026-07-26","Vilarinho do Bairro, Anadia","Centro",40.44,-8.50),
  e("encoberta","Feira Medieval da Encoberta","Do Martelo ao Pergaminho: os ofícios medievais","Medieval","2026-07-24","2026-07-26","Encoberta, Penalva do Castelo","Centro",40.68,-7.70),
  e("viagemmedieval","Viagem Medieval em Terras de Santa Maria","A maior recriação medieval do país","Medieval","2026-07-29","2026-08-09","Santa Maria da Feira","Norte",40.93,-8.54),

  // ---- Agosto ----
  e("silves","Feira Medieval de Silves","Al-Ândalus revive","Medieval","2026-08-07","2026-08-15","Silves","Algarve",37.19,-8.44),
  e("aljubarrota","Aljubarrota Medieval","Onde Portugal ganhou a sua independência","Medieval","2026-08-13","2026-08-16","Aljubarrota, Alcobaça","Centro",39.55,-8.93),
  e("cerveira","Festa da História de V. N. de Cerveira","Era Viking","Histórica","2026-08-13","2026-08-16","Vila Nova de Cerveira","Norte",41.94,-8.74),
  e("montinho","Mercado Medieval de Montinho","Mestres e artesãos em Cantanhede","Mercado","2026-08-21","2026-08-23","Pocariça, Cantanhede","Centro",40.34,-8.59),
  e("castromarim","Dias Medievais de Castro Marim","Muralhas mouriscas junto ao Guadiana","Medieval","2026-08-26","2026-08-30","Castro Marim","Algarve",37.22,-7.44),
  e("almeida","Recriação do Cerco de Almeida","O cerco da praça-forte de 1810","Histórica","2026-08-28","2026-08-30","Almeida","Centro",40.726,-6.906),
  e("malta","Festa Medieval de Malta","Vila do Conde medieval","Medieval","2026-08-29","2026-08-30","Malta, Vila do Conde","Norte",41.36,-8.69, IMG+"Festa-Medieval-de-Malta-Vila-do-Conde-29-de-Agosto-de-2026-Malta-400x250.jpg"),

  // ---- Setembro ----
  e("vindouro","Festa Pombalina Vindouro","Wine & History","Histórica","2026-09-04","2026-09-06","São João da Pesqueira","Norte",41.14,-7.40),
  e("cordiana","Mercado Medieval de Villa Cordiana","Villa romana e mercado medieval","Mercado","2026-09-04","2026-09-06","Cordinhã, Cantanhede","Centro",40.32,-8.55),
  e("ceyceyra","Ceyceyra Medieval","Medieval nos contrafortes da Serra de Tomar","Medieval","2026-09-18","2026-09-20","Asseiceira, Tomar","Centro",39.54,-8.46),
  e("alvalade","Alvalade Medieval","O Sado e a memória alentejana","Medieval","2026-09-18","2026-09-20","Alvalade do Sado, Santiago do Cacém","Alentejo",37.95,-8.39),
  e("marvila","Feira Medieval de Marvila","A história ribeirinha de Lisboa","Medieval","2026-09-25","2026-09-27","Vale Fundão, Marvila","Lisboa",38.74,-9.10),
  e("palmela","Feira Medieval de Palmela","Cavaleiros de Santiago no castelo da Arrábida","Medieval","2026-09-25","2026-09-27","Castelo de Palmela","Lisboa",38.57,-8.90),

  // ---- Outubro ----
  e("canas","Feira Medieval de Canas de Senhorim","Mesteres e ofícios na Beira","Medieval","2026-10-02","2026-10-04","Canas de Senhorim, Nelas","Centro",40.50,-7.90),
  e("azurara","Mercado Medieval de Azurara","A vila piscatória de Vila do Conde","Mercado","2026-10-02","2026-10-05","Azurara, Vila do Conde","Norte",41.34,-8.74),
  e("almossassa","Festival Almossassa","Marvão","Histórica","2026-10-03","2026-10-05","Marvão","Alentejo",39.39,-7.38),
  e("arco-aljubarrota","Campeonato de Arco e Besta de Aljubarrota","Roteiro dos Castelos","Torneio","2026-10-05","2026-10-05","Aljubarrota, Alcobaça","Centro",39.55,-8.93),
  e("dias-templarios","Dias Templários de Tomar","A Ordem do Templo regressa a Tomar","Templária","2026-10-10","2026-10-11","Tomar","Centro",39.604,-8.41),
  e("arco-tomar","Campeonato de Arco e Besta de Tomar","Roteiro dos Castelos","Torneio","2026-10-11","2026-10-11","Castelo Templário de Tomar","Centro",39.604,-8.41),

  // ---- Novembro ----
  e("arco-silves","Campeonato de Arco e Besta de Silves","Roteiro dos Castelos","Torneio","2026-11-08","2026-11-08","Castelo de Silves","Algarve",37.19,-8.44),
  e("congresso","V Congresso dos Arqueólogos Portugueses","Ciência e memória da arqueologia portuguesa","Histórica","2026-11-18","2026-11-21","Lisboa","Lisboa",38.71,-9.14),
];

Object.assign(window, { EVENTS });
