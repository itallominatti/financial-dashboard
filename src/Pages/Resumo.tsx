import GraficoVendas from "../Components/GraficoVendas";
import { useData } from "../Context/DataContext";

const Resumo = () => {
    const { data } = useData();
    if (data === null) return null;

    const totalVendas = data.reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const totalRecebido = data.reduce((acc, item) =>
        acc + (item.status === 'pago' ? item.preco : 0), 0).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

    const totalProcessando = data.reduce((acc, item) => acc + (item.status === 'processando' ? item.preco : 0), 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <section>
            <div className="resumo flex mb">
                <div className="box">
                    <h2>Vendas</h2>
                    <span>{totalVendas}</span>
                </div>
                <div className="box">
                    <h2>Recebido</h2>
                    <span>{totalRecebido}</span>
                </div>
                <div className="box">
                    <h2>Processando</h2>
                    <span>{totalProcessando}</span>
                </div>
            </div>
            <div className="box mb">
                <GraficoVendas data={data} />
            </div>
        </section>
    );
}

export default Resumo;