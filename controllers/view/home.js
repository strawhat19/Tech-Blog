const router = require(`express`).Router();
const { Post, User } = require(`../../models`);

router.get(`/`, async (req, res) => {
    const userId = 1;
    
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const blogs = postData.map((post) => {
        const data = post.get({ plain: true })

        return {
          ...data,
          isAuthor: data.user.id === userId,
        };
      });
  
      res.render(`home`, {blogs})
    } catch (err) {
      res.status(500).json(err);
    }
})

module.exports = router;