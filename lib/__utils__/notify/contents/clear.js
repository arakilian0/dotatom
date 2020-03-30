module.exports = function(select=null) {
  let notifs = document.querySelector('atom-notifications')

  if(notifs) {
    if(select === null) notifs.innerHTML = ''
    else {
      notifs.childNodes.forEach(notif => {
        if(notif.firstChild.innerText.includes(select)) notif.remove()
      })
    }
  }
}
