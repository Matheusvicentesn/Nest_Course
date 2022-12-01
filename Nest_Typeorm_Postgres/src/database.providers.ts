// import { DataSource } from 'typeorm';
// import { CourseRefactoringTest1669907989451 } from './migrations/1669907989451-CourseRefactoringTest';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'postgres',
//         host: 'db',
//         port: 5432,
//         username: 'postgres',
//         password: 'postgres',
//         database: 'postgres',

//         synchronize: true,
//         entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
//       });
//       return dataSource.initialize();
//     },
//   },
// ];

// export const dataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 3001,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'postgres',

//   synchronize: true,
//   entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
//   migrations: [CourseRefactoringTest1669907989451]
// });
