import { noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  tagging: {
    'libs': {
      'shared/<shared>/src': 'shared',
      '<domain>/feat-<name>/src': ['domain:<domain>', 'type:feature'],
      '<domain>/<type>/src': ['domain:<domain>', 'type:<type>'],
    },
  },
  depRules: {
    root: ['type:api', 'shared', ({ to }) => to.startsWith('domain')],
    'domain:*': [sameTag, 'shared'],
    'type:api': ['type:feature', 'type:model', 'type:ui', 'type:data'],
    'type:feature': ['type:model', 'type:ui', 'type:data'],
    'type:ui': ['type:model'],
    'type:data': ['type:model'],
    'type:model': noDependencies,
    shared: 'shared',
  },
};
