// Transform the new node here and create a new node or
// create a new node field.

// All things things we can define here
// https://www.gatsbyjs.org/docs/node-apis/

// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
const path = require('path')

module.exports.createPages = async ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions

    // 1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // 2. Get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    // 3. Create new pages
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}