/** @jsx jsx */
import { Transforms } from 'slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one
      two
      <anchor />
      three
      <focus />
    </block>
  </editor>
)
export const run = editor => {
  Transforms.wrapNodes(editor, <inline new />, { split: true, at: editor.selection })
}
export const output = (
  <editor>
    <block>
      one
      two
      <inline new>
        <anchor />
        three
        <focus />
      </inline>
      <text>
      </text>
    </block>
  </editor>
)
