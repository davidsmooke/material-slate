import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import withMarks  from '../plugins/withMarks'
import withBlocks from '../plugins/withBlocks'

/**
 * Creates a RichText editor.
 * 
 * Includes the following plugins
 *  - withBlocks
 *  - withMarks
 *  - withHistory
 *  - withReact
 * 
 * @param {string} editorId Optional unique identifier in case you have more than one editor. Defaults to default.
 * @public
 */
export default function createRichEditor(editorId = "default") {
  const editor =  
  withBlocks( 
    withMarks(
      withHistory(
        withReact(
          createEditor()
        )
      )
    )
  )
  return editor
}