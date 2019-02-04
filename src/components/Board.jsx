import React from 'react';
import {Ad} from './Ad';

export const Board = ({handleBoard, rend}) => (
    <div className="cont">
        {handleBoard.map(ad => (
                <div className="ad" key = {ad[3]}>
                    <Ad
                        Hl = {ad[0]}
                        Txt = {ad[1]}
                        Phone = {ad[2]}
                        keydelete = {ad[3]}
                        rend = {rend}
                    />
                </div>
                )
            )
        }
    </div>
);