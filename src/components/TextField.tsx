import React, {useRef, useState} from 'react';
import {Props} from '../interfaces/props';
import {TextNode} from '../interfaces/text-node';

export const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<TextNode>({ text: 'Max' });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    // setCount({ text: 'Max' });

    return (
        <div ref={divRef}>
            <input type="text" ref={inputRef} onChange={handleChange}/>
        </div>
    );
}
