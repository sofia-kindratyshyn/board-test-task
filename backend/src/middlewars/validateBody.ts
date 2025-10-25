// import { NextFunction, Response, Request } from 'express';
// import createHttpError from 'http-errors';

// export const validateBody = (schema: any) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.validateAsync(req.body, {
//         abortEarly: false,
//         convert: true,
//       });
//       next();
//     } catch (err) {
//       const error = createHttpError(
//         400,
//         'Bad Request',
//         Array.isArray(err.details)
//           ? err.details.map(({ message, path }) => {
//               return {
//                 message,
//                 path,
//               };
//             })
//           : { errors: err.details },
//       );
//       next(error);
//     }
//   };
// };

// export const validateQuery = async (schema) => {
//   return async (req: Response, res: Request, next: NextFunction) => {
//     try {
//       await schema.validateAsync(req.query, {
//         abortEarly: false,
//         convert: true,
//       });
//       next();
//     } catch (err) {
//       const error = createHttpError(
//         400,
//         'Bad Request',
//         Array.isArray(err.details)
//           ? err.details.map(({ message, path }) => {
//               return {
//                 message,
//                 path,
//               };
//             })
//           : { errors: err.details },
//       );
//       next(error);
//     }
//   };
// };
