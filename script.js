function play(e) {
    e.preventDefault();
    document.getElementById('bg-video').start();
}


document.addEventListener('load', play)