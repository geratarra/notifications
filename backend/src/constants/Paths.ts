/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  Categories: {
    Base: "/categories",
    Get: "/"
  },
  Publish: {
    Base: "/publish",
    Post: "/"
  },
  Logs: {
    Base: "/logs",
    Get: "/"
  }
} as const;
