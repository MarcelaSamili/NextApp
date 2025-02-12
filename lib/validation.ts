import { init } from 'next/dist/compiled/webpack/webpack';
import z from 'zod';
export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  category: z.string().min(3).max(20),
  link: z.string().url(),
  /*.refine(async url => {
      try {
        const res = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        const contentType = res.headers.get('content-type');
        return contentType?.startsWith('image/');
      } catch {
        return false;
      }
    }),*/
  pitch: z.string().min(10),
});
//Valida se o endereço de imagem existe e se os outros
//parametros estão dentro do maximo e minimo.
