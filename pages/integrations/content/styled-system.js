module.exports = {
  title: '[`styled-system`](https://github.com/jxnblk/styled-system)',
  subtitle: '',
  description: `
    ~glamorous~ works with ~styled-system~ helper functions.

    ~~~interactive {summary: 'Interactive demo', clickToRender: true}
    // assuming import * as styledSystem from 'styled-system'
    // normally you'd just do import { space, width, fontSize } from 'styled-system'
    const { space, width, fontSize } = styledSystem

    const Box = glamorous.div(space, width, fontSize)
    render(
      <glamorous.Div maxWidth={600} margin="auto">
        <Box width={1 / 2}>width: 50%</Box>
        <Box fontSize={4}>font-size: 20px</Box>
        <Box m={2}>margin: 16px</Box>
        <Box p={3}>padding: 32px</Box>
        <Box width={[1, 1 / 2, 1 / 4]}>responsive width</Box>
        <Box fontSize={[2, 3, 4]}>responsive font-size</Box>
        <Box m={[1, 2, 3]}>responsive margin</Box>
        <Box p={[1, 2, 3]}>responsive padding</Box>
      </glamorous.Div>
    )
    ~~~
  `.replace(/~/g, '`'),
  codeSandboxId: 'mNEBG3OR',
  codeSandboxSummary: 'codesandbox demo',
  filename: __filename,
}
