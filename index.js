/*
 * @Author: saber2pr
 * @Date: 2020-01-26 20:59:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-01-26 21:27:09
 */
var LOADING = (() => {
  let LoadingStyle = `.Loading{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}.Loading-Block{width:24px;height:24px;background:#a2b4cf;border-radius:100%;display:inline-block;animation:slide 1s infinite;}.Loading-Block:nth-child(1){animation-delay:0.1s;background:#8695ac;}.Loading-Block:nth-child(2){animation-delay:0.2s;background:#6e7a8d;}.Loading-Block:nth-child(3){animation-delay:0.3s;background:#555e6d;}.Loading-Block:nth-child(4){animation-delay:0.4s;background:#3e4550;}.Loading-Block:nth-child(5){animation-delay:0.5s;background:#262a31;}@-moz-keyframes slide{0%{transform:scale(1);}50%{opacity:0.3;transform:scale(2);}100%{transform:scale(1);}}@-webkit-keyframes slide{0%{transform:scale(1);}50%{opacity:0.3;transform:scale(2);}100%{transform:scale(1);}}@-o-keyframes slide{0%{transform:scale(1);}50%{opacity:0.3;transform:scale(2);}100%{transform:scale(1);}}@keyframes slide{0%{transform:scale(1);}50%{opacity:0.3;transform:scale(2);}100%{transform:scale(1);}}.Loading .Message{margin-top:1rem;padding:0.5rem;text-align:center;border-radius:1rem;font-size:0.5rem;}.Loading .Message,.Loading .Message *{color:white;background-color:gray;}`
  let Loading = `<div class="Loading"><div class="Loading-Block"></div><div class="Loading-Block"></div><div class="Loading-Block"></div><div class="Loading-Block"></div><div class="Loading-Block"></div></div>`

  let style = null

  let LoadingContainer = null

  let inited = false
  let timeoutHandle = null

  return {
    init(holdMessage = '响应超时', delay = 4000) {
      if (inited) return

      style = document.createElement("style")
      style.innerHTML = LoadingStyle
      document.head.append(style)

      LoadingContainer = document.createElement("div")
      LoadingContainer.innerHTML = Loading
      document.body.append(LoadingContainer)

      const ref = LoadingContainer.firstElementChild

      timeoutHandle = setTimeout(() => {
        const message = document.createElement('div')
        message.className = 'Message'
        message.innerHTML = holdMessage
        ref.append(message)
      }, delay)

      inited = true
    },
    destroy() {
      if (inited) {
        document.head.removeChild(style)
        style = null
        document.body.removeChild(LoadingContainer)
        LoadingContainer = null
        inited = false
        clearTimeout(timeoutHandle)
      }
    }
  }
})();
