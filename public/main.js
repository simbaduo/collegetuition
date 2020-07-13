const hamburgerMenu = document.querySelector('.toggle')

const navBar = document.querySelector('.navBar')

hamburgerMenu.addEventListener(
  'click',
  () => {
    navBar.classList.toggle('mobileNavBar')
  },
  false
)

document.addEventListener('DOMContentLoaded', function (event) {
  // JSON Object
  var chartItem = [
    {
      label: 'Public Medical School, In-State $34,592',
      cost: 34592,
      color: '#E57373',
    },
    {
      label: 'Public Medical School, Out-of-State $56,668',
      cost: 58668,
      color: '#64B5F6',
    },
    {
      label: 'Private Medical School $50,000',
      cost: 50000,
      color: '#4DB6AC',
    },
    {
      label: 'CAM Education $25,000',
      cost: 25000,
      color: '#FF8A65',
    },
  ]
  console.log('chartItem', chartItem)

  let maxCost = 0
  for (let i = 0; i < chartItem.length; i++) {
    if (chartItem[i].cost > maxCost) {
      maxCost = chartItem[i].cost
    }
  }

  for (let i = 0; i < chartItem.length; i++) {
    const width = Math.floor((chartItem[i].cost / maxCost) * 100)
    const elem = document.getElementsByClassName('chart')[0]
    elem.innerHTML =
      elem.innerHTML +
      '<li class="chart-box" style="background-color:' +
      chartItem[i].color +
      '; width: 0%;" data-width=' +
      width +
      '>' +
      chartItem[i].label +
      '</li>'
  }
})

resizeTicks()

function resizeTicks () {
  const chartDataElement = document.getElementById('chartData')
  const left60k = chartDataElement.offsetWidth
  const chartDataElementHeight = chartDataElement.offsetHeight
  console.log('chartDataElementHeight', chartDataElementHeight)

  const chunk = left60k / 6
  const tickElements = document.getElementsByClassName('tick')
  for (let i = 0; i < tickElements.length; i++) {
    let left = parseInt(i * chunk)
    if (left === 0) {
      left = -2
    }

    tickElements[i].setAttribute(
      'style',
      'left:' +
        parseInt(i * chunk) +
        'px; top:' +
        chartDataElementHeight +
        'px;'
    )
    console.log('tickElements')
  }
  console.log('tickElements', tickElements)
}

window.addEventListener(
  'scroll',
  function () {
    const elem = document.getElementsByClassName('chart-box')
    for (let i = 0; i < elem.length; i++) {
      if (isInViewport(elem[i])) {
        const width = elem[i].dataset.width
        elem[i].style.width = width + '%'
        elem[i].style.paddingLeft = '20px'
        console.log('width', width)

        console.log('width', width)
      }
    }
  },
  true
)

function isInViewport (element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

document.openHamburgerMenu = function () {
  console.log('Menu Open')

  const styleBurgerContainer = document.getElementById('styleBurger')
  console.log('styleBurgerContainer', styleBurgerContainer)
  styleBurgerContainer.style.display = 'block'
}

document.closeHamburgerMenu = function () {
  console.log('Menu Close')

  const styleBurgerContainer = document.getElementById('styleBurger')
  console.log('styleBurgerContainer', styleBurgerContainer)
  styleBurgerContainer.style.display = 'none'
}

window.onresize = function () {
  console.log('resize the window;')
  resizeTicks()
}

window.addEventListener('scroll', function (e) {
  console.log('scroll;')
  resizeTicks()
})