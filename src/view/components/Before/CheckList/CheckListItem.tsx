import React, { useState } from 'react';
import './CheckListItem.scss';

interface ICheckListItemProps {
    title : string;
    text : string;
    checked : boolean;
    link ?: string;
}

let idGenerator = 0;
const CheckListItem : React.FC<ICheckListItemProps> = props => {
    const [id] = useState(idGenerator++);
    const idStr = `CHECKLIST-ITEM-${id}`;
    const [checked, setChecked] = useState(props.checked);

    const onCheckboxChange = () => {
        setChecked(!checked);
    }

    return (
        <p className={`check-list-item`}>
            <input type="checkbox" checked={checked} onChange={onCheckboxChange} id={idStr}></input>
            <label htmlFor={idStr}><div className="tick"></div></label>
            <span className={`check-list-item-title`}>
                {props.link !== undefined && <a href={props.link} target='_blank' rel="noreferrer">{props.title}</a>}
                {props.link === undefined && props.title}
            </span>
            <span className={`check-list-item-text`}>{props.text}</span>
        </p>
    );
}

export default CheckListItem;