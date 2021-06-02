import React, { useState } from 'react';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const trafficLight = createMachine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow',
      },
    },
    yellow: {
      on: {
        TIMER: 'red',
      },
    },
    red: {
      on: {
        TIMER: 'green',
      },
    },
  },
});

const colors = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
  green: 'bg-green-500',
};

const App = () => {
  const [state, send] = useMachine(trafficLight);
  return (
    <div className="m-5">
      <p className="mb-5 flex items-center">
        Traffic light is:
        <span
          className={`${
            colors[state.value]
          } ml-2 mr-1 w-4 h-4 inline-block rounded-full`}
        ></span>
        {state.value}
      </p>
      <button onClick={() => send('TIMER')} className="mb-5">
        Next
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default App;
