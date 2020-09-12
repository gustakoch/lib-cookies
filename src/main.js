import './style.css'

const cookies = {
  initiate(props) {
    this.mount(props)
  },
  mount({ boxBackground, text, textColor, buttonBackgroundColor, buttonTextColor }) {
    let cookiesAccepted = localStorage.getItem('cookiesAccepted')
    let inputShow = 'flex'

    if (cookiesAccepted)
      return

    if (!text) {
      text = '<strong>Atenção!</strong> Mensagem referente ao uso de cookies não foi definida na inicialização da biblioteca.'
      inputShow = 'none'
    }

    window.document.body.insertAdjacentHTML('beforeend', `
      <div
        class="cookie-container"
        style='background-color: ${boxBackground}'
      >
        <p
          class="cookie-text"
          style='
            color: ${textColor};
            margin-bottom: 0
          '
        >
          ${text}
        </p>
        <input
          type='button'
          value='Aceitar'
          class='cookie-button'
          title='Concordo com o uso de cookies'
          style='
            background-color: ${buttonBackgroundColor};
            color: ${buttonTextColor};
            display: ${inputShow}
          '
        />
      </div>
    `)

    const input = document.querySelector('.cookie-button')
    const cookieContainer = document.querySelector('.cookie-container')

    function acceptCookies() {
      localStorage.setItem('cookiesAccepted', new Date)
      cookieContainer.style.display = 'none'
    }

    input.addEventListener('click', acceptCookies, false)
  }
}

window.cookies = cookies
