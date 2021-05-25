import React, { useState } from 'react';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const trafficLight = createMachine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
      on: {
        TIMER: 'red'
      }
    },
    red: {
      on: {
        TIMER: 'green'
      }
    }
  }
})

const App = () => {
  const [state, send] = useMachine(trafficLight);

  return (
    <div>
      <p>Traffic light is: {state.value}</p>
      <button onClick={() => send('TIMER')}>Next</button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default App;
