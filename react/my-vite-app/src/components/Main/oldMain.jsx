// const Main = () => {
//     return (
//         <section>
//             <card/>
//     </section>
// );
// };

// export default Main;

import Card from '../Card/Card';
import FlexWrap from '../FlexWrap/FlexWrap';
import s from './Main.module.scss';

const Main = (props) => {
  let title = 'My Favourite Albums';
  let albumTitle = 'Album Title';
  let bandName = 'Band Name';


  return (
    <main className={s.main}>
      <h2 className={s.heading}>{title}</h2>
      <FlexWrap>
        <Card heading= {albumTitle} content= {bandName}  />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Card
          heading={albumTitle}
          content='this tssext sss is completely different'
          hasButton
        />
        <Card heading={albumTitle} content={bandName}  />
        <Card heading={albumTitle} content={bandName}  />
        <Card heading={albumTitle} content={bandName}  />
        <Card heading={albumTitle} content={bandName}  />
        <Card heading={albumTitle} content={bandName}  />
        <Card heading={albumTitle} content={bandName}  />
      </FlexWrap>
    </main>
  );
};

export default Main;