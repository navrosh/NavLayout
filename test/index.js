import { assert } from 'chai';
import NavLayout, { _Function } from '../src';

describe('test.', () => {
  it('should test default function', () => {
    const expectedVal = 'I am the default _Function'
    assert(NavLayout(JSON.stringify({
      spliter: {
        areaSize: '9px',
        barSize: '8px'
      },
      tabs: {
        dragLockTime: 150,
        spacing: '1px'
      },
      data: [
        {
          name: '0',
          connect: null,
          dock: 'bottom',
          title: '0',
          maximize: 'parent',
          popout: 'parent',
          close: true
        }
      ]
    })) === expectedVal, 'not passed :(');
  });

  it('should test _Function', () => {
    const expectedVal = 'I am just a _Function'
    assert(_Function() === expectedVal, 'failed :(');
  });
});
