var triggerTabList = [].slice.call(document.querySelectorAll('.bs-tabs button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new tab.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
