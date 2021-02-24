import {Person} from '../interfaces/person';

export interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}