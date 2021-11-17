const router = require(`express`).Router();
const { Post } = require(`../../models`);

router.post(`/`, async (req, res) => {
    try {
        const postData = await Post.create({ 
          title: req.body.title, 
          content: req.body.content,
          user_id: req.session.user_id
        });
        if (postData) {
            res.status(201).send(postData)
        } else {
          res.status(400).send(`post not created`)
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.put(`/:id`, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (postData) {
            res.status(201).send(postData)
        } else {
          res.status(400).send(`post not created`)
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.delete(`/:id`, async (req, res) => {
    try {
        const data = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (data) {
            res.status(200).end();
          } else {
            res.status(404).end();
          }
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;