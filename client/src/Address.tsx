import React from 'react';
import IAddress from "./types/address.type";

interface Props {
    Address: IAddress
}

const Address: React.FC<Props> = ({ Address }) => {

    return (
        <span>{Address.Street}, {Address.City}, {Address.State} {Address.Zip}</span>
    );
};

export default Address;