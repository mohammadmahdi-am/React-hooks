import './App.css';
import React from 'react'
import HookCounter from './component/HookCounter';
import HookCounterThree from './component/HookCounterThree';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterFour from './component/HookCounterFour'
import HookCounterFive from './component/HookCounterFive';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter'
import DataFetching from './component/DataFetching';
import ComponentC from './component/ComponentC';
import HookReducerOne from './component/HookReducerOne';
import HookReducerTwo from './component/HookReducerTwo';
import HookReducerThree from './component/HookReducerThree';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';
import UseMemoHook from './component/UseMemoHook';
import FocusInput from './component/FocusInput';
import Hooktimer from './component/Hooktimer';
import DocTitleOne from './component/DocTitleOne';
import DocTitleTwo from './component/DocTitleTwo';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <HookCounterFive/>*/}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codeevolution"}>

          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <HookReducerOne/> */}
      {/* <HookReducerThree/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <UseMemoHook/> */}
      {/* <FocusInput/> */}
      {/* <Hooktimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
    </div>
  );
}

export default App;
