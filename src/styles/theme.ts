interface Colors {
  backgroundBody: string;
  backgroundSecondaryButton: string;
  backgroundSecondaryButtonHover: string;
  textSecondaryButton: string;
  backgroundborderedButtonHover: string;
  backgroundInput: string;
  border: string;
  borderButton: string;
  text: string;
  textInput: string;
}

export interface ThemeProps {
  name: 'dark-theme' | 'light-theme';
  colors: Colors;
}

export const darkTheme: ThemeProps = {
  name: 'dark-theme',
  colors: {
    backgroundBody: '#000000',
    backgroundSecondaryButton: '#ffffff',
    backgroundSecondaryButtonHover: '#abacac',
    textSecondaryButton: '#000000',
    backgroundborderedButtonHover: '#2f3336',
    backgroundInput: '#15181c',
    border: '#2f3336',
    borderButton: '#6E767D',
    text: '#ffffff',
    textInput: '#6e767d',
  },
};

export const lightTheme: ThemeProps = {
  name: 'light-theme',
  colors: {
    backgroundBody: '#ffffff',
    backgroundSecondaryButton: '#000000',
    backgroundSecondaryButtonHover: '#2f2f2f',
    textSecondaryButton: '#ffffff',
    backgroundborderedButtonHover: '#9d9e9e',
    backgroundInput: '#eff3f4',
    border: '#d8d8d8',
    borderButton: '#6E767D',
    text: '#000000',
    textInput: '#5c6c79',
  },
};
