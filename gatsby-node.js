/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path')
const fs = require('fs')

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  // No custom pages needed for now
}

/**
 * @type {import('gatsby').GatsbyNode['onPostBuild']}
 */
exports.onPostBuild = ({ actions }) => {
  // Copy _redirects file to public directory for static hosting
  const redirectsSource = path.join(__dirname, '_redirects')
  const redirectsTarget = path.join(__dirname, 'public', '_redirects')
  
  try {
    if (fs.existsSync(redirectsSource)) {
      fs.copyFileSync(redirectsSource, redirectsTarget)
      console.log('Copied _redirects file for static hosting')
    }
  } catch (error) {
    console.log('Could not copy _redirects file:', error.message)
  }
}