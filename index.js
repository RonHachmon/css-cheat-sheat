const OBELISK ="https://m.media-amazon.com/images/I/61hiEHj2o4L._AC_UF1000,1000_QL80_.jpg"
const SLIFER = "https://tcgplayer-cdn.tcgplayer.com/product/156036_200w.jpg"
const THe_WINGED_DRAGON = "https://kronozio.blob.core.windows.net/images/card/2f1128bb459647c194499ac069f8491c_front.jpg"
const BLUE_EYE_DRAGON = "https://images.production.sportscardinvestor.com/6783_5368_4625_EN001"

const cardsURL=[THe_WINGED_DRAGON,SLIFER,OBELISK,BLUE_EYE_DRAGON]
const choosenCard = cardsURL[Math.floor(Math.random()*cardsURL.length)]

const backgroundProps = " no-repeat center center/cover"

document.querySelector('.card-back').style.background ="url("+choosenCard+")"+backgroundProps;
