const SiteId = require('../models/SiteId');

const getCurrentSiteIdAndIncrement = async () => {
    try {
        let currentSiteId = await SiteId.findOne({});
        if (!currentSiteId) {
           currentSiteId = await SiteId.create({ siteId: 1 }); 
        }
        await SiteId.updateOne({}, {$set: {siteId: currentSiteId.siteId + 1}});
        return currentSiteId;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCurrentSiteIdAndIncrement,
}