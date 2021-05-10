import Link from 'next/link'
import { selector, useRecoilState, useRecoilValue } from 'recoil'
import { atom } from 'recoil'
import Layout from '../components/Layout'


const textState = atom({
  key: "textValue",
  default: "hoge"
})

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
});

const CharCount = () => {
  const count = useRecoilValue(charCountState);
  return (
    <p>{count}</p>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <CharCount/>
    </div>
  );
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <div>
        <a>About</a>
        <TextInput />
      </div>
    </p>
  </Layout>
)

export default IndexPage
