import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'
import { ways, differences } from './data'

function App() {
  const [contentType, setContentType] = useState(null)

  // let content = 'Press the button'

  function handleClick(type) {
    console.log('Button Clicked', type)
    setContentType(type)
    // content = type
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
            {/* <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} /> */}
          </ul>
        </section>
        <section>
          <h3>MI dolboebi</h3>
          <Button
            isActive={contentType === 'way'}
            onClick={() => handleClick('way')}
          >
            Podhod
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => handleClick('easy')}
          >
            Dostupnost
          </Button>
          <Button
            isActive={contentType === 'program'}
            onClick={() => handleClick('program')}
          >
            Kocentraciya
          </Button>
          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Press button </p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
