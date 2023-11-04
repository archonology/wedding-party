function play(e) {
    e.preventDefault();
    document.getElementById('bg-video').autoplay = true;
}


document.addEventListener('load', play)