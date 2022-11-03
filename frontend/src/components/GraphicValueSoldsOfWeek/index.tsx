import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SoldsOfWeek } from '../../schemas';
import { SoldService } from '../../services/SoldService';
import moment from 'moment'


export default function GraphicValueSoldsOfWeek() {

    const [soldsOfWeek, setSoldsOfWeek] = useState<SoldsOfWeek[]>()

    useEffect(() => {

        const currentDate = moment().format('YYYY-MM-DD')
        console.log(currentDate);
        SoldService.getSoldsOfWeek(currentDate, 7).then(res => {
            setSoldsOfWeek(res.data)
        })

    }, [])

    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
                width={500}
                height={400}
                data={soldsOfWeek}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="currentDate" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sumSolds" stroke="#8884d8" fill="#82ca9d" />
            </AreaChart>
        </ResponsiveContainer>
    );
}