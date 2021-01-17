import React from 'react'
import { Tree } from '@geist-ui/react';

const Code = () => {
  const files = [{
    type: 'directory',
    name: 'controllers',
    extra: '1 file',
    files: [{
      type: 'file',
      name: 'cs.js',
      extra: '1kb',
    }],
  }, {
    type: 'directory',
    name: 'docs',
    extra: '2 files',
    files: [{
      type: 'file',
      name: 'controllers.md',
      extra: '2.5kb',
    }, {
      type: 'file',
      name: 'es6.md',
      extra: '2.9kb',
    }],
  }, {
     type: 'file',
     name: 'production.md',
     extra: '0.8kb',
   }, {
     type: 'file',
     name: 'views.md',
     extra: '8.1kb',
   }]
  return <Tree value={files} />
}

export default Code;