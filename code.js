if (window.location.toString().match(/youtube\.com\/watch/)) {
  var a = 13;
  while (!(a.toString().match(/^([1-9]|1[01])$/))) {
    a = prompt("(press esc to cancel!)\nChoose a type:\n\n1: MP3 (Audio only)\n3: M4A (Audio only)\n4: WEBM (Audio only)\n5: MP4 (720p)\n6: MP4 (1080p)\n7: MP4 (1440p)\n8: WEBM (8K)\n9: MP4 (360p)\n10: MP4 (480p)\n11: WEBM (4K)");
    if ((a=="")||(a===null)) {
      return;
    }
  }
  window.open("https://ddownr.com?deeplink=1&playliststart=1&playlistend=20&format="+a+"&url="+window.location)
} else {
  alert("try again on a youtube video :)");
}
