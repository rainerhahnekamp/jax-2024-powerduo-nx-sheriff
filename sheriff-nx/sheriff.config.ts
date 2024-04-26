import { noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  tagging: {
    'libs': {
      'shared/src': 'nx-lib',
      'shared/src/lib/<shared>': 'shared',
      '<lib>/src': 'nx-lib',
      '<domain>/src/lib/feat-<name>': ['domain:<domain>', 'type:feature'],
      '<domain>/src/lib/<type>': ['domain:<domain>', 'type:<type>'],
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
