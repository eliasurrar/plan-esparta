# Plan Esparta — Elias

Plan de calistenia personalizado de **4 días/semana × 3 semanas** basado en el Método Esparta.
Foco: ejercicios típicos de plaza con barras (paralelas, dominada, suelo).

## Estructura

| Semana | Foco | Día 1 | Día 2 | Día 3 | Día 4 |
|---|---|---|---|---|---|
| **S1** Adaptación | Base + volumen | Pecho + Tríceps | Espalda + Bíceps | Piernas + Glúteo | Hombros + Core |
| **S2** Potencia | Variantes explosivas | Pecho + Tríceps | Espalda + Bíceps | Piernas + Glúteo | Hombros + Core |
| **S3** Skills | Consolidación + intensidad | Pecho + Tríceps | Espalda + Bíceps | Piernas + Glúteo | Hombros + Core |

Cada día se enfoca en **1-2 grupos musculares**, con poca repetición de ejercicios entre semanas (las variantes recurrentes progresan en dificultad).

## Sitio

- `index.html` + `styles.css` + `app.js` + `data.js`
- Sin dependencias, vanilla JS
- Progreso persistente por dispositivo (localStorage)
- Cada ejercicio incluye link a búsqueda de YouTube para ver demostración

## Uso

Solo abrir `index.html` en un navegador, o visitar la versión publicada en GitHub Pages.

## Personalización

Para editar el plan: modificar `data.js`. La estructura es:

```js
{
  weeks: [
    {
      id: "S1", name: "Semana 1", tagline: "...", color: "#hex",
      days: [
        {
          id: "S1D1", name: "Día 1", focus: "...", emoji: "💪",
          warmup: "...",
          exercises: [
            { name: "...", sets: 4, reps: "12", cue: "..." },
          ]
        }
      ]
    }
  ]
}
```
