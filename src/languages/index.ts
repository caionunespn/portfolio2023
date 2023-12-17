import enUS from './en-US.json';
import ptBR from './pt-BR.json';

type language = string | undefined;

export function getKeys(section: string, language: language) {
    if (!language || (language !== "pt-BR" && language !== "en-US")) language = 'pt-BR';

    let keys = {};
    if (language == 'pt-BR') {
        if (ptBR.hasOwnProperty(section)) {
            keys = ptBR[section as keyof typeof ptBR]; 
        }
    } else if (language == 'en-US') {
        if (enUS.hasOwnProperty(section)) {
            keys = enUS[section as keyof typeof enUS]; 
        }
    }

    return keys;
}