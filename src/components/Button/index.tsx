import { useRef } from 'react'
import { audios } from '../../data'
import { ButtonContainer } from './styles.js'

interface ButtonProps {
    letter: string,
    setK: React.Dispatch<React.SetStateAction<string>>,
    volume: number
}
export default function Button({ letter, setK, volume }: ButtonProps): JSX.Element {
    const refAudio = useRef<HTMLAudioElement>(null);

    const handleAudio = () => {
      refAudio?.current?.play();
      const pressed: string | undefined = refAudio?.current?.id.toString();
      setK(pressed ? pressed : '');
      if(refAudio.current)  refAudio.current.volume = volume;
    };
  
    return (
      <ButtonContainer
        onClick={handleAudio} 
        className="drum-pad">
        {letter}
        <audio
          className="clip"
          ref={refAudio}
          id={letter}
          src={audios[letter]}
        ></audio>
      </ButtonContainer>
    );
}
  