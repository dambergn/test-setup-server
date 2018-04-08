'use strict';

const setup = require('setup')();

// Setup network interfaces
let config = setup.network.config({
 
    wlan0: {
        auto: true, // start at Boot 
        dhcp: true, // Use DHCP 
        wireless: {
            ssid: 'myWirelessName', // Wireless SSID 
            psk: 'mySuperPassword', // Password 
        }
    },

    eth0: {
        auto: true,
        ipv4: {
            address: '192.168.1.20',
            netmask: '255.255.255.0',
            gateway: '192.168.1.1',
            dns: '8.8.8.8'
        }
    }
});
 
setup.network.save(config);

// Change hostname
setup.hostname.save('nodejs.example.com');

// Change hosts
let hosts = setup.hosts.config({ 
    '10.0.0.1':'server1.example.com', 
    '10.0.0.2':'server2.example.com'
});
 
setup.hosts.save(hosts);