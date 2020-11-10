import Editor from '@monaco-editor/react'

export default function Monaco() {
  return (
    <div>
      <Head>
        <title>Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Editor
        height="90vh"
        language="javascript"
        theme="dark"
      />
    </div>
  )
}
