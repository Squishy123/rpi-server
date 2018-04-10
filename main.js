const [hostapd, http, connect, serveStatic, jsonfile] = [require('wireless-tools/hostapd'), require('http'), require('connect'), require('serve-static'), require('jsonfile')]

function main() {
    //create ap
    hostapd.enable({
        interface: "wlan0",
        driver: "nl80211",
        ssid: "NameOfNetwork",
        hw_mode: "g",
        channel: 7,
        wmm_enabled: 0,
        macaddr_acl: 0,
        auth_algs: 1,
        ignore_broadcast_ssid: 0,
        wpa: 2,
        wpa_passphrase: "flyingunicorn456",
        wpa_key_mgmt: "WPA-PSK",
        wpa_pairwise: "TKIP",
        rsn_pairwise: "CCMP"
    }, (err) => {
        console.log("AP started!");
        const app = connect().use(serveStatic('public/'))
        http.createServer(app).listen(9000, () => {
            console.log('Listening...')
        })
    });
}

