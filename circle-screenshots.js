screenshots.split(' ').forEach(x=> {
  const dom = document.createElement('div')
  dom.innerHTML = '<div style="margin-bottom:32px"><div style="margin-bottom:6px">' + x + '</div><img src="./screenshot/' + x + '"/></div>'
  document.body.appendChild(dom)
})

