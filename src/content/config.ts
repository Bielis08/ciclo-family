import { defineCollection, z } from "astro:content";

const rutas = defineCollection({
    schema: z.object({
        titulo: z.string(),
        portada: z.string(),
        distancia: z.string(),
        desnivel: z.string(),
        alt_max: z.string(),
        alt_min: z.string(),
        dificultad: z.string(),
        mapa_img: z.string(),
        desnivel_img: z.string(),
    })
})

export const collections = { rutas }    