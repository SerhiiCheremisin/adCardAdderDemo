import React from 'react';
import {Input , FormGroup, Label} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAds7Days, getAds14Days, getTop7Days, getTop14Days, getTop30Days} from '../redux/reducers/fromData';

export default function PaidServices() {
   const ad7Days = useSelector((state:any) => state.formData.adsInfo.ads7days);
   const ad14Days = useSelector((state:any) => state.formData.adsInfo.ads14days);
   const top7Days = useSelector((state:any) => state.formData.adsInfo.top7Days);
   const top14Days = useSelector((state:any) => state.formData.adsInfo.top14Days);
   const top30Days = useSelector((state:any) => state.formData.adsInfo.top30Days);
   const dispatch = useDispatch();

  return (

    <FormGroup>
         <Input type="checkbox" onChange={() => dispatch(getAds7Days(!ad7Days))} checked={ad7Days} />
            {' '}
            <Label check>
              Ad for 7 days
            </Label>

            <Input type="checkbox" onChange={() => dispatch(getAds14Days(!ad14Days))} checked={ad14Days} />
            {' '}
            <Label check>
            Ad for 14 days
            </Label>

            <Input type="checkbox" onChange={() => dispatch(getTop7Days(!top7Days))} checked={top7Days} />
            {' '}
            <Label check>
            Top for 7 days
            </Label>

            <Input type="checkbox" onChange={() => dispatch(getTop14Days(!top14Days))} checked={top14Days} />
            {' '}
            <Label check>
            Top for 14 days
            </Label>

            <Input type="checkbox" onChange={() => dispatch(getTop30Days(!top30Days))}  checked={top30Days} />
            {' '}
            <Label check>
            Top for 30 days
            </Label>
    </FormGroup>

    );
}
