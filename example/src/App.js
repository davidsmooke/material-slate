import React, { useState } from 'react'
import LinksExample from './examples/Links'
import isUrl from 'is-url'
import {
  RichSlate,
  RichEditable,
  createRichEditor,
  RichHoveringToolbar,
  RichToolbar,
  RichSlateButton,
} from '@unicef/material-ui-texteditor'
import { Editor, Transforms, Range } from 'slate'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'
import { useSlate } from 'slate-react'
import LinkIcon from '@material-ui/icons/Link'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  slate: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}))

function App() {
  const classes = useStyles()
  const [value, setValue] = useState(initialValue)

  const [footnotes, setFootnotes] = useState([])
  const [comments, setComments] = useState([])

  // Toolbar Buttons
  const toolbarButtons = [
    { type: 'Mark', format: 'bold' },
    { type: 'Mark', format: 'italic' },
    { type: 'Comment', format: 'comment' },
    { type: 'Footnote', format: 'footnote' },
    {
      type: 'Mark',
      format: 'blue',
      icon: <FormatColorTextIcon />,
    },
  ]

  //On change of value
  function handleChangeValue(value) {
    setValue(value)
  }

  //On change of comments
  function handleChangeComment(value) {
    const comment = value.comment
    if (value.type === 'add') {
      setComments([...comments, comment])
    } else if (value.type === 'update') {
      let updatedComments = comments.map(element => {
        if (element.id === comment.id) {
          element.commentText = value.commentText
        }
        return element
      })
      setComments(updatedComments)
    } else {
      let updatedComments = comments.filter(element => {
        return element.id === comment.id
      })
      setComments(updatedComments)
    }
  }

  // On change of footnotes
  function handleChangeFootnote(value) {
    let updatedList = []

    // update footnote
    if (value.type === 'update') {
      let footnote = value.footnote
      updatedList = footnotes.map(element => {
        if (element.id === footnote.id) {
          element.footnoteText = value.footnoteText
        }
        return element
      })
    } else {
      // add and remove with order
      const list = value.footnoteList
      updatedList = list.map((footnote, index) => {
        const footnoteWithNumber = {
          ...footnote[0],
          number: index + 1,
        }
        return footnoteWithNumber
      })
    }

    setFootnotes(updatedList)
  }

  return (
    <Grid mt={8} container>
      <Grid item>
        <RichSlate
          className={classes.slate}
          createRichEditor={withLinks(createRichEditor())}
          value={value}
          onChangeValue={handleChangeValue}
        >
          <RichToolbar
            className={classes.toolbar}
            editorId={1}
            toolbarButtons={toolbarButtons}
            comments={comments}
            footnotes={footnotes}
            onChangeComment={handleChangeComment}
            onChangeFootnote={handleChangeFootnote}
          >
            <LinkButton key="link">
              <LinkIcon />
            </LinkButton>
          </RichToolbar>
          <RichEditable
            extendRenderElement={props => Element(props)}
            extendRenderLeaf={props => Leaf(props)}
            comments={comments}
            footnotes={footnotes}
            onChangeComment={handleChangeComment}
            onChangeFootnote={handleChangeFootnote}
          />
        </RichSlate>
      </Grid>
      {/* <Button onClick={e => setComments([])}>Reset</Button> */}
      <Grid>
        <RichSlate
          className={classes.slate}
          createRichEditor={withLinks(createRichEditor())}
          value={value}
          onChangeValue={handleChangeValue}
        >
          <RichHoveringToolbar
            editorId={2}
            toolbarButtons={toolbarButtons}
            comments={comments}
            footnotes={footnotes}
            onChangeComment={handleChangeComment}
            onChangeFootnote={handleChangeFootnote}
          >
            <LinkButton key="link">
              <LinkIcon />
            </LinkButton>
          </RichHoveringToolbar>
          <RichEditable
            extendRenderElement={props => Element(props)}
            extendRenderLeaf={props => Leaf(props)}
            comments={comments}
            footnotes={footnotes}
            onChangeComment={handleChangeComment}
            onChangeFootnote={handleChangeFootnote}
          />
        </RichSlate>
      </Grid>
      <LinksExample />
    </Grid>
  )
}

// To add blocks and use your own Marks
// Enable it in toolbarButtons
// Ex:  {
//       type: 'Block',
//       format: 'blue',
//       icon: <FormatColorTextIcon color="primary" />,
//     },

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      )
    case 'block-blue':
      return (
        <p {...attributes} style={{ backgroundColor: 'blue' }}>
          {children}
        </p>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}

// To add marks and use your own Marks
// Enable it in toolbarButtons
// Ex:  {
//       type: 'Mark',
//       format: 'blue',
//       icon: <FormatColorTextIcon color="primary" />,
//     },

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.blue) {
    children = (
      <span {...attributes} style={{ backgroundColor: 'blue' }}>
        {children}
      </span>
    )
  }
  return <span {...attributes}>{children}</span>
}

export default App

// with Links
const withLinks = editor => {
  const { insertData, insertText, isInline } = editor

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element)
  }

  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertText(text)
    }
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')

    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

const insertLink = (editor, url) => {
  if (editor.selection) {
    wrapLink(editor, url)
  }
}

const isLinkActive = editor => {
  const [link] = Editor.nodes(editor, { match: n => n.type === 'link' })
  return !!link
}

const unwrapLink = editor => {
  Transforms.unwrapNodes(editor, { match: n => n.type === 'link' })
}

const wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor)
  }

  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const link = {
    type: 'link',
    url,
    children: isCollapsed ? [{ text: url }] : [],
  }

  if (isCollapsed) {
    Transforms.insertNodes(editor, link)
  } else {
    Transforms.wrapNodes(editor, link, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  }
}

const LinkButton = ({ children, ...props }) => {
  const editor = useSlate()
  return (
    <RichSlateButton
      active={isLinkActive(editor)}
      onMouseDown={event => {
        event.preventDefault()
        const url = window.prompt('Enter the URL of the link:')
        if (!url) return
        insertLink(editor, url)
      }}
    >
      {children}
    </RichSlateButton>
  )
}

const initialValue = [
  {
    children: [
      {
        text: 'In addition to block nodes, you can create inline nodes, like ',
      },
      {
        type: 'link',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
        children: [{ text: 'hyperlinks' }],
      },
      {
        text: '!',
      },
    ],
  },
  {
    children: [
      {
        text:
          'This example shows hyperlinks in action. It features two ways to add links. You can either add a link via the toolbar icon above, or if you want in on a little secret, copy a URL to your keyboard and paste it while a range of text is selected.',
      },
    ],
  },
]