/** @jsx jsx */
import { Transforms } from 'slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one
      <anchor />
      two
      <focus />
      three
    </block>
  </editor>
)
export const run = editor => {
  Transforms.wrapNodes(editor, <inline new />, { split: true, at: editor.selection })
}
// note the order of focus and /inline
export const output = (
  <editor>
    <block>
      one
      <inline new>
        <anchor />
        two
      </inline>
      <focus />
      three
    </block>
  </editor>
)