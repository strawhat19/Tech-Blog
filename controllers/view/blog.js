const router = require(`express`).Router();
const { Post } = require(`../../models`);

router.get(`/new`, (req, res) => {
    res.render(`blogNew`)
})

router.get(`/:id`, (req, res) => {
    const post = {
        title: `First Blog`,
        content:
          `Insight features our unique thought leadership, commentary, and research reports, along with webcasts, infographics, and product news. Get articles like our weekly Earnings Insight, ETF fund flows, deep dives into performance and fixed income analysis, and more when you subscribe. Complete the form to subscribe by email today.`,
        user: {
          userName: `strawhat19`,
          name: `Ricky Ahmed`,
        },
        createdAt: `YYYY-MM-DD HH:MM:SS`,
      };
    res.render(`blogPost`, post)
})

router.get(`/edit/:id`, (req, res) => {
    const blogData = {
        title: `Title`,
        content:
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus diam, vehicula id elementum sit amet, accumsan at tellus. Donec sed lobortis lectus. Quisque dapibus lacinia orci, iaculis sagittis nisl pharetra eu. Cras sollicitudin lacinia lacus nec semper. Duis nec ligula eros. Phasellus bibendum mauris vel laoreet condimentum.`,
      };
    res.render(`blogEdit`, {blogData})
})

module.exports = router;