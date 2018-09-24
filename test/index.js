
import NavLayout from '../src/js/NavLayout.min';

describe('test', () => {
  it('test NavLayout initialization..', () => {
    assert(NavLayout([{
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
    }]) === null, 'not passed :(');
  });
});

export default NavLayout;

