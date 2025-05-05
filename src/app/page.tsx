"use client";
// The exported code uses Tailwind CSS. Instale o Tailwind CSS no seu ambiente de desenvolvimento para garantir que todos os estilos funcionem.

import React from "react";
import { FaBell, FaChartLine, FaUsers } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-[1024px] bg-[#F3F4F6] font-sans">
      <Header />
      <Hero />
      <FeatureCards />
      <Testimonial />
      <Stats />
      <MedicationList />
      <HistoryChart />
      <Timeline />
      <TeamGrid />
      <ContactForm />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-[#1E3A8A] text-2xl font-bold">
            Medicamentos Inteligente
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#funcionalidades"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Funcionalidades
          </a>
          <a
            href="#depoimentos"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Depoimentos
          </a>
          <a
            href="#medicamentos"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Medicamentos
          </a>
          <a
            href="#equipe"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Nossa Equipe
          </a>
          <a
            href="#contato"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Contato
          </a>
        </nav>

        <div>
          <Button className="bg-[#3B82F6] hover:bg-[#1E3A8A] text-white !rounded-button cursor-pointer whitespace-nowrap">
            Baixar App
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-white mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Nunca mais esqueça seus medicamentos
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 opacity-90">
            Sistema inteligente de lembretes que cuida da sua saúde com precisão
            e confiabilidade
          </h2>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-[#1E3A8A] hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
              Baixar App
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 !rounded-button cursor-pointer whitespace-nowrap"
            >
              Ver Demo
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/imagens/arte_inicial.png"
            alt="Arte inicial do app de lembrete de medicamentos"
            className="w-full max-w-[800px] md:max-w-[1200px] h-auto object-contain md:ml-24"
            style={{}}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/80 to-[#3B82F6]/80 z-0"></div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as ferramentas que vão transformar sua rotina de
            medicamentos em uma experiência simples e eficiente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 hover:shadow-md hover:border-[#3B82F6] transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                <FaBell className="text-[#3B82F6] text-2xl" />
              </div>
              <CardTitle className="text-xl text-[#1E3A8A]">
                Lembretes Personalizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Configure alertas precisos para cada medicamento, com horários
                específicos e instruções detalhadas para cada dose.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200 hover:shadow-md hover:border-[#3B82F6] transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-[#3B82F6] text-2xl" />
              </div>
              <CardTitle className="text-xl text-[#1E3A8A]">
                Histórico Completo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Acompanhe todo seu histórico de medicações, visualize padrões e
                compartilhe relatórios com seu médico.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200 hover:shadow-md hover:border-[#3B82F6] transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-[#3B82F6] text-2xl" />
              </div>
              <CardTitle className="text-xl text-[#1E3A8A]">
                Compartilhamento Seguro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Compartilhe seu regime de medicamentos com familiares ou
                cuidadores de forma segura e controlada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Testimonial: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            O Que Nossos Usuários Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra como o Medicamento Inteligente está transformando a vida de
            milhares de pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-b-4 border-b-[#3B82F6]">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    "O Lembrete de medicamentos mudou completamente minha
                    vida. Agora consigo seguir meu tratamento sem falhas e
                    minha saúde melhorou significativamente, trazendo comforto para mim e 
                   minha familia ."
                  </p>
                  <p className="font-bold text-[#1E3A8A]">Maria Silva</p>
                  <p className="text-sm text-gray-600">Aposentada, 67 anos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-b-4 border-b-[#3B82F6]">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    "Como médico, recomendo o Lembrete de medicamentos para
                    todos os meus pacientes. A adesão ao tratamento melhorou
                    consideravelmente desde que comecei a indicar o aplicativo."
                  </p>
                  <p className="font-bold text-[#1E3A8A]">Dr. Carlos Santos</p>
                  <p className="text-sm text-gray-600">Cardiologista</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-[#1E3A8A] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Números que Impressionam
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Nosso impacto em números que demonstram a eficácia do Lembrete de
            medicamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold mb-2">50K+</p>
            <p className="uppercase text-sm opacity-80">Usuários Ativos</p>
          </div>

          <div>
            <p className="text-5xl font-bold mb-2">2M+</p>
            <p className="uppercase text-sm opacity-80">Lembretes Enviados</p>
          </div>

          <div>
            <p className="text-5xl font-bold mb-2">92%</p>
            <p className="uppercase text-sm opacity-80">Taxa de Adesão</p>
          </div>

          <div>
            <p className="text-5xl font-bold mb-2">4.8</p>
            <p className="uppercase text-sm opacity-80">Avaliação Média</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MedicationList: React.FC = () => {
  return (
    <section id="medicamentos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Gerencie Seus Medicamentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organize todos os seus medicamentos em um só lugar, com lembretes
            precisos e histórico completo.
          </p>
        </div>

        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between bg-gray-50 border-b">
            <CardTitle className="text-xl text-[#1E3A8A]">
              Meus Medicamentos
            </CardTitle>
            <Button
              size="sm"
              className="bg-[#3B82F6] hover:bg-[#1E3A8A] !rounded-button cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-plus mr-2"></i> Adicionar
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold">Nome</TableHead>
                  <TableHead className="font-bold">Dosagem</TableHead>
                  <TableHead className="font-bold">Frequência</TableHead>
                  <TableHead className="font-bold">Próximo Lembrete</TableHead>
                  <TableHead className="font-bold text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold text-[#1E3A8A]">Losartana</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">50mg</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">1x ao dia</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Hoje, 08:00
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <Button
                        className="table-action-delete !rounded-button cursor-pointer whitespace-nowrap"
                        title="Excluir"
                        type="button"
                        tabIndex={0}
                      >
                        <span>×</span>
                      </Button>
                      <Button
                        className="table-action-edit !rounded-button cursor-pointer whitespace-nowrap flex items-center justify-center"
                        title="Editar"
                        type="button"
                        tabIndex={0}
                      >
                        <img
                          src="/imagens/icone_editar.png"
                          alt="Editar"
                          style={{ width: '1.25em', height: '1.25em', display: 'block' }}
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold text-[#1E3A8A]">Atorvastatina</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">20mg</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">1x ao dia</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Hoje, 20:00
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <Button
                        className="table-action-delete !rounded-button cursor-pointer whitespace-nowrap"
                        title="Excluir"
                        type="button"
                        tabIndex={0}
                      >
                        <span>×</span>
                      </Button>
                      <Button
                        className="table-action-edit !rounded-button cursor-pointer whitespace-nowrap flex items-center justify-center"
                        title="Editar"
                        type="button"
                        tabIndex={0}
                      >
                        <img
                          src="/imagens/icone_editar.png"
                          alt="Editar"
                          style={{ width: '1.25em', height: '1.25em', display: 'block' }}
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold text-[#1E3A8A]">Metformina</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">850mg</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">2x ao dia</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      Amanhã, 07:30
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <Button
                        className="table-action-delete !rounded-button cursor-pointer whitespace-nowrap"
                        title="Excluir"
                        type="button"
                        tabIndex={0}
                      >
                        <span>×</span>
                      </Button>
                      <Button
                        className="table-action-edit !rounded-button cursor-pointer whitespace-nowrap flex items-center justify-center"
                        title="Editar"
                        type="button"
                        tabIndex={0}
                      >
                        <img
                          src="/imagens/icone_editar.png"
                          alt="Editar"
                          style={{ width: '1.25em', height: '1.25em', display: 'block' }}
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold text-[#1E3A8A]">Omeprazol</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">40mg</TableCell>
                  <TableCell className="font-bold text-[#1E3A8A]">1x ao dia</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                      Em 2 dias, 08:00
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <Button
                        className="table-action-delete !rounded-button cursor-pointer whitespace-nowrap"
                        title="Excluir"
                        type="button"
                        tabIndex={0}
                      >
                        <span>×</span>
                      </Button>
                      <Button
                        className="table-action-edit !rounded-button cursor-pointer whitespace-nowrap flex items-center justify-center"
                        title="Editar"
                        type="button"
                        tabIndex={0}
                      >
                        <img
                          src="/imagens/icone_editar.png"
                          alt="Editar"
                          style={{ width: '1.25em', height: '1.25em', display: 'block' }}
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const HistoryChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Taxa de Adesão (%)"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
            "Domingo",
          ],
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 100,
        },
        series: [
          {
            name: "Taxa de Adesão (%)",
            type: "line",
            data: [100, 100, 90, 100, 80, 100, 100],
            lineStyle: {
              color: "#3B82F6",
            },
            itemStyle: {
              color: "#3B82F6",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(59, 130, 246, 0.5)",
                  },
                  {
                    offset: 1,
                    color: "rgba(59, 130, 246, 0.1)",
                  },
                ],
              },
            },
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Acompanhe Seu Progresso
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualize seu histórico de adesão aos medicamentos e identifique
            padrões para melhorar sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-[#1E3A8A]">
                Taxa de Adesão Semanal
              </CardTitle>
              <CardDescription>Última semana: 95.7% de adesão</CardDescription>
            </CardHeader>
            <CardContent>
              <div ref={chartRef} className="w-full h-80"></div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-[#1E3A8A]">
                Últimas Confirmações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1E3A8A] text-base">Losartana 50mg</p>
                    <p className="text-sm text-gray-700 font-semibold">Hoje, 08:03</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-bold">Tomado</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1E3A8A] text-base">Atorvastatina 20mg</p>
                    <p className="text-sm text-gray-700 font-semibold">Ontem, 20:15</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-bold">Tomado</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1E3A8A] text-base">Metformina 850mg</p>
                    <p className="text-sm text-gray-700 font-semibold">Ontem, 12:30</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-bold">Tomado</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1E3A8A] text-base">Metformina 850mg</p>
                    <p className="text-sm text-gray-700 font-semibold">Ontem, 07:45</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-bold">Tomado</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1E3A8A] text-base">Omeprazol 40mg</p>
                    <p className="text-sm text-gray-700 font-semibold">30/04, 08:10</p>
                  </div>
                  <Badge className="bg-red-100 text-red-800 font-bold">Atrasado</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça o processo simples para começar a usar o Lembrete de
            medicamentos e melhorar sua adesão aos medicamentos.
          </p>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-[#3B82F6]/20"></div>

          {/* Steps */}
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  Baixe o Aplicativo
                </h3>
                <p className="text-gray-600 mt-2">
                  Disponível gratuitamente para Android e iOS.
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center z-10 order-1 md:order-2">
                <span className="text-white font-bold">1</span>
              </div>

              <div className="flex-1 md:pl-8 order-3">
                <div className="hidden md:block">&nbsp;</div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                <div className="hidden md:block">&nbsp;</div>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center z-10 order-1 md:order-2">
                <span className="text-white font-bold">2</span>
              </div>

              <div className="flex-1 md:pl-8 order-3">
                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  Cadastre Seus Medicamentos
                </h3>
                <p className="text-gray-600 mt-2">
                  Adicione nome, dosagem, frequência e horários.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  Receba Lembretes
                </h3>
                <p className="text-gray-600 mt-2">
                  Notificações precisas nos horários programados.
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center z-10 order-1 md:order-2">
                <span className="text-white font-bold">3</span>
              </div>

              <div className="flex-1 md:pl-8 order-3">
                <div className="hidden md:block">&nbsp;</div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                <div className="hidden md:block">&nbsp;</div>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center z-10 order-1 md:order-2">
                <span className="text-white font-bold">4</span>
              </div>

              <div className="flex-1 md:pl-8 order-3">
                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  Confirme e Acompanhe
                </h3>
                <p className="text-gray-600 mt-2">
                  Registre cada dose e visualize seu histórico de adesão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamGrid: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Nossa Equipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais dedicados que desenvolveram o Lembrete de
            medicamentos para melhorar sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20Brazilian%20man%20with%20short%20dark%20hair%2C%20wearing%20a%20business%20suit%2C%20neutral%20background%2C%20confident%20expression%2C%20high%20quality%20photorealistic%20portrait&width=300&height=300&seq=team1&orientation=squarish" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold text-[#1E3A8A]">
              Roberto Almeida
            </h3>
            <p className="text-sm text-gray-600">CEO & Fundador</p>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Brazilian%20woman%20with%20long%20dark%20hair%2C%20wearing%20business%20attire%2C%20neutral%20background%2C%20friendly%20smile%2C%20high%20quality%20photorealistic%20portrait&width=300&height=300&seq=team2&orientation=squarish" />
              <AvatarFallback>JO</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold text-[#1E3A8A]">
              Juliana Oliveira
            </h3>
            <p className="text-sm text-gray-600">Desenvolvedora Chefe</p>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20Brazilian%20man%20with%20glasses%2C%20wearing%20a%20lab%20coat%2C%20neutral%20background%2C%20trustworthy%20expression%2C%20high%20quality%20photorealistic%20portrait&width=300&height=300&seq=team3&orientation=squarish" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold text-[#1E3A8A]">
              Dr. Marcos Santos
            </h3>
            <p className="text-sm text-gray-600">Consultor Médico</p>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Brazilian%20woman%20with%20curly%20hair%2C%20wearing%20business%20casual%20attire%2C%20neutral%20background%2C%20friendly%20professional%20expression%2C%20high%20quality%20photorealistic%20portrait&width=300&height=300&seq=team4&orientation=squarish" />
              <AvatarFallback>CF</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold text-[#1E3A8A]">
              Camila Ferreira
            </h3>
            <p className="text-sm text-gray-600">Designer de UX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Implementação do envio do formulário
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas ou sugestões? Nossa equipe está pronta para ajudar.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border border-gray-200 shadow-lg rounded-2xl">
            <CardContent className="pt-8 pb-8 px-6 md:px-12">
              <Form
                {...form}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1E3A8A] font-semibold text-base">Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field}
                          className="border-2 border-gray-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 rounded-xl px-6 py-5 text-lg transition-all duration-200 shadow-md bg-white placeholder-gray-400 font-semibold text-[#1E3A8A] tracking-wide"
                          style={{ minHeight: 56 }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1E3A8A] font-semibold text-base">E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="seu.email@exemplo.com"
                          {...field}
                          className="border-2 border-gray-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 rounded-xl px-6 py-5 text-lg transition-all duration-200 shadow-md bg-white placeholder-gray-400 font-semibold text-[#1E3A8A] tracking-wide"
                          style={{ minHeight: 56 }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1E3A8A] font-semibold text-base">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite sua mensagem aqui..."
                          {...field}
                          className="border-2 border-gray-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 rounded-xl px-6 py-5 text-lg transition-all duration-200 shadow-md bg-white placeholder-gray-400 min-h-40 resize-none font-semibold text-[#1E3A8A] tracking-wide w-full"
                          style={{ minHeight: 120, minWidth: '100%', width: '100%' }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#3B82F6] hover:bg-[#1E3A8A] !rounded-button cursor-pointer whitespace-nowrap text-lg font-bold py-3 transition-all duration-200 shadow-md"
                >
                  Enviar Mensagem
                </Button>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Lembrete de Medicamentos</h3>
            <p className="opacity-80 mb-4">
              Seu assistente pessoal para nunca mais esquecer seus medicamentos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="#"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="#"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3B82F6] transition-colors cursor-pointer"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="opacity-80 mb-4">
              Receba dicas e novidades sobre saúde e bem-estar.
            </p>
            <div className="flex">
              <Input
                placeholder="Seu e-mail"
                className="bg-white/10 border-0 text-white placeholder:text-white/50 rounded-r-none"
              />
              <Button className="bg-[#3B82F6] hover:bg-blue-700 rounded-l-none !rounded-button cursor-pointer whitespace-nowrap">
                Assinar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Lembrete de medicamentos. Todos os
            direitos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <i className="fab fa-cc-visa text-2xl"></i>
            <i className="fab fa-cc-mastercard text-2xl"></i>
            <i className="fab fa-cc-paypal text-2xl"></i>
            <i className="fab fa-cc-apple-pay text-2xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
