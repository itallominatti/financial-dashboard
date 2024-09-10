import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IVenda } from "../Context/DataContext";

type VendaDia = {
    data: string;
    pago: number;
    processando: number;
    falha: number;
}

function transformData(data: IVenda[]): VendaDia[] {
    const dias = data.reduce((acc, item) => {
        const dia = item.data.split(' ')[0];
        if (!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                processando: 0,
                falha: 0,
            };
        }
        if (item.status === 'pago') {
            acc[dia].pago += item.preco;
        } else if (item.status === 'processando') {
            acc[dia].processando += item.preco;
        } else if (item.status === 'falha') {
            acc[dia].falha += item.preco;
        }
        return acc;
    }, {} as Record<string, VendaDia>);

    return Object.values(dias);
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
    const transformedData = transformData(data);
    return (
        <ResponsiveContainer height={400} width={"99%"}>
            <LineChart
                width={400}
                height={400}
                data={transformedData}
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
    );
}

export default GraficoVendas;