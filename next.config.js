const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/appyhub-website/' : '',
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './image-loader.js',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                svgo: false
                }
            }]
        })
        return config
    },
}

module.exports = nextConfig
