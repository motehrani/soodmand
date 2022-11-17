/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  lessVarsFilePath: './src/shared/styles/_ant.less',
  lessVarsFilePathAppendToEndOfContent: false,
  pageExtensions: ['page.tsx'],
}

module.exports = withAntdLess(nextConfig)
