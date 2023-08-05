import { Carousel } from 'react-carousel-minimal';

function Slider() {
    const data = [
        {
            image: "https://sputnik.kg/img/102340/99/1023409982_0:369:4752:3055_1920x0_80_0_0_71da6e1fcd996f03c840c7379f05839a.jpg",
            caption: `Озеро Кель-Суу`
        },
        {
            image: "https://triptokyrgyzstan.com/sites/default/files/media/image/c_sergey_kalachov_1.jpg",
            caption: "Ала-Арча"
        },
        {
            image: "https://img.itinari.com/pages/images/original/ead534b7-8015-4bef-a61c-4b9d1becb242-istock-1059719798.jpg?ch=DPR&dpr=2.625&w=1600&s=878131a02f67c22c62fd4b18e59c4c46",
            caption: "Каньон Сказка"
        },
        {
            image: "https://wikiway.com/upload/hl-photo/dba/c66/ozero-sary-chelek_27.jpg",
            caption: "Озеро Сары-Челек"
        },
        {
            image: "https://triptokyrgyzstan.com/sites/default/files/media/image/c_genadii_vyenko_1_0.jpg",
            caption: "Джети-Огуз"
        },
        {
            image: "https://www.kyrgyzland.com/sites/default/files/styles/hero/public/p8300141_0.jpg?itok=EeK9wlH8",
            caption: "Озеро Коль-Тор"
        },
        {
            image: "https://www.issykkul.biz/Portals/0/GHA_imgs/ushele_altyn_arashan/ushele_altyn_arashan_6.jpg_426.jpg",
            caption: "Ущелье Алтын Арашан"
        },
        
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={8000}
                        width="100%"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            // maxWidth: "850px",
                            // maxHeight: "500px",
                            width: "100%",
                            // margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;
