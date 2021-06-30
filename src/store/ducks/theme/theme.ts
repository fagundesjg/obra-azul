import { IThemeAction, IThemeState } from './types';

const Types = {
  SET_THEME: 'theme/SET_THEME',
};

const INITIAL_STATE: IThemeState = {
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

function theme(state = INITIAL_STATE, action: IThemeAction) {
  switch (action.type) {
    default:
      return state;
  }
}

const Creators = {
  setTheme: (theme: 'light' | 'dark') => ({
    type: Types.SET_THEME,
    payload: { theme },
  }),
};

export { Types, Creators, theme };
