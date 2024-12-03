import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import React from 'react'
import { Link } from 'react-router-dom';

const mockTags = [
  {
    id: 1,
    nome: 'Academia',
    descricao: 'Mensalidades, suplementos e equipamentos',
    cor: '#f3f643'
  },
  {
    id: 2,
    nome: 'Alimentação',
    descricao: 'Compras no mercado, restaurantes e delivery',
    cor: '#f5a623'
  },
  {
    id: 3,
    nome: 'Transporte',
    descricao: 'Combustível, passagens e transporte público',
    cor: '#7ed321'
  },
  {
    id: 4,
    nome: 'Educação',
    descricao: 'Mensalidades escolares, cursos e materiais',
    cor: '#50e3c2'
  },
  {
    id: 5,
    nome: 'Lazer',
    descricao: 'Cinema, shows e entretenimento em geral',
    cor: '#9013fe'
  },
  {
    id: 6,
    nome: 'Saúde',
    descricao: 'Planos de saúde, consultas e medicamentos',
    cor: '#d0021b'
  },
  {
    id: 7,
    nome: 'Tecnologia',
    descricao: 'Compras de eletrônicos, softwares e assinaturas',
    cor: '#4a90e2'
  },
  {
    id: 8,
    nome: 'Moradia',
    descricao: 'Aluguel, contas de luz, água e internet',
    cor: '#f8e71c'
  },
  {
    id: 9,
    nome: 'Viagens',
    descricao: 'Passagens aéreas, hospedagem e passeios',
    cor: '#bd10e0'
  },
  {
    id: 10,
    nome: 'Investimentos',
    descricao: 'Ações, fundos e aplicações financeiras',
    cor: '#417505'
  },
  {
    id: 11,
    nome: 'Pets',
    descricao: 'Alimentos, consultas e acessórios para animais',
    cor: '#ff9f00'
  },
  {
    id: 12,
    nome: 'Vestuário',
    descricao: 'Compras de roupas, calçados e acessórios',
    cor: '#b8e986'
  }
];


export default function TagsPage() {
  return (
    <div className='h-full flex flex-col xl:flex-row gap-4 justify-center items-center'>

      <Card className='w-full'>
          <CardHeader className=''>
            <CardTitle>
              Adicionar Nova Tag
            </CardTitle>
          </CardHeader>
          <CardContent className='flex items-center flex-col justify-center space-y-8'>
            <Input type='text' placeholder='Nome' />
            <Textarea placeholder='Descrição' />
            <Input type='color' />
          </CardContent>
          <CardFooter>
            <Button variant='primary' className='w-full'>Adicionar</Button>
          </CardFooter>
        </Card>


      <Card className='w-full'>
        <CardHeader className=''>
          <CardTitle>
            Tags do Usuário
          </CardTitle>
        </CardHeader>
        
        <CardContent className=''>
          <Table>
            <TableCaption>Para mais informações selecione uma Tag</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead >Nome</TableHead>
                <TableHead className="w-[400px]">Descrição</TableHead>
                <TableHead>Cor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                mockTags.map((tag) => (
                    <TableRow key={tag.id}>
                      <TableCell className="font-medium">
                        <Link to='/' className='underline hover:text-primary'>{tag.nome}</Link>
                      </TableCell>
                      <TableCell>{tag.descricao}</TableCell>
                      <TableCell style={{
                        backgroundColor: tag.cor
                      }}>{tag.cor}</TableCell>
                    </TableRow>
                  )
                )
              }
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}
