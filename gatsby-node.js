// All things things we can define here
// https://www.gatsbyjs.org/docs/node-apis/

// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
const path = require('path')

module.exports.onCreateNode = ({
    node,
    actions
}) => {
    const {
        createNodeField
    } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // console.log(JSON.stringify(node, undefined, 4))
        // console.log('@@@@@@@@@@', slug)

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

    // Transform the new node here and create a new node or
    // create a new node field.
}