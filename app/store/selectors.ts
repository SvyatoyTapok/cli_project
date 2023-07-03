import {useAppSelector} from './hook';

export const languages = useAppSelector(state => state.languages.languages);
