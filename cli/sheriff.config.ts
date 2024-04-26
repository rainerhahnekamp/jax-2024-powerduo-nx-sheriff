import { noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  tagging: {
    'src/app': {
      'shared/<shared>': 'shared',
      '<domain>/feat-<name>': ['domain:<domain>', 'type:feature'],
      '<domain>/<type>': ['domain:<domain>', 'type:<type>'],
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
