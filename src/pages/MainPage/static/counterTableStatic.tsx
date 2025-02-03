import { Counter } from '../../../components/Counter';
import { CounterGroup } from '../innerComponents';

export const counterTableHeaders = [
  'Color: primary, stroke: false',
  'Color: primary, stroke: true',
  'Color: secondary, stroke: false',
  'Color: secondary, stroke: true',
];

export const counterTableRows = [
  [
    'Size: extraLarge',
    <CounterGroup>
      <Counter size='extraLarge' label={1} />
      <Counter size='extraLarge' label={12} />
      <Counter size='extraLarge' label={123} />
      <Counter size='extraLarge' label='text' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='extraLarge' label={1} stroke />
      <Counter size='extraLarge' label={12} stroke />
      <Counter size='extraLarge' label={123} stroke />
      <Counter size='extraLarge' label='text' stroke />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='extraLarge' label={1} color='secondary' />
      <Counter size='extraLarge' label={12} color='secondary' />
      <Counter size='extraLarge' label={123} color='secondary' />
      <Counter size='extraLarge' label='text' color='secondary' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='extraLarge' label={1} color='secondary' stroke />
      <Counter size='extraLarge' label={12} color='secondary' stroke />
      <Counter size='extraLarge' label={123} color='secondary' stroke />
      <Counter size='extraLarge' label='text' color='secondary' stroke />
    </CounterGroup>,
  ],
  [
    'Size: large',
    <CounterGroup>
      <Counter size='large' label={12} />
      <Counter size='large' label={1} />
      <Counter size='large' label={123} />
      <Counter size='large' label='text' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='large' label={1} stroke />
      <Counter size='large' label={12} stroke />
      <Counter size='large' label={123} stroke />
      <Counter size='large' label='text' stroke />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='large' label={1} color='secondary' />
      <Counter size='large' label={12} color='secondary' />
      <Counter size='large' label={123} color='secondary' />
      <Counter size='large' label='text' color='secondary' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='large' label={1} color='secondary' stroke />
      <Counter size='large' label={12} color='secondary' stroke />
      <Counter size='large' label={123} color='secondary' stroke />
      <Counter size='large' label='text' color='secondary' stroke />
    </CounterGroup>,
  ],
  [
    'Size: medium',
    <CounterGroup>
      <Counter size='medium' label={12} />
      <Counter size='medium' label={1} />
      <Counter size='medium' label={123} />
      <Counter size='medium' label='text' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='medium' label={1} stroke />
      <Counter size='medium' label={12} stroke />
      <Counter size='medium' label={123} stroke />
      <Counter size='medium' label='text' stroke />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='medium' label={1} color='secondary' />
      <Counter size='medium' label={12} color='secondary' />
      <Counter size='medium' label={123} color='secondary' />
      <Counter size='medium' label='text' color='secondary' />
    </CounterGroup>,
    <CounterGroup>
      <Counter size='medium' label={1} color='secondary' stroke />
      <Counter size='medium' label={12} color='secondary' stroke />
      <Counter size='medium' label={123} color='secondary' stroke />
      <Counter size='medium' label='text' color='secondary' stroke />
    </CounterGroup>,
  ],
  [
    'Size: small',
    <Counter size='small' />,
    <Counter size='small' stroke />,
    <Counter size='small' color='secondary' />,
    <Counter size='small' stroke color='secondary' />,
  ],
  [
    'Pulse: true, size: small',
    <Counter size='small' pulse />,
    <Counter size='small' stroke pulse />,
    <Counter size='small' color='secondary' pulse />,
    <Counter size='small' stroke color='secondary' pulse />,
  ],
  [
    'Size: extraSmall',
    <Counter size='extraSmall' />,
    <Counter size='extraSmall' stroke />,
    <Counter size='extraSmall' color='secondary' />,
    <Counter size='extraSmall' stroke color='secondary' />,
  ],
  [
    'Pulse: true, size: extraSmall',
    <Counter size='extraSmall' pulse />,
    <Counter size='extraSmall' stroke pulse />,
    <Counter size='extraSmall' color='secondary' pulse />,
    <Counter size='extraSmall' stroke color='secondary' pulse />,
  ],
];
