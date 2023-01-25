//console.log("olá!");

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

//nesse caso qualquer aplicação pode consumir dados
app.register(cors)
app.register(appRoutes)

/** poderia restringir quais url poderia acessar os dados
app.register(cors){
  origin: ['http://localhost:3333']
}
*/

/**
 * Métodos HTTP:
 * Get: pegar algo (pelo navegador)
 * Post: Criar alguma coisa (não acessa pelo navegador)
 * Put: atualizar recurso por completo 
 * Patch: atualizar um local específico 
 * Delete: deletar um recurso no back-end
 */
app.get('/', () => {
  return 'Hello World'
})

/* Old
app.get('/hello', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })
  return habits
})

*/

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})

