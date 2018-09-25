
// import { NavLayout } from '../src/js/NavLayout';
// export default NavLayout;
import nl from '../src';
//var _NavLayout = require('NavLayout');

var _value;
describe('test', () => {

  it('Checking NavLayout initialization..', () => {
    _value = nl.NavLayout({
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
    });
    console.log(_value);
  });

  it('adding a new Tab to NavLayout..', () => {
    _value.addTab(
      [
        {
          name: '32',
          connect: null,
          dock: 'right',
          title: '32'
        },
        {

          name: '33',
          connect: null,
          dock: 'right',
          title: '33'
        }
      ]
    )
  });
});

