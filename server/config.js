module.exports = {
    api: {
        key: process.env.key || 'test',
        size: 200,
        urls: {
            tags: 'http://content.guardianapis.com/tags',
            search: 'http://content.guardianapis.com/search'
        }
    }
}
