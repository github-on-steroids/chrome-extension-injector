import prComments from './features/pr_comment'
import ideButton from './features/open_ide_btn'
import { isPRPage } from './utils/isValidPage'

const init = (): void => {
  if (isPRPage()) {
    ideButton(prComments)
  }
}

init()
