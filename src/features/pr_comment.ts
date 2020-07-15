import './index.css'
import editor from '../editor'
import { pr_comment_selector, ide_id } from '../utils/selectors'
import * as $ from 'jquery'

const feature = (): void => {
  const placeholder = document.createElement('div')
  placeholder.setAttribute('id', 'github_on_steroids_ide_placeholder')
  placeholder.setAttribute(
    'class',
    'box box-shadow border container-lg clearfix'
  )
  placeholder.innerHTML = `
    <div class="Box-header col-12">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <!-- <%= octicon "x" %> -->
        <svg id="close_steroid_ide" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="Box-title">Box title</h3>
    </div>
    `

  const el = document.createElement('div')
  el.setAttribute('id', 'github_on_steroids_ide')
  el.setAttribute('class', 'col-4 float-left border ')
  const previewEl = document.createElement('div')
  previewEl.setAttribute('id', 'github_on_steroids_preview')
  previewEl.setAttribute('class', 'col-4 float-left border ')

  placeholder.append(el)
  placeholder.append(previewEl)

  document.querySelector('body').append(placeholder)
  document.getElementById('close_steroid_ide').addEventListener('click', () => {
    document.getElementById(
      'github_on_steroids_ide_placeholder'
    ).style.display = 'none'
  })

  editor(ide_id)
}

export default feature
