import React from 'react';

import TimelapseIcon from '@material-ui/icons/Timelapse';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { Progress } from '@geist-ui/react';

const Chat = () => {
  return (

    <div className ="flex space-x-4 ...">
      <div className="flex-1 ...">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0">
            <TimelapseIcon/>
          </div>
          <div>
            <div class="text-xl font-medium text-black">Time</div>
            <p class="text-gray-500">Time is money!</p>
            <Progress type="success" value={45} max={50} />
          </div>
        </div>
      </div>

      <div className="flex-1 ...">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0">
            <InsertEmoticonIcon/>
          </div>
          <div>
            <div class="text-xl font-medium text-black">Happy</div>
            <p class="text-gray-500">Happy is life!</p>
            <Progress type="error" value={45}  max={50} />
          </div>
        </div>
      </div>

      <div className="flex-1 ...">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0">
            <MonetizationOnIcon />
          </div>
          <div>
            <div class="text-xl font-medium text-black">Money</div>
            <p class="text-gray-500">Money is time!</p>
            <Progress type="warning" value={90} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
