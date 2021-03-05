import { graphql, rest } from 'msw';

export const handlers = [
  rest.get('/call', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'OK',
      })
    );
  }),
  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id: userId,
        firstName: 'John',
        lastName: 'Wick',
      })
    );
  }),
  graphql.query('CurrentUser', (req, res, ctx) => {
    const { userId } = req.variables;
    return res(
      ctx.data({
        user: {
          id: userId,
          firstName: 'John',
          lastName: 'Wick',
        },
      })
    );
  }),
  graphql.mutation('UpdateCurrentUser', (req, res, ctx) => {
    const { userId, firstName } = req.variables;
    return res(
      ctx.data({
        user: {
          id: userId,
          firstName,
          lastName: 'Wick',
        },
      })
    );
  }),
];
