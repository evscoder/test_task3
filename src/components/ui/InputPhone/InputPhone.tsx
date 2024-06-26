'use client';

import React from 'react';
import ReactInputMask from 'react-input-mask';
import UiInput, {InputProps} from "@/components/ui/UiInput/UiInput";

const InputPhone: React.FC<InputProps> = ({ ...props }) => {
    return (
        <ReactInputMask mask="+7 (999) 999 99 99" {...props}>
            <UiInput type={'tel'} />
        </ReactInputMask>
    );
};

export default InputPhone;
