// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  // put your options here
})

// Declare a route
fastify.get('/api/v1/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get('/api/v1/health', async function handler (request, reply) {
  return { status: 'healthy' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}