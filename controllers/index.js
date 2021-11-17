const router = require(`express`).Router();

const homeRoutes = require(`./views/home`);
const authRoutes = require(`./views/auth`);
const dashboardRoutes = require(`./views/dashboard`);
const blogRoutes = require(`./views/blog`);
const apiAuthRoutes = require(`./api/auth`);
const apiBlogRoutes = require(`./api/blog`);
const apiCommentRoutes = require(`./api/comment`);

router.use(`/`, homeRoutes);
router.use(`/`, authRoutes);
router.use(`/dashboard`, dashboardRoutes);
router.use(`/blogs`, blogRoutes);
router.use(`/api`, apiAuthRoutes);
router.use(`/api/blogs`, apiBlogRoutes);
router.use(`/api/comments`, apiCommentRoutes);

module.exports = router;