/* eslint-disable import/no-unresolved */

import { import1, import2 } from 'test';
import import3 from 'test-import/with-very-long-name/with-very-long-name/with-very-long-name/with-very-long-name/with-very-long-name';

const test1 = {};

const test2 = {
    import1,
    import2,
    import3,
};

export {
    test1 as Test1,
    test2 as Test2,
};
