import { ide_btn_placeholder } from '../utils/selectors'
const feature = (onClickHandler) => {
  console.log('WORKING ')
  const btnEL = document.createElement('button')
  btnEL.setAttribute('class', 'btn btn-primary')
  btnEL.innerText = 'Open Steroids IDE'

  document.querySelector(ide_btn_placeholder).append(btnEL)
  btnEL.addEventListener('click', onClickHandler)
}

export default feature
