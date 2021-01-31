import Header from './components/Header'
import Content from './components/Content'
import ContentHeader from './components/ContentHeader'

function App() {
  return (
    <>
      <Header />
      <ContentHeader />
      <div className='flex justify-center sm:flex-row flex-col'>
        <Content />
        <Content />
        <Content />
      </div>
    </>
  );
}

export default App;
