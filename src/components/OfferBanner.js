import React, {useEffect, useState} from 'react';
import api from '../api/api';

export default function OfferBanner(){
  const [offers, setOffers] = useState([]);
  useEffect(()=>{
    api.get('/products?').then(r=>{
      setOffers(r.data.filter(p=>p.isOffer));
    });
  },[]);
  if(!offers.length) return null;
  return (
    <div style={{background:'#fffae6',padding:12,margin:12}}>
      <strong>Special Offers:</strong> {offers.map(o=>o.name).join(' • ')}
    </div>
  );
}
