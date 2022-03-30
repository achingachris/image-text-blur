import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const image_list = [
    {
      id: 989,
      name: 'piano with brand text',
      url: 'https://res.cloudinary.com/demo/image/upload/piano.jpg',
    },
    {
      id: 990,
      name: 'piano with blurred brand text',
      url: 'https://res.cloudinary.com/demo/image/upload/e_pixelate_region:20,g_ocr_text/piano.jpg',
    },
  ]
  return (
    <>
      <Head>
        <title>Image Text Blur</title>
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
            {image_list.map((item) => (
              <div key={item.id} className='col'>
                {console.log(item.url)}
                <div className='card'>
                  <Image
                    src={item.url}
                    className='card-img-top'
                    alt='...'
                    width={500}
                    height={500}
                  />
                  <div className='card-body'>
                    <p className='card-text'>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
