const router = require(`express`).Router();
const { Post, User } = require(`../../models`);
const withAuth = require(`../../utils/auth`);

router.get(`/`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const blogs = postData.map((post) => post.get({ plain: true }));

    res.render(`dashboard`, {blogs})
  } catch (err) {
    res.status(500).json(err);
  }
    
})

module.exports = router;