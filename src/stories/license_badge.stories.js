export default { title: 'LicenseBadge' }

const licenseSVG = (size, license) => `<svg ...>
<use href="license_badges/${size}/${license}.svg#layer1"></use>
</svg>`

const by = licenseSVG('big', 'by')
export const BY = () => `<div>${by}</div>`

const bysa = licenseSVG('big', 'by_sa')
export const BY_SA = () => `<div>${bysa}</div>`

const bynd = licenseSVG('big', 'by_nd')
export const BY_ND = () => `<div>${bynd}</div>`

const bync = licenseSVG('big', 'by_nc')
export const BY_NC = () => `<div>${bync}</div>`

const bynceu = licenseSVG('big', 'by_nc.eu')
export const BY_NC_EU = () => `<div>${bynceu}</div>`

const byncsa = licenseSVG('big', 'by_nc_sa')
export const BY_NC_SA = () => `<div>${byncsa}</div>`

const byncnd = licenseSVG('big', 'by_nc_nd')
export const BY_NC_ND = () => `<div>${byncnd}</div>`

const byncsaeu = licenseSVG('big', 'by_nc_sa.eu')
export const BY_NC_SA_EU = () => `<div>${byncsaeu}</div>`

const byncndeu = licenseSVG('big', 'by_nc_nd.eu')
export const BY_NC_ND_EU = () => `<div>${byncndeu}</div>`

const bySmall = licenseSVG('small', 'by')
export const BY_Small = () => `<div>${bySmall}</div>`

const bysaSmall = licenseSVG('small', 'by_sa')
export const BY_SA_Small = () => `<div>${bysaSmall}</div>`

const byndSmall = licenseSVG('small', 'by_nd')
export const BY_ND_Small = () => `<div>${byndSmall}</div>`

const byncSmall = licenseSVG('small', 'by_nc')
export const BY_NC_Small = () => `<div>${byncSmall}</div>`

const byncsaSmall = licenseSVG('small', 'by_nc_sa')
export const BY_NC_SA_Small = () => `<div>${byncsaSmall}</div>`

const byncndSmall = licenseSVG('small', 'by_nc_nd')
export const BY_NC_ND_Small = () => `<div>${byncndSmall}</div>`

const ccZeroSmall = licenseSVG('small', 'cc_zero')
export const CC_Zero_Small = () => `<div>${ccZeroSmall}</div>`

const publicdomainSmall = licenseSVG('small', 'publicdomain')
export const Public_Domain_Small = () => `<div>${publicdomainSmall}</div>`
