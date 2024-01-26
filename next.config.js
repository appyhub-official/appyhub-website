/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
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
