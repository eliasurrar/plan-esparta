// Plan Esparta personalizado para Elias — 4 días/semana × 3 semanas
// Foco: calistenia con barras de plaza, 1-2 grupos musculares por día, mínima repetición.
// Imágenes oficiales del Método Sparta (Floripa Calistenia, Kiwify) descargadas a /img/.
// Principios extraídos directamente de las lecciones "O TREINO ESPARTANO".

const PLAN = {
  meta: {
    title: "Plan Esparta — Elias",
    subtitle: "Calistenia en barras de plaza · 4 días/semana · 3 semanas",
    source: "Personalizado a partir del Método Sparta (Floripa Calistenia)",
  },

  // Principios extraídos del módulo "O TREINO ESPARTANO" (lecciones EMPURRAR + PUXAR):
  // - Frecuencia: 2x/semana por grupo muscular para mejores resultados
  // - Volumen: 8 a 15 series semanales por grupo (sumando todas las variaciones)
  // - Variantes: máximo 5 variaciones del mismo patrón por rutina
  // - Intensidad: cerca del fallo muscular ("próximo da falha")
  // - Calidad sobre cantidad: foco en activación + variantes desafiantes
  // - Sin barra: 3 ejercicios × 3 series por grupo
  principles: [
    { icon: "📅", title: "Frecuencia", text: "2× por semana cada grupo muscular para máximos resultados" },
    { icon: "📊", title: "Volumen", text: "8 a 15 series semanales por grupo (sumando variantes)" },
    { icon: "🎯", title: "Variantes", text: "Máximo 5 variaciones del mismo patrón por rutina" },
    { icon: "🔥", title: "Intensidad", text: "Cerca del fallo muscular en cada serie" },
    { icon: "✨", title: "Calidad", text: "Foco en activación del músculo + variantes desafiantes" },
    { icon: "🏞️", title: "Sin barra", text: "Si la plaza no tiene barra: 3 ejercicios × 3 series" },
  ],

  // Mapeo nombre español → archivo de imagen oficial Sparta (en /img/)
  // y nombre original portugués (referencia al curso). Los ejercicios sin
  // imagen oficial caen al fallback de YouTube search.
  images: {
    "Flexiones militares":          { file: "flexao-militar.jpg",            pt: "Flexão Militar" },
    "Flexiones diamante":           { file: "flexao-diamante.jpg",           pt: "Flexão Diamante" },
    "Flexiones declinadas":         { file: "flexao-declinada.jpg",          pt: "Flexão Declinada" },
    "Flexiones hindú":              { file: "flexao-hindu.jpg",              pt: "Flexão Hindu" },
    "Flexiones explosivas":         { file: "flexao-explosiva.jpg",          pt: "Flexão Explosiva" },
    "Flexiones arquero":            { file: "flexao-arqueiro.jpg",           pt: "Flexão Arqueiro" },
    "Flexiones arquero unilateral": { file: "flexao-arqueiro.jpg",           pt: "Flexão Arqueiro" },
    "Flexiones abre y cierra":      { file: "flexao-abre-e-fecha.jpg",       pt: "Flexão Abre e Fecha" },
    "Pike push-up":                 { file: "flexao-pike.jpg",               pt: "Flexão Pike" },
    "Pike push-up elevadas":        { file: "pike-elevada.jpg",              pt: "Pike Elevada" },
    "Pseudo planche push-up":       { file: "pseudo-planche-push-ups.jpg",   pt: "Pseudo Planche Push-Ups" },
    "Planche lean":                 { file: "planche-lean.jpg",              pt: "Planche Lean" },
    "Planche lean (progresión)":    { file: "planche-lean.jpg",              pt: "Planche Lean" },
    "Planche lean (intensidad)":    { file: "planche-lean.jpg",              pt: "Planche Lean" },
    "Fondos en paralelas":          { file: "dips-na-barra-reta.jpg",        pt: "Dips na Barra Reta (variante)" },
    "Fondos en barra recta":        { file: "dips-na-barra-reta.jpg",        pt: "Dips na Barra Reta" },
    "Fondos profundos en paralelas":{ file: "dips-na-barra-reta.jpg",        pt: "Dips na Barra Reta (profundo)" },
    "Plancha isométrica":           { file: "prancha-isometrica.jpg",        pt: "Prancha Isométrica" },
    "Plancha invertida":            { file: "prancha-invertida.jpg",         pt: "Prancha Invertida" },
    "Shoulder tap":                 { file: "shoulder-tap.jpg",              pt: "Shoulder Tap" },
    "Shoulder tap lento":           { file: "shoulder-tap.jpg",              pt: "Shoulder Tap (lento)" },
    "Shoulder tap avanzado":        { file: "shoulder-tap.jpg",              pt: "Shoulder Tap (avanzado)" },
    "Hollow body hold":             { file: "canoinha-hollow-body.jpg",      pt: "Canoinha (hollow body)" },
    "Abdominal escalador":          { file: "abdominal-escalador.jpg",       pt: "Abdominal Escalador" },

    "Dominadas pronas":             { file: "barra-fixa-pull-up.jpg",        pt: "Barra Fixa - Pull Up" },
    "Dominadas estrictas":          { file: "barra-fixa-pull-up.jpg",        pt: "Barra Fixa - Pull Up (estricta)" },
    "Dominadas supinas (chin-up)":  { file: "barra-fixa-pull-up.jpg",        pt: "Barra Fixa - Pull Up (chin-up)" },
    "Barra explosiva":              { file: "barra-explosiva.jpg",           pt: "Barra Explosiva" },
    "Remo australiano":             { file: "remada-com-cadeira.jpg",        pt: "Remada com Cadeira (similar)" },
    "Remada no L":                  { file: "remada-no-l-front-lever.jpg",   pt: "Remada no L (front lever)" },
    "Remada no L (front lever row)":{ file: "remada-no-l-front-lever.jpg",   pt: "Remada no L (front lever)" },
    "Puxada no chão":               { file: "puxada-no-chao.jpg",            pt: "Puxada no Chão" },
    "Reverse deadlift":             { file: "reverse-deadlift.jpg",          pt: "Reverse Deadlift" },
    "Leg raise colgado":            { file: "leg-raise.jpg",                 pt: "Leg Raise" },
    "Leg raise lento":              { file: "leg-raise.jpg",                 pt: "Leg Raise (lento)" },
    "Toes to bar":                  { file: "toes-to-bar.jpg",               pt: "Toes To Bar" },
    "Front lever tuck raise":       { file: "front-lever-tuck-raise.jpg",    pt: "Front Lever Tuck Raise" },
    "Front lever advanced tuck hold":{ file: "front-lever-advanced-tuck.jpg",pt: "Front Lever Advanced Tuck" },
    "Front lever raises":           { file: "front-lever-raises.jpg",        pt: "Front Lever Raises" },

    "Sentadilla estándar":          { file: "agachamento-padrao.jpg",        pt: "Agachamento (padrão)" },
    "Sentadilla sumo":              { file: "agachamento-sumo.jpg",          pt: "Agachamento Sumo" },
    "Sentadilla isométrica":        { file: "agachamento-isometrico.jpg",    pt: "Agachamento Isométrico" },
    "Búlgaro profundo":             { file: "bulgaro-a-fundo.jpg",           pt: "Búlgaro - A Fundo" },
    "Búlgaro a fondo":              { file: "bulgaro-a-fundo.jpg",           pt: "Búlgaro - A Fundo" },
    "Búlgaro alternado explosivo":  { file: "bulgaro-alternado-explosivo.jpg",pt: "Búlgaro Alternado (Explosivo)" },
    "Cossack squat":                { file: "cossack-squat.jpg",             pt: "Cossack Squat" },
    "Pistol squat asistido":        { file: "pistol-squat-assistido.jpg",    pt: "Pistol Squat Assistido" },
    "Pistol squat libre":           { file: "pistol-squat.jpg",              pt: "Pistol Squat" },
    "Sissy squat":                  { file: "sissy-squat.jpg",               pt: "Sissy Squat" },
    "Stiff unilateral":             { file: "stiff-unilateral.jpg",          pt: "Stiff Unilateral" },
    "Glute bridge":                 { file: "extensao-de-quadril.jpg",       pt: "Extensão de Quadril" },
    "Glute bridge unilateral":      { file: "extensao-de-quadril-unilateral.jpg",pt: "Extensão de Quadril Unilateral" },
    "Coice glúteos (donkey kick)":  { file: "coice-gluteos.jpg",             pt: "Coice Glúteos" },
    "Pantorrilla unilateral":       { file: "panturrilha-unilateral.jpg",    pt: "Panturrilha Unilateral" },
    "Saltos de pantorrilla":        { file: "saltos-panturrilha.jpg",        pt: "Saltos Panturrilha" },
    "Agachamento con salto":        { file: "agachamento-com-salto.jpg",     pt: "Agachamento com Salto" },

    // ─── Complementos (skills + parallettes + bandas + anillas) ───
    // Algunos usan thumbnail oficial Sparta de módulos relacionados; el resto cae a placeholder.
    "Tuck planche en suelo":             { file: "punhos-sparta.jpg",          pt: "Tuck Planche (skill — Punhos de Aço)" },
    "Anillas - Ring rows":               null,
    "Pistol squat asistido con banda":   { file: "pernas-sparta.jpg",          pt: "Pistol Squat (banda — Treino de Pernas)" },
    "Dragon flag tuck":                  { file: "core-ferro-sparta.jpg",      pt: "Dragon Flag tuck (Core de Ferro)" },
    "Anillas/parallettes push-ups":      { file: "punhos-sparta.jpg",          pt: "Push-up en accesorios (Punhos de Aço)" },
    "Human flag tuck hold":              null,
    "Banded glute bridge":               { file: "gluteos-sparta.jpg",         pt: "Glute bridge con banda (Glúteos em Casa)" },
    "L-sit en parallettes":              { file: "lsit-sparta.jpg",            pt: "L-Sit (Dicas do L-Sit)" },
    "Wall walk → handstand contra pared":{ file: "escapulas-sparta.jpg",       pt: "Handstand prep (Escápulas de Titânio)" },
    "Anillas - Muscle up negativos":     { file: "muscleup-sparta.jpg",        pt: "Muscle Up (Dicas para o Muscle Up)" },
    "Shrimp squat asistido":             { file: "pernas-sparta.jpg",          pt: "Shrimp Squat (Treino de Pernas)" },
    "Dragon flag completo":              { file: "core-ferro-sparta.jpg",      pt: "Dragon Flag completo (Core de Ferro)" },

    // Sin imagen oficial — fallback YouTube
    "Flagpole": null,
  },

  weeks: [
    {
      id: "S1",
      name: "Semana 1",
      tagline: "Adaptación + volumen",
      color: "#3b82f6",
      days: [
        {
          id: "S1D1",
          name: "Día 1",
          focus: "Pecho + Tríceps",
          emoji: "💪",
          warmup: "5 min · movilidad de hombros + 20 jumping jacks + 10 flexiones lentas",
          exercises: [
            { name: "Flexiones militares", sets: 4, reps: "12", cue: "Codos a 45°, cuerpo recto, baja en 2s." },
            { name: "Flexiones diamante", sets: 3, reps: "12", cue: "Manos forman diamante bajo el pecho, codos pegados." },
            { name: "Fondos en paralelas", sets: 4, reps: "10", cue: "Hombros bajos, baja hasta 90° en codos, evita columpiar." },
            { name: "Flexiones declinadas", sets: 3, reps: "10", cue: "Pies elevados (banco/escalón), foco pecho alto." },
            { name: "Flexiones hindú", sets: 3, reps: "10", cue: "Movimiento de yoga: bajada perro mirando abajo → cobra." },
            { name: "Plancha isométrica", sets: 3, reps: "45 s", cue: "Cuerpo recto, glúteos activos, mirada al suelo." },
            { name: "Tuck planche en suelo", sets: 4, reps: "15 s", cue: "Skill empuje: rodillas pegadas al pecho, pies despegan, peso adelante." },
          ],
        },
        {
          id: "S1D2",
          name: "Día 2",
          focus: "Espalda + Bíceps",
          emoji: "🏋️",
          warmup: "5 min · giros de hombros + 10 dead-hangs cortos + 10 remos australianos suaves",
          exercises: [
            { name: "Dominadas pronas", sets: 4, reps: "6-8", cue: "Agarre ancho, lleva pecho a la barra, baja controlado." },
            { name: "Remo australiano", sets: 4, reps: "12", cue: "Barra baja, cuerpo recto, lleva pecho a la barra." },
            { name: "Dominadas supinas (chin-up)", sets: 3, reps: "8", cue: "Agarre supino, foco bíceps, cuerpo sin columpio." },
            { name: "Puxada no chão", sets: 3, reps: "10", cue: "Tirada en el suelo: tracciona con codos pegados al cuerpo." },
            { name: "Reverse deadlift", sets: 3, reps: "8", cue: "Cadena posterior: bisagra de cadera con piernas casi rectas." },
            { name: "Leg raise colgado", sets: 3, reps: "12", cue: "No columpies, sube piernas con control, baja lento." },
            { name: "Anillas - Ring rows", sets: 4, reps: "10", cue: "En argollas (o TRX): cuerpo recto, tira al pecho, codos pegados." },
          ],
        },
        {
          id: "S1D3",
          name: "Día 3",
          focus: "Piernas + Glúteo",
          emoji: "🦵",
          warmup: "5 min · sentadillas al aire + lunges suaves + movilidad de cadera",
          exercises: [
            { name: "Sentadilla estándar", sets: 4, reps: "20", cue: "Pies al ancho de hombros, rodilla siguiendo pie, espalda recta." },
            { name: "Búlgaro profundo", sets: 3, reps: "12 c/lado", cue: "Pie atrás elevado, baja hasta que muslo quede paralelo al suelo." },
            { name: "Cossack squat", sets: 3, reps: "8 c/lado", cue: "Lateral profundo, pie estirado al lado, talón apoyado." },
            { name: "Glute bridge", sets: 4, reps: "15", cue: "Acuesta de espalda, eleva cadera apretando glúteos arriba." },
            { name: "Pantorrilla unilateral", sets: 3, reps: "20 c/pie", cue: "Una pierna, sube en máxima punta, baja completo." },
            { name: "Sentadilla isométrica", sets: 2, reps: "30 s", cue: "Espalda contra pared, muslos paralelos al suelo." },
            { name: "Pistol squat asistido con banda", sets: 3, reps: "6 c/pierna", cue: "Banda elástica colgando arriba como asistencia para bajar a pistol." },
          ],
        },
        {
          id: "S1D4",
          name: "Día 4",
          focus: "Hombros + Core",
          emoji: "🛡️",
          warmup: "5 min · círculos de brazos + scapular pulls + 30 s plancha suave",
          exercises: [
            { name: "Pike push-up", sets: 4, reps: "10", cue: "Cadera arriba (V invertida), baja la cabeza entre las manos." },
            { name: "Pseudo planche push-up", sets: 3, reps: "6", cue: "Manos a la altura de cadera, dedos hacia atrás, peso adelante." },
            { name: "Planche lean", sets: 4, reps: "25 s", cue: "Manos al piso, inclínate adelante manteniendo brazos rectos." },
            { name: "Shoulder tap", sets: 3, reps: "40 s", cue: "Plancha alta, toca hombro contrario sin rotar caderas." },
            { name: "Hollow body hold", sets: 3, reps: "30 s", cue: "Acostado, lumbar contra el suelo, brazos y piernas elevados." },
            { name: "Toes to bar", sets: 3, reps: "8", cue: "Colgado, lleva puntas a la barra sin balancearte." },
            { name: "Dragon flag tuck", sets: 3, reps: "8", cue: "Acostado, agarra algo arriba, eleva cuerpo y baja lento (rodillas tucked)." },
          ],
        },
      ],
    },
    {
      id: "S2",
      name: "Semana 2",
      tagline: "Potencia + técnica",
      color: "#10b981",
      days: [
        {
          id: "S2D1",
          name: "Día 1",
          focus: "Pecho + Tríceps",
          emoji: "💥",
          warmup: "5 min · movilidad + 10 flexiones militares + 5 fondos suaves",
          exercises: [
            { name: "Flexiones explosivas", sets: 4, reps: "8", cue: "Sube con explosión hasta que las manos despeguen del piso." },
            { name: "Flexiones arquero", sets: 4, reps: "6 c/lado", cue: "Brazo de apoyo flexiona, el otro queda extendido al lado." },
            { name: "Fondos en barra recta", sets: 4, reps: "10", cue: "En una sola barra horizontal, manos juntas, codos atrás." },
            { name: "Flexiones abre y cierra", sets: 3, reps: "16", cue: "Alterna manos anchas y manos juntas en cada repetición." },
            { name: "Pike push-up elevadas", sets: 3, reps: "6", cue: "Pies sobre banco/escalón, simula HSPU progresivo." },
            { name: "Plancha invertida", sets: 3, reps: "45 s", cue: "Sentado, manos atrás, eleva cadera y forma línea recta." },
            { name: "Anillas/parallettes push-ups", sets: 4, reps: "8", cue: "En argollas o mini-paralelas: inestable, fuerza estabilizadora extra." },
          ],
        },
        {
          id: "S2D2",
          name: "Día 2",
          focus: "Espalda + Bíceps",
          emoji: "⚡",
          warmup: "5 min · scapular pulls + 5 dominadas suaves + remo australiano ligero",
          exercises: [
            { name: "Barra explosiva", sets: 4, reps: "5", cue: "Dominada potente: tira tan fuerte que pecho pase la barra." },
            { name: "Dominadas estrictas", sets: 4, reps: "6", cue: "Sin pies tocando, sin balanceo, baja controlado 3 s." },
            { name: "Remada no L", sets: 4, reps: "8", cue: "Cuerpo en L bajo la barra, tira al pecho — entrada al front lever." },
            { name: "Front lever tuck raise", sets: 3, reps: "6", cue: "Colgado, eleva piernas en tuck hasta horizontal, controla bajada." },
            { name: "Leg raise lento", sets: 3, reps: "10", cue: "Mismo movimiento, pero sube/baja en 3-4 s cada fase." },
            { name: "Flagpole", sets: 3, reps: "20 s", cue: "Cuerpo lateral a la barra vertical — dificultad alta, progresá." },
            { name: "Human flag tuck hold", sets: 3, reps: "15 s", cue: "Barra vertical, agarre alto+bajo, eleva cuerpo lateral con rodillas tucked." },
          ],
        },
        {
          id: "S2D3",
          name: "Día 3",
          focus: "Piernas + Glúteo",
          emoji: "🚀",
          warmup: "5 min · jumping jacks + sentadillas con salto suaves + movilidad de tobillo",
          exercises: [
            { name: "Sentadilla sumo", sets: 4, reps: "18", cue: "Pies muy abiertos, rodillas afuera, baja recto." },
            { name: "Pistol squat asistido", sets: 4, reps: "6 c/pierna", cue: "Sostente de un objeto/barra para bajar a una pierna." },
            { name: "Búlgaro alternado explosivo", sets: 3, reps: "10 c/pierna", cue: "En pie atrás elevado, sube con potencia (mini-salto)." },
            { name: "Stiff unilateral", sets: 3, reps: "10 c/pierna", cue: "Una pierna apoyada, otra atrás recta, bisagra de cadera." },
            { name: "Saltos de pantorrilla", sets: 3, reps: "20", cue: "Salto pequeño usando solo el tobillo, mínimo doblar rodilla." },
            { name: "Glute bridge unilateral", sets: 3, reps: "12 c/pierna", cue: "Una pierna apoyada, otra estirada, sube con glúteo." },
            { name: "Banded glute bridge", sets: 3, reps: "15", cue: "Banda elástica alrededor de las rodillas, abre afuera mientras subís." },
          ],
        },
        {
          id: "S2D4",
          name: "Día 4",
          focus: "Hombros + Core",
          emoji: "🎯",
          warmup: "5 min · giros de hombros + 30 s plancha + 10 pike push-ups suaves",
          exercises: [
            { name: "Pike push-up elevadas", sets: 4, reps: "8", cue: "Pies en banco, baja la cabeza al suelo entre las manos." },
            { name: "Pseudo planche push-up", sets: 3, reps: "6", cue: "Igual que S1 pero con más peso adelantado." },
            { name: "Planche lean (progresión)", sets: 4, reps: "35 s", cue: "Cada semana se suman 5-10s — aumenta inclinación gradual." },
            { name: "Shoulder tap lento", sets: 3, reps: "45 s", cue: "Pausa 1 s en cada toque, control sobre velocidad." },
            { name: "Abdominal escalador", sets: 3, reps: "35 s", cue: "Plancha alta, lleva rodillas al pecho alternadas con ritmo." },
            { name: "Front lever advanced tuck hold", sets: 3, reps: "20 s", cue: "Tuck más abierto que tuck básico — escápulas activas." },
            { name: "L-sit en parallettes", sets: 4, reps: "15 s", cue: "Mini-paralelas (o banco): brazos rectos, piernas estiradas paralelas al suelo." },
          ],
        },
      ],
    },
    {
      id: "S3",
      name: "Semana 3",
      tagline: "Skills + intensidad",
      color: "#f59e0b",
      days: [
        {
          id: "S3D1",
          name: "Día 1",
          focus: "Pecho + Tríceps",
          emoji: "🔥",
          warmup: "5 min · movilidad de muñecas + 10 flexiones militares + 5 hindú suaves",
          exercises: [
            { name: "Flexiones hindú", sets: 4, reps: "10", cue: "Movimiento yoga completo, fluido, sin pausas." },
            { name: "Pseudo planche push-up", sets: 4, reps: "6", cue: "Skill consolidación — mantén forma estricta." },
            { name: "Fondos profundos en paralelas", sets: 4, reps: "10", cue: "Baja más allá de 90° si tu hombro lo permite — pecho focus." },
            { name: "Flexiones arquero unilateral", sets: 3, reps: "8 c/lado", cue: "Acerca el peso al brazo flexionado, otro brazo recto." },
            { name: "Planche lean (intensidad)", sets: 4, reps: "40 s", cue: "Máxima inclinación que aún aguantes 40s — semanas progresan." },
            { name: "Plancha isométrica", sets: 3, reps: "75 s", cue: "Forma estricta o cortá la serie." },
            { name: "Wall walk → handstand contra pared", sets: 3, reps: "3", cue: "Sube de plancha hasta tocar la pared con el pecho, sostené 10s arriba." },
          ],
        },
        {
          id: "S3D2",
          name: "Día 2",
          focus: "Espalda + Bíceps",
          emoji: "🎖️",
          warmup: "5 min · scapular pulls + 5 dominadas + 1 min dead hang",
          exercises: [
            { name: "Dominadas estrictas", sets: 4, reps: "6", cue: "Tope en pecho, sin balanceo, bajada controlada 3-4 s." },
            { name: "Front lever raises", sets: 4, reps: "5", cue: "Desde colgado, sube a posición horizontal — skill avanzada." },
            { name: "Remada no L (front lever row)", sets: 4, reps: "8", cue: "Cuerpo en L horizontal, tira al pecho." },
            { name: "Reverse deadlift", sets: 4, reps: "8", cue: "Bisagra de cadera con cadena posterior tensa." },
            { name: "Toes to bar", sets: 4, reps: "10", cue: "Sin balanceo, control en bajada, mantené hollow." },
            { name: "Leg raise lento", sets: 3, reps: "12", cue: "Tempo 3-1-3 (3s subir, 1 pausa, 3s bajar)." },
            { name: "Anillas - Muscle up negativos", sets: 3, reps: "3", cue: "Desde apoyo arriba en anillas, baja LENTO controlado a la posición de pull." },
          ],
        },
        {
          id: "S3D3",
          name: "Día 3",
          focus: "Piernas + Glúteo",
          emoji: "🏔️",
          warmup: "5 min · sentadillas al aire + lunges + movilidad de cadera profunda",
          exercises: [
            { name: "Pistol squat libre", sets: 4, reps: "5 c/pierna", cue: "Skill: sin asistencia, brazos al frente, talón apoyado." },
            { name: "Sissy squat", sets: 3, reps: "8", cue: "Inclínate atrás manteniendo rodillas adelantadas — cuádriceps total." },
            { name: "Búlgaro a fondo", sets: 3, reps: "12 c/pierna", cue: "Mayor amplitud, pierna trasera bien elevada, control bajada." },
            { name: "Agachamento con salto", sets: 3, reps: "12", cue: "Sentadilla con salto vertical máximo, aterriza suave." },
            { name: "Pantorrilla unilateral", sets: 4, reps: "22 c/pie", cue: "Misma forma, pero más reps y máxima amplitud." },
            { name: "Sentadilla isométrica", sets: 3, reps: "40 s", cue: "Pared o aire, muslos paralelos, no descanses sobre rodillas." },
            { name: "Shrimp squat asistido", sets: 3, reps: "5 c/pierna", cue: "Una pierna agarrada atrás, baja hasta que la rodilla atrás toque el suelo." },
          ],
        },
        {
          id: "S3D4",
          name: "Día 4",
          focus: "Hombros + Core",
          emoji: "👑",
          warmup: "5 min · movilidad + 30 s hollow body + 5 pike push-ups suaves",
          exercises: [
            { name: "Pike push-up", sets: 4, reps: "12", cue: "Volumen alto con forma estricta." },
            { name: "Shoulder tap avanzado", sets: 3, reps: "60 s", cue: "Más tiempo, eleva un pie en simultáneo (cross-body)." },
            { name: "Hollow body hold", sets: 3, reps: "60 s", cue: "Mantén lumbar contra el suelo el tiempo completo." },
            { name: "Plancha isométrica", sets: 3, reps: "90 s", cue: "Si bajás cadera, cortá la serie y reseteá." },
            { name: "Plancha invertida", sets: 3, reps: "60 s", cue: "Cuerpo recto, glúteos activos, mira al techo." },
            { name: "Coice glúteos (donkey kick)", sets: 3, reps: "15 c/pierna", cue: "Cuatro apoyos, lleva talón al techo apretando glúteo." },
            { name: "Dragon flag completo", sets: 3, reps: "6", cue: "Skill final: cuerpo recto desde hombros a pies, baja en 3 s sin tocar." },
          ],
        },
      ],
    },
  ],
};

function youtubeSearchUrl(name) {
  const q = `${name} calistenia tutorial`.replace(/\s+/g, "+");
  return `https://www.youtube.com/results?search_query=${q}`;
}

function exerciseImage(name) {
  const meta = PLAN.images[name];
  if (!meta || !meta.file) return null;
  return { src: `./img/${meta.file}`, pt: meta.pt };
}
