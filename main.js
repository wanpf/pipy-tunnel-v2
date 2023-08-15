((
  config = pipy.solve('config.js')?.(),
) => pipy()

.branch(
  Object.keys(config?.external || {}).length > 0, (
    $=>$.task().use('external/main.js')
  )
)

.branch(
  Object.keys(config?.internal || {}).length > 0, (
    $=>$.task().use('internal/main.js')
  )
)

)()