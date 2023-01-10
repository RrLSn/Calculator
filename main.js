// selector
const wrapperEl = document.querySelector('.wrapper')
const calDisplay = document.querySelector('.cal_display')
const calKey = document.querySelector('.cal_keys')

keys.addEventListener(
    'click',
    (e) => {
        if(e.target.matches('button')){
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
        }
    }
)