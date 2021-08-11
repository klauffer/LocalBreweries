import React from 'react';
import IAddress from "./types/address.type";

interface Props {
    Address: IAddress
}

const Address: React.FC<Props> = ({ Address }) => {

    return (
        <div>{Address.Street}, {Address.City}, {Address.State} {Address.Zip}</div>
    );
};

export default Address;