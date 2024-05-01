import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 bg-tertiary bg-opacity-60 p-10 rounded-3xl w-full' id="techBalls">
      {technologies.map((technology) => (
        <div className="w-28 h-28 relative" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '115px' }}>
            <p className="text-white">{technology.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");