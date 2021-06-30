import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { ReactotronCore } from 'reactotron-core-client';

if (process.env.NODE_ENV === 'development') {
  const tron: ReactotronCore = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  if (tron.clear) tron.clear();
  console.tron = tron;
}
