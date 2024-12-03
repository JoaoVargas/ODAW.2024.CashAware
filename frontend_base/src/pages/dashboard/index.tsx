import BarChartComponent from '@/components/Chart/BarChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import api from "@/lib/axiosInstance";

const mockGastos = [
  {
    nome: 'Mensalidade Academia',
    valor: 12000,
    descricao: 'Mensalidade da academia',
    tag: 1 // Academia
  },
  {
    nome: 'Compra no Mercado',
    valor: 25000,
    descricao: 'Compra mensal de alimentos e itens básicos',
    tag: 2 // Alimentação
  },
  {
    nome: 'Uber para Trabalho',
    valor: 3500,
    descricao: 'Corrida de Uber para o escritório',
    tag: 3 // Transporte
  },
  {
    nome: 'Curso de Inglês',
    valor: 40000,
    descricao: 'Mensalidade do curso de idiomas',
    tag: 4 // Educação
  },
  {
    nome: 'Cinema com Amigos',
    valor: 5000,
    descricao: 'Ingresso para cinema e pipoca',
    tag: 5 // Lazer
  },
  {
    nome: 'Consulta Médica',
    valor: 15000,
    descricao: 'Consulta de rotina com o clínico geral',
    tag: 6 // Saúde
  },
  {
    nome: 'Assinatura de Streaming',
    valor: 3000,
    descricao: 'Assinatura mensal de um serviço de streaming',
    tag: 7 // Tecnologia
  },
  {
    nome: 'Conta de Energia',
    valor: 20000,
    descricao: 'Conta de luz do mês',
    tag: 8 // Moradia
  },
  {
    nome: 'Viagem para Praia',
    valor: 120000,
    descricao: 'Viagem para passar o fim de semana na praia',
    tag: 9 // Viagens
  },
  {
    nome: 'Investimento Mensal',
    valor: 50000,
    descricao: 'Aplicação em fundos de investimento',
    tag: 10 // Investimentos
  },
  {
    nome: 'Consulta Veterinária',
    valor: 25000,
    descricao: 'Consulta do cachorro no veterinário',
    tag: 11 // Pets
  },
  {
    nome: 'Compra de Roupas',
    valor: 35000,
    descricao: 'Renovação do guarda-roupa para o verão',
    tag: 12 // Vestuário
  }
];

const mockTags = [
  {
    id: 1,
    nome: 'Academia',
    descricao: 'Mensalidades, suplementos e equipamentos',
    cor: '#f3f643',
    gastos: [
      { nome: 'Mensalidade Academia', valor: 12000 }
    ]
  },
  {
    id: 2,
    nome: 'Alimentação',
    descricao: 'Compras no mercado, restaurantes e delivery',
    cor: '#f5a623',
    gastos: [
      { nome: 'Compra no Mercado', valor: 25000 }
    ]
  },
  {
    id: 3,
    nome: 'Transporte',
    descricao: 'Combustível, passagens e transporte público',
    cor: '#7ed321',
    gastos: [
      { nome: 'Uber para Trabalho', valor: 3500 }
    ]
  },
  {
    id: 4,
    nome: 'Educação',
    descricao: 'Mensalidades escolares, cursos e materiais',
    cor: '#50e3c2',
    gastos: [
      { nome: 'Curso de Inglês', valor: 40000 }
    ]
  },
  {
    id: 5,
    nome: 'Lazer',
    descricao: 'Cinema, shows e entretenimento em geral',
    cor: '#9013fe',
    gastos: [
      { nome: 'Cinema com Amigos', valor: 5000 }
    ]
  },
  {
    id: 6,
    nome: 'Saúde',
    descricao: 'Planos de saúde, consultas e medicamentos',
    cor: '#d0021b',
    gastos: [
      { nome: 'Consulta Médica', valor: 15000 }
    ]
  },
  {
    id: 7,
    nome: 'Tecnologia',
    descricao: 'Compras de eletrônicos, softwares e assinaturas',
    cor: '#4a90e2',
    gastos: [
      { nome: 'Assinatura de Streaming', valor: 3000 }
    ]
  },
  {
    id: 8,
    nome: 'Moradia',
    descricao: 'Aluguel, contas de luz, água e internet',
    cor: '#f8e71c',
    gastos: [
      { nome: 'Conta de Energia', valor: 20000 }
    ]
  },
  {
    id: 9,
    nome: 'Viagens',
    descricao: 'Passagens aéreas, hospedagem e passeios',
    cor: '#bd10e0',
    gastos: [
      { nome: 'Viagem para Praia', valor: 120000 }
    ]
  },
  {
    id: 10,
    nome: 'Investimentos',
    descricao: 'Ações, fundos e aplicações financeiras',
    cor: '#417505',
    gastos: [
      { nome: 'Investimento Mensal', valor: 50000 }
    ]
  },
  {
    id: 11,
    nome: 'Pets',
    descricao: 'Alimentos, consultas e acessórios para animais',
    cor: '#ff9f00',
    gastos: [
      { nome: 'Consulta Veterinária', valor: 25000 }
    ]
  },
  {
    id: 12,
    nome: 'Vestuário',
    descricao: 'Compras de roupas, calçados e acessórios',
    cor: '#b8e986',
    gastos: [
      { nome: 'Compra de Roupas', valor: 35000 }
    ]
  }
];

const mockData = [
  { nome: "Academia", valor: 12000, cor: "#f3f643" },
  { nome: "Alimentação", valor: 25000, cor: "#f5a623" },
  { nome: "Transporte", valor: 3500, cor: "#7ed321" },
  { nome: "Educação", valor: 40000, cor: "#50e3c2" },
  { nome: "Lazer", valor: 5000, cor: "#9013fe" },
  { nome: "Saúde", valor: 15000, cor: "#d0021b" },
  { nome: "Tecnologia", valor: 3000, cor: "#4a90e2" },
  { nome: "Moradia", valor: 20000, cor: "#f8e71c" },
  { nome: "Viagens", valor: 120000, cor: "#bd10e0" },
  { nome: "Investimentos", valor: 50000, cor: "#417505" },
  { nome: "Pets", valor: 25000, cor: "#ff9f00" },
  { nome: "Vestuário", valor: 35000, cor: "#b8e986" },
];


const chartConfig = {
  tag: {
    label: "Tag",
    color: "#2563eb",
  },
} satisfies ChartConfig



export default async function DashboardPage() {
  const response = await api.post("/login", {id: 2});

  return (<div className='h-full flex flex-row gap-4 justify-center items-center'>

    <Card className='w-full'>
        <CardHeader className=''>
          <CardTitle>
            Gastos do Mês
          </CardTitle>
        </CardHeader>
        <CardContent className='flex items-center flex-col justify-center space-y-8'>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChartComponent data={mockData} />
          </ChartContainer>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
  </div>
  )
}
