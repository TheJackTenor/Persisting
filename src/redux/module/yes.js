const formName = `MyForm`

const formTransform = createTransform(
  (inboundState, key) => {
    return {
      ...inboundState,
      [formName]: {
        values: {
          username: _.get(inboundState, `${ MyForm }.values.username`)
        }
      }
    }
  },
  (outboundState, key) => {
    return outboundState
  },
  { whitelist: [`form`] }
)

persistStore(store, {
  whitelist: [
    `form`
  ],
  transforms: [
    formTransform
  ]
})