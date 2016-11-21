import React, { Component } from 'react'

export default ({object}) =>
  <pre>{JSON.stringify(object, null, 4)}</pre>
