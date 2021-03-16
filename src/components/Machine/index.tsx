import { useState } from 'react'
import Button from '../Button'
import { keys } from '../../data'
import { Main, Drum, Display, Container } from './styles.js'

export default function Machine(): JSX.Element  {
    const [keyPressed, setKeyPressed] = useState<string>("")
    const [volume, setVolume] = useState<number>(0.5)

    const handleKeyPress = ({ key }: {key: string}): void => {
      const audio = (document.getElementById(key.toUpperCase())) as HTMLAudioElement
      const allButton = (document.querySelectorAll('.drum-pad')) as NodeListOf<HTMLButtonElement>
      try {
        const parent = (audio.parentElement) as HTMLButtonElement;
        audio.play();
        allButton.forEach((pad) => pad.style.background = "");
        parent.style.background = "green";
        setKeyPressed(key.toUpperCase())
      } catch (error) {return;}
    };
  
    return (
      <Main>
        <Drum onKeyPress={handleKeyPress} id="buttons">
         { Object.keys(keys).map((key) => <Button volume={volume} setK={setKeyPressed} key={key} letter={key} />) }
        </Drum>

        <Display id="display">
          <Container>
            <input type="range" min="0" max="1" step="0.01" onInput={event =>  setVolume(Number(event.currentTarget.value))}/>
            <p>
              {keys[keyPressed]}
            </p>
          </Container>
        </Display>
       
      </Main>
    ); 
  }
  