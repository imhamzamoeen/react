
import React, { Component } from 'react'

import SimpleReactCalendar from 'simple-react-calendar'

class App extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}
export default App;