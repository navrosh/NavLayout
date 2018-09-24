import NavLayout from '../src/NavLayout.min.js';

describe('test', () => {
  it('test NavLayout initialization..', () => {
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
    })) === null, 'not passed :(');
  });
});

export default NavLayout;

