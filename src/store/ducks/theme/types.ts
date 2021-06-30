export interface IThemeState {
  theme: 'light' | 'dark';
}

export interface IThemeAction {
  type: string;
  payload: IThemeState;
}
