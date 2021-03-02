import React, { Component } from 'react';
class Insctuction extends Component {
    render() {
      return(
          <div className = "instr">
            <h2>Hotkeys</h2>
              <div>
              <ul>
                  <li>⬆️ - keys UP and W</li>
                  <li>⬇️ - keys DOWN and S</li>
                  <li>⬅️ - keys LEFT and A</li>
                  <li>➡️ - keys RIGHT and D</li>
            </ul>
            </div>
          </div>
      )
    }
  }
  export default Insctuction;