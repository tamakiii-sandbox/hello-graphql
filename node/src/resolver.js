const buildResolvers = (data) => {
  const humans = data.humans;
  return {
    Query: {
      human: (_, params) => {
        if (!params.id) {
          throw new Error("Bad Request")
        }
        var id = parseInt(params.id)
        var human = humans.find(human => human.id === id)
        if (!human) {
          throw new Error("Not found")
        }
        return human.toResponse()
      },
      humans: () => humans.map(human => human.toResponse()),
    }
  }
}

module.exports = { buildResolvers }