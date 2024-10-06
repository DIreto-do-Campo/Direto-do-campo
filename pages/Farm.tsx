import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '../components/ui/card';

const Farm = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col">
      <Navbar />
      <div className='grid grid-cols-10'>
        <div className='col-span-4 h-max-[300px] text-left content-center p-20'>
          <p className='text-lg font-semibold'>Orgulho de apoiar a agricultura familiar</p>
          <h2 className='text-hunterGreen text-4xl font-bold'>Feito para os produtores!</h2>
          <div className='grid grid-cols-2 p-2'>
            <div className='bg-hunterGreen text-white text-center w-4/5 rounded-[6px]'>
              <a href="" >
                Abra sua Loja

              </a>
            </div>
            <div className='border-2 border-hunterGreen text-hunterGreen text-center w-4/5 rounded-[6px]'>
              <a href="" >
                Fale com a gente

              </a>
            </div>
          </div>

        </div>

        <div className='col-span-6 max-h-[500px] p-4 overflow-hidden'>
          <div className="grid grid-cols-2 gap-4 overflow-hidden">
            <div className="overflow-hidden -translate-y-28">
              <img src="image2.jpg" alt="Foto 1" className="w-full h-full object-cover rounded" />
            </div>
            <div className="overflow-hidden">
              <img src="image3.jpg" alt="Foto 2" className="w-full h-full object-cover -translate-y-8 rounded" />
            </div>
            <div className="overflow-hidden -translate-y-28">
              <img src="image1.jpg" alt="Foto 3" className="w-full h-full object-cover rounded" />
            </div>
            <div className="overflow-hidden -translate-y-8">
              <img src="image4.jpg" alt="Foto 4" className="w-full h-full object-cover rounded" />
            </div>
            <div className="overflow-hidden -translate-y-28">
              <img src="image5.jpg" alt="Foto 5" className="w-full h-full object-cover rounded" />
            </div>
            <div className="overflow-hidden -translate-y-8">
              <img src="image6.jpg" alt="Foto 6" className="w-full h-full object-cover rounded" />
            </div>
          </div>

        </div>

      </div>

      <div className='border-t-2 border-t-hunterGreen mt-4 px-12'>
        <h2 className='text-hunterGreen text-3xl font-semibold text-center mt-4'>
          O que Nossos Agricultores Falam
        </h2>
        <div className='grid grid-cols-3 gap-10 mt-10'>
          <Card className='shadow-lg justify-between rounded-b-[15px]'>
            <CardHeader className='p-0'>
              <img src="/image2.jpg" alt="" className='rounded-t-[15px]' />
            </CardHeader>
            <CardContent className='text-hunterGreen text-lg'>
              <p>"A Direto do Campo é ...."</p>
              <p className='text-muted-foreground text-sm'>Joana Clara</p>
              <p className='text-muted-foreground text-sm'>Sitio florecer</p>

            </CardContent>

          </Card>
          <Card className='shadow-lg justify-between rounded-b-[15px]'>
            <CardHeader className='p-0'>
              <img src="/image2.jpg" alt="" className='rounded-t-[15px]' />
            </CardHeader>
            <CardContent className='text-hunterGreen'>
              <p>"A Direto do Campo é ...."</p>
              <p className='text-muted-foreground text-sm'>Joana Clara</p>
              <p className='text-muted-foreground text-sm'>Sitio florecer</p>

            </CardContent>

          </Card>
          <Card className='shadow-lg justify-between rounded-b-[15px]'>
            <CardHeader className='p-0'>
              <img src="/image2.jpg" alt="" className='rounded-t-[15px]' />
            </CardHeader>
            <CardContent className='text-hunterGreen'>
              <p>"A Direto do Campo é ...."</p>
              <p className='text-muted-foreground text-sm'>Joana Clara</p>
              <p className='text-muted-foreground text-sm'>Sitio florecer</p>

            </CardContent>

          </Card>

        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Farm;
