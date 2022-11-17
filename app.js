

fetch('https://api.dexscreener.com/latest/dex/tokens/0x493c0012F35f0d0D205432228DBAE355c82B79D9').then((data) => {
    console.log(data)
    return data.json()
    
}).then((completeData) => {
    document.getElementById('priceusd').innerHTML = completeData.pairs[0].priceUsd
    document.getElementById('priceusd2').innerHTML = completeData.pairs[0].priceUsd
    document.getElementById('vol').innerHTML = completeData.pairs[0].volume.h24
    document.getElementById('vol2').innerHTML = completeData.pairs[0].volume.h24
    document.getElementById('change').innerHTML = completeData.pairs[0].priceChange.h24
    document.getElementById('change2').innerHTML = completeData.pairs[0].priceChange.h24
    document.getElementById('eth').innerHTML = completeData.pairs[0].priceNative
    document.getElementById('eth2').innerHTML = completeData.pairs[0].priceNative
    document.getElementById('volume').innerHTML = completeData.pairs[0].fdv
    document.getElementById('volume2').innerHTML = completeData.pairs[0].fdv
    document.getElementById('liq').innerHTML = completeData.pairs[0].liquidity.usd
})