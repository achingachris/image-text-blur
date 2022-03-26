import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Text Blur</title>
        {/* <!-- Bootstrap CSS only --> */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        ></link>
      </Head>
      <main className='container'>
        <h1 className='text-center m-4'>Text Image Blur</h1>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='card'>
                <Image
                  src='https://res.cloudinary.com/demo/image/upload/e_pixelate_region:20,g_ocr_text/piano.jpg'
                  className='card-img-top'
                  alt='...'
                  width={500}
                  height={500}
                />
                <div className='card-body'>
                  <p className='card-text'>Piano</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <Image
                  src='https://res.cloudinary.com/demo/image/fetch/c_fill,e_pixelate_region:30,h_80,w_200,x_170,y_260/http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Austin_A110_Westminster_MkII_tail.jpg/550px-Austin_A110_Westminster_MkII_tail.jpg'
                  className='card-img-top'
                  alt='...'
                  width={500}
                  height={500}
                />
                <div className='card-body'>
                  <p className='card-text'>Car Registration Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
