const PROXY_CONFIG = [
    {
        context: [
            "/epi"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;