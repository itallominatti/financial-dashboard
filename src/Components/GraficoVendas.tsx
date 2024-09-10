import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IVenda } from "../Context/DataContext";

const dadosGrafico = [
    {
        data: '2023-05-03',
        pago: 4000,
        processando: 3000,
        falha: 2000,
    },
    {
        data: '2023-05-04',
        pago: 2000,
        processando: 4000,
        falha: 3000,
    },
    {
        data: '2023-05-05',
        pago: 3000,
        processando: 4000,
        falha: 2000,
    },
    {
        data: '2023-05-06',
        pago: 4000,
        processando: 3000,
        falha: 2000,
    },
    {
        data: '2023-05-07',
        pago: 5000,
        processando: 2000,
        falha: 3000,
    },
    {
        data: '2023-05-08',
        pago: 3000,
        processando: 2000,
        falha: 4000,
    },
    {
        data: '2023-05-09',
        pago: 4000,
        processando: 3000,
        falha: 2000,
    },

]

const GraficoVendas = ({ data }: { data: IVenda[] }) => {

    return (
        <ResponsiveContainer height={400} width={"99%"}>
            <LineChart
                width={400}
                height={400}
                data={dadosGrafico}

            >
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="pago" stroke="#ff7300" />
                <Line type="monotone" dataKey="processando" stroke="#387908" />
                <Line type="monotone" dataKey="falha" stroke="#f00000" />
            </LineChart>
        </ResponsiveContainer>

    )
}

export default GraficoVendas;