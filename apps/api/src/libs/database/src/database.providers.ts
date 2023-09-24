// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Task} from '@ng-learn/shared/util/api-interfaces';
import {Level} from 'level';

export const databaseProviders = [
  {
    provide: 'DATABASE',
    useFactory: async () => {
      const db = await new Level('./db', { valueEncoding: 'json' });
      const tasks = db.sublevel<string, Task>('tasks', {
        valueEncoding: 'json',
      });
      // await tasks.clear();

      // const data: Task[] = [];
      //
      // data.forEach(async (d) => await tasks.put(d.id, d));
      return db;
    },
  },
];
