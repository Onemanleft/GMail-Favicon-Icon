function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(hostIP, "185.178.208.185"))
        return "SOCKS 192.168.22.3:9050";

    // by default use no proxy
	
        return "DIRECT";
}