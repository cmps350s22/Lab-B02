/*
1.Rewrite the you created in Part-2 using promises.
*/

import fs from 'fs-extra';

fs.readJson('data/course.json')
    .then(courses => {
        console.log(courses)
    })
    .catch(err => console.error(err))
